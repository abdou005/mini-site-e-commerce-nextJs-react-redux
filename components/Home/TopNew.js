import React from 'react'
import TopNewItem from './topNewItem'
const TopNew = (props) => {

  function renderTopNewItems() {
    return (
      props.topNewListProducts.map((topNewProduct, index) => {
        return <TopNewItem topNewProduct={topNewProduct} key={index} />
      })
    );
  }
  return (
    <div className="col-md-4">
      <div className="single-product-widget">
        <h2 className="product-wid-title">Top New</h2>
        <a href="#" className="wid-view-more">View All</a>
        {props.topNewListProducts && props.topNewListProducts.length > 0 &&
          renderTopNewItems()
        }
      </div>
    </div>
  )
}
export default TopNew