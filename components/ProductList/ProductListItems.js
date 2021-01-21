import React from 'react'
import ProductListPagination from './ProductListPagination'
import ProductListItem from './ProductListItem'

const ProductListItems = (props) => {

  function renderProductListItems() {
    return (
      props.productListItems.map((product, index) => {
        return <ProductListItem product={product} key={index} />
      })
    );
  }


  return (
    <div className="single-product-area">
      <div className="zigzag-bottom" />
      <div className="container">
        <div className="row">
          {props.productListItems && props.productListItems.length > 0 && renderProductListItems()}
        </div>

        <ProductListPagination />


      </div>
    </div>
  )
}
export default ProductListItems