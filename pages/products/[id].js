import ProductDetails from '../../components/Product'
import Error from "next/error"
import { fetchProductData } from '../../redux/actions/productAction'


const Product = ({ productData = {}, statusCode }) => {
    if (statusCode) {
        return <Error statusCode={statusCode} />
    }
    return (
        <ProductDetails product={productData} />
    )
}

export async function getServerSideProps(context) {
    try {
        const productId = context.query.id
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
export default Product