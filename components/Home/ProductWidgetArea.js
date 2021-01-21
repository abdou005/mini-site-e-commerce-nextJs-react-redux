import React from 'react'
import RecentlyViewed from './RecentlyViewed'
import TopNew from './TopNew'
import TopSellers from './TopSellers'

const ProductWidgetArea = ({ topSellersListProducts, topNewListProducts }) => {
  return (
    <div className="product-widget-area">
      <div className="zigzag-bottom" />
      <div className="container">
        <div className="row">
          <TopSellers topSellersListProducts={topSellersListProducts} />
          <RecentlyViewed />
          <TopNew topNewListProducts={topNewListProducts} />
        </div>
      </div>
    </div>
  )
}

export default ProductWidgetArea