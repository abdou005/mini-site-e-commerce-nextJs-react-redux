import React from 'react'
import Link from 'next/link'
import { getProductImage, formatPrice } from '../../services/utils'
//import Rating from '../Rating'

const TopSellersItem = ({ topSellerProduct }) => {
    let productCategory = getProductImage(topSellerProduct)
    const productImgSrc = `img/produts-img/${productCategory}/${topSellerProduct.imageName}`
    const promoPrice = topSellerProduct.price -
        (topSellerProduct.price * topSellerProduct.discountRate) / 100;
    return (
        <div className="single-wid-product" >
            <Link href="/products/[id]" as={`/products/${topSellerProduct.id}`}>
                <img src={productImgSrc} alt="" className="product-thumb" />
            </Link>
            <h2>
                <Link href="/products/[id]" as={`/products/${topSellerProduct.id}`} >
                    {topSellerProduct.name}
                </Link>
            </h2>
            {/* <Rating rating = {topSellerProduct.review} /> */}
            <div className="product-wid-price">
                <ins>{formatPrice(promoPrice)}</ins>
                <del>{formatPrice(topSellerProduct.price)}</del>
            </div>
        </div>
    )
}
export default TopSellersItem;