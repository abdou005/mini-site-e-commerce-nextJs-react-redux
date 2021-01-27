import React from 'react'
import { wrapper } from '../../redux/store'
import ShopTile from '../../components/ProductList/ShopTitle'
import ProductListItems from '../../components/ProductList/ProductListItems'
import Error from "next/error"
import { fetchProductList } from '../../redux/actions/productAction'
import { allCategories } from '../../redux/actions/menuAction'



const ProductListDetails = ({ shopName = "", productListItems = [], statusCode }) => {

    if (statusCode) {
        return <Error statusCode={statusCode} />
    }
    return (
        <>
            <ShopTile title={shopName} />
            <ProductListItems productListItems={productListItems} />
        </>
    )

}


export const getServerSideProps = wrapper.getServerSideProps(
    async ({ store, query }) => {
        try {
            await store.dispatch(allCategories())
            const productListId = query.productListId
            const data = await fetchProductList(productListId)

            return {
                props: {
                    shopName: data.name,
                    productListItems: data.items
                },
            }
        } catch (error) {
            console.log(error)
            return {
                props: {
                    statusCode: error.response ? error.response.status : 500
                }
            }
        }

    }
)


export default ProductListDetails;


