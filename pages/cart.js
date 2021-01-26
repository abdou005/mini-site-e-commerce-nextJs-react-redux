import React from 'react'
import { connect } from 'react-redux'
import CartItems from '../components/Cart/CartItems'
import SimilarProduct from '../components/Cart/SimilarProduct'
import CartSummary from '../components/Cart/CartSummary'
import { updateCartData } from '../redux/actions/cartAction'

const Cart = ({ cartPage, updateCartData }) => {
    const { cartData, cartId, cartQty, cartTotal } = cartPage
    const updateCartInfos = (productData, context) => {
        console.log('qte =>', productData.qty)
        let cartTax = (cartData.hasOwnProperty("tax")) ? cartData.hasOwnProperty("tax") : 0
        let cartItems = (cartData.hasOwnProperty("items")) ? cartData.items : []
        let foundIndex = cartItems.findIndex(x => x.id == productData.id);
        let cartQuantity = (context == "add") ? parseInt(productData.qty) + 1 : (context == "remove") ? parseInt(productData.qty) - 1 : 0
        let discountPrice = (context == "add") ? productData.discountRate ? Math.round(productData.price - (productData.price * productData.discountRate * 0.01)) : 0 : 0
        let cartTotalPrice = 0
        let cartSubTotal = 0
        if (context == "add") {
            cartSubTotal = (cartData.hasOwnProperty("subTotal")) ? cartData.subTotal + (discountPrice ? discountPrice : productData.price) : (discountPrice ? discountPrice : productData.price)

        } else if (context == "remove") {
            cartSubTotal = (cartData.hasOwnProperty("subTotal")) ? cartData.subTotal - (discountPrice ? discountPrice : productData.price) : (discountPrice ? discountPrice : productData.price)
        } else {
            cartSubTotal = (cartData.hasOwnProperty("subTotal")) ? cartData.subTotal - (discountPrice ? discountPrice : parseInt(productData.qty) * productData.price) : (discountPrice ? discountPrice : productData.qty * productData.price)
        }

        if (context == "add") {
            cartTotalPrice = (cartData.hasOwnProperty("total")) ? cartData.total + productData.price : productData.price
        } else if (context == "remove") {
            cartTotalPrice = (cartData.hasOwnProperty("total")) ? cartData.total - productData.price : 0
        } else {
            cartTotalPrice = (cartData.hasOwnProperty("total")) ? cartData.total - (parseInt(productData.qty) * productData.price) : 0
        }
        productData.qty = cartQuantity
        if (cartQuantity == 0) {
            cartItems.splice(foundIndex, 1);
        }
        let updatedCart = {
            id: cartId,
            total: cartTotalPrice,
            subTotal: cartSubTotal,
            tax: Math.round(cartTax + productData.price * 0.02),
            items: [...cartItems]
        }
        updateCartData(updatedCart)

    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    {(cartData && cartData.items && cartData.items.length > 0) && <div className="product-content-right">
                        <div className="woocommerce">
                            <CartItems updateCartInfos={updateCartInfos} cartData={cartData} cartQty={cartQty} cartId={cartId} />
                            <div className="cart-collaterals">
                                <SimilarProduct />
                                <CartSummary cartData={cartData} cartTotal={cartTotal} />
                            </div>
                        </div>
                    </div>
                    }
                </div>
            </div>
        </div>
    )
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
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
