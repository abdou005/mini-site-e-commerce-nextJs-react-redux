import React from 'react'
import { connect } from 'react-redux'
import Link from 'next/link'
import { getProductImage, formatPrice } from '../../services/utils'
import { updateCartData } from '../../redux/actions/cartAction'

const ProductListItem = ({ product, cartPage, updateCartData }) => {

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
  let productCategory = getProductImage(product)
  const productImgSrc = `/img/produts-img/${productCategory}/${product.imageName}`

  const promoPrice = product.price -
    (product.price * product.discountRate) / 100;

  return (<div className="col-md-3 col-sm-6">
    <div className="single-shop-product">
      <div className="product-upper">
        <img src={productImgSrc} alt="" />
      </div>
      <h2>
        <Link href="/products/[id]" as={`/products/${product.id}`}>
          {product.name}
        </Link>
      </h2>
      <div className="product-carousel-price">
        <ins>{formatPrice(promoPrice)}</ins> <del>{formatPrice(product.price)}</del>
      </div>
      <div className="product-option-shop">
        {/* {<Link href="/cart">} */}
        <a href="" className="add_to_cart_button" data-quantity={1} rel="nofollow" onClick={(e) => addProductToCart(e, product)}>Add to cart</a>
        {/* </Link> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductListItem);
