import React from 'react'
import Link from 'next/link'
import { getProductImage, formatPrice } from '../../services/utils'
//import Rating from '../Rating'
const TopNewItem = ({ topNewProduct }) => {
    let productCategory = getProductImage(topNewProduct)
    const productImgSrc = `img/produts-img/${productCategory}/${topNewProduct.imageName}`
    const promoPrice = topNewProduct.price -
        (topNewProduct.price * topNewProduct.discountRate) / 100;
    return (
        <div className="single-wid-product" >
            <Link href="/products/[id]" as={`/products/${topNewProduct.id}`}>
                <img src={productImgSrc} alt="" className="product-thumb" />
            </Link>
            <h2>
                <Link href="/products/[id]" as={`/products/${topNewProduct.id}`} >
                    {topNewProduct.name}
                </Link>
            </h2>
            {/* <Rating rating={topNewProduct.review} /> */}
            <div className="product-wid-price">
                <ins>{formatPrice(promoPrice)}</ins>
                <del>{formatPrice(topNewProduct.price)}</del>
            </div>
        </div>
    )
}
export default TopNewItem;