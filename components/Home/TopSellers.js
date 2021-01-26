import React from 'react'

import TopSellersItem from './TopSellersItem'

const TopSellers = ({ topSellersListProducts }) => {
  function renderTopSellersItems() {
    return (
      topSellersListProducts.map((topSellerProduct, index) => {
        return <TopSellersItem topSellerProduct={topSellerProduct} key={index} />
      })
    )
  }
  return (
    <div className="col-md-4">
      <div className="single-product-widget">
        <h2 className="product-wid-title">Top Sellers</h2>
        <a href="" className="wid-view-more">View All</a>
        {topSellersListProducts && topSellersListProducts.length > 0 &&
          renderTopSellersItems()
        }
      </div>
    </div>
  )
}
export default TopSellers