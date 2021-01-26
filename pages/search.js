import React from 'react'
import ShopTile from '../components/ProductList/ShopTitle'
import ProductListItems from '../components/ProductList/ProductListItems'
import Error from "next/error"
import { searchProduct } from '../redux/actions/productAction'


const SearchProduct = ({ shopName = "", productListItems = [], statusCode }) => {
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


export async function getServerSideProps(context) {
    try {
        const keyword = context.query.q
        const data = await searchProduct(keyword)
        return {
            props: {
                shopName: keyword,
                productListItems: data
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


export default SearchProduct;


