import React from 'react'
import Link from 'next/link'
import { getProductImage, formatPrice } from '../../services/utils'

const ProductListItem = ({ product, addProductToCart }) => {

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
export default ProductListItem 