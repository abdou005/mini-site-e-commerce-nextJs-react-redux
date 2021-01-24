import React from 'react'
import ProductListPagination from './ProductListPagination'
import ProductListItem from './ProductListItem'

const ProductListItems = ({ productListItems, addProductToCart }) => {

  function renderProductListItems() {
    return (
      productListItems.map((product, index) => {
        return <ProductListItem product={product} key={index} addProductToCart={addProductToCart} />
      })
    );
  }


  return (
    <div className="single-product-area">
      <div className="zigzag-bottom" />
      <div className="container">
        <div className="row">
          {productListItems && productListItems.length > 0 && renderProductListItems()}
        </div>

        <ProductListPagination />


      </div>
    </div>
  )
}
export default ProductListItems