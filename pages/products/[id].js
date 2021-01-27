import React from 'react'
import { wrapper } from '../../redux/store'
import ProductDetails from '../../components/Product'
import Error from "next/error"
import { fetchProductData } from '../../redux/actions/productAction'
import { allCategories } from '../../redux/actions/menuAction'


const Product = ({ productData = {}, statusCode }) => {
    if (statusCode) {
        return <Error statusCode={statusCode} />
    }
    return (
        <ProductDetails product={productData} />
    )
}


export const getServerSideProps = wrapper.getServerSideProps(
    async ({ store, query }) => {
        try {
            await store.dispatch(allCategories())
            const productId = query.id
            const data = await fetchProductData(productId)
            console.log('product=>', data)
            return {
                props: {
                    productData: data,
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
export default Product