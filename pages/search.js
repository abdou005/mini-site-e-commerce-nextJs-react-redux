import React, { useEffect, useState, useRef } from 'react'
import ShopTile from '../components/ProductList/ShopTitle'
import { wrapper } from '../redux/store'
import ProductListItems from '../components/ProductList/ProductListItems'
import { useRouter } from 'next/router'
import { searchProduct } from '../redux/actions/productAction'
import { allCategories } from '../redux/actions/menuAction'

const SearchProduct = () => {
    const router = useRouter()
    const keyword = router.query.q
    const [productListItems, setProductListItems] = useState([]);
    const fetchListItems = async (mounted) => {
        const result = await searchProduct(keyword)
        if (mounted) {
            setProductListItems(result)
        }
    };
    useEffect(
        () => {
            let mounted = true
            fetchListItems(mounted)
            mounted = false
        },
        [keyword]
    );


    return (
        <>
            <ShopTile title={keyword} />
            {productListItems.length > 0 ?
                <ProductListItems productListItems={productListItems} /> :
                <div style={{ textAlign: 'center' }}>
                    <p>----------------------------------------------------------------------------------</p>
                    <p>----------------------------------------------------------------------------------</p>
                    <p>----------------------------------------------------------------------------------</p>
                    <p>----------------------------------Loading data---------------------------------</p>
                    <p>----------------------------------------------------------------------------------</p>
                    <p>----------------------------------------------------------------------------------</p>
                    <p>----------------------------------------------------------------------------------</p>
                </div>
            }
        </>
    )

}

export const getServerSideProps = wrapper.getServerSideProps(
    async ({ store }) => {
        await store.dispatch(allCategories())
    }
)

export default SearchProduct;


