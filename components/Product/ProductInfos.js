import React from 'react'
import { useState } from 'react'
import { getProductImage, formatPrice } from '../../services/utils'
import { connect } from 'react-redux'
import { updateCartData } from '../../redux/actions/cartAction'



const ProductInfos = ({ productData, cartPage, updateCartData }) => {

    const [productQuantity, setProductQuantity] = useState(1)

    const addProductToCart = (e) => {
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
                qty: productQuantity
            }]
        }
        updateCartData(updatedCart)
    }
    const changeQuantity = (e) => {
        e.preventDefault();
        setProductQuantity(e.target.value)
    }
    let productCategory = getProductImage(productData)
    const productImgSrc = `/img/produts-img/${productCategory}/${productData.imageName}`
    const promoPrice = productData.price +
        (productData.price * productData.discountRate) / 100;
    return (
        <div className="row">
            <div className="col-sm-6">
                <div className="product-images">
                    <div className="product-main-img">
                        <img src={productImgSrc} alt="" />
                    </div>
                    <div className="product-gallery">
                        <img src="/img/product-thumb-1.jpg" alt="" />
                        <img src="/img/product-thumb-2.jpg" alt="" />
                        <img src="/img/product-thumb-3.jpg" alt="" />
                    </div>
                </div>
            </div>

            <div className="col-sm-6">
                <div className="product-inner">
                    <h2 className="product-name">{productData.name}</h2>
                    <div className="product-inner-price">
                        <ins>{formatPrice(productData.price)}</ins> <del>{formatPrice(promoPrice)}</del>
                    </div>
                    <form action="true" className="cart">
                        <div className="quantity">
                            <input type="number" size={4} className="input-text qty text" title="Qty" onChange={(e) => changeQuantity(e)} value={productQuantity} name="quantity" min={1} step={1} />
                        </div>
                        <button className="add_to_cart_button" type="submit" onClick={(e) => addProductToCart(e)} >Add to cart</button>
                    </form>
                    <div className="product-inner-category">
                        <h2>Product Description</h2>
                        <p>{productData.description}</p>
                    </div>
                </div>
            </div>
        </div>)
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
export default connect(mapStateToProps, mapDispatchToProps)(ProductInfos);

