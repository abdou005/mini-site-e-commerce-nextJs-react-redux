import React from 'react'
import ShopTile from '../../components/ProductList/ShopTitle'
import ProductListItems from '../../components/ProductList/ProductListItems'
import Error from "next/error"
import { fetchProductList } from '../../redux/actions/productAction'
import { connect } from 'react-redux'
import { updateCartData } from '../../redux/actions/cartAction'


const ProductListDetails = ({ shopName = "", productListItems = [], statusCode, cartPage, updateCartData }) => {
    console.log(cartPage)
    const addProductToCart = (e, productData) => {
        e.preventDefault()
        const { cartData, cartId } = cartPage
        let discountPrice = productData.discountRate ? Math.round(productData.price - (productData.price * productData.discountRate * 0.01)) : '';
        let cartTotalPrice = (cartData.hasOwnProperty("total")) ? cartData.total + productData.price : productData.price
        let cartTax = (cartData.hasOwnProperty("tax")) ? cartData.hasOwnProperty("tax") : 0
        let cartItems = (cartData.hasOwnProperty("items")) ? cartData.items : []
        let updatedCart = {
            id: cartId,
            total: cartTotalPrice,
            subTotal: (cartData.hasOwnProperty("subTotal")) ? cartData.subTotal + (discountPrice ? discountPrice : productData.price) : (discountPrice ? discountPrice : productData.price),
            tax: Math.round(cartTax + productData.price * 0.02),
            items: [...cartItems, {
                id: productData.id,
                name: productData.name,
                imageName: productData.imageName,
                price: productData.price,
                qty: 1
            }]
        }
        updateCartData(updatedCart)
    }
    if (statusCode) {
        return <Error statusCode={statusCode} />
    }
    return (
        <>
            <ShopTile title={shopName} />
            <ProductListItems productListItems={productListItems} addProductToCart={addProductToCart} />
        </>
    )

}


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
const mapStateToProps = ({ cartPage }) => {
    return {
        cartPage,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateCartData: (cartInfos) => dispatch(updateCartData(cartInfos))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductListDetails);


