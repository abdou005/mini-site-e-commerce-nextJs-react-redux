import React from 'react'
import Link from 'next/link'
import { getProductImage } from '../../services/utils'
import { connect } from 'react-redux'


const Breadcrumb = ({ homePage, product }) => {
    const categoryName = getProductImage(product)
    const categories = homePage.categories
    const category = categories.filter(category => category.name === categoryName);
    return (
        <div className="product-breadcroumb">

            <Link href="/" > Home</Link>
            {category.length > 0 && <Link href="/productList/[productListId]" as={`/productList/${category[0].productListId}`} >{categoryName}</Link>}
            <Link href="/products/[id]" as={`/products/${product.id}`} >{product.name}</Link>

        </div>
    )

}
export default connect((state) => state)(Breadcrumb)