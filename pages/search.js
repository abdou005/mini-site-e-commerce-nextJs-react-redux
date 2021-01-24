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
        console.log("query=>", context.query)
        const keyword = context.query.q
        console.log("key=>", keyword)

        const data = await searchProduct(keyword)
        console.log('data=>', data)
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


