import React from 'react'
import ShopTile from '../../components/ProductList/ShopTitle'
import ProductListItems from '../../components/ProductList/ProductListItems'
import Error from "next/error"
import axios from 'axios'
import { fetchProductList } from '../../redux/actions/productAction'

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

export default ProductListDetails

export async function getServerSideProps(context) {
    try {
        const productListId = context.query.productListId
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
