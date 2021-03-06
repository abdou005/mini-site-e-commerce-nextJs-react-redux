import React from 'react'

const RecentlyViewed = () => {
  return (
    <div className="col-md-4">
      <div className="single-product-widget">
        <h2 className="product-wid-title">Recently Viewed</h2>
        <a href="" className="wid-view-more">View All</a>
        <div className="single-wid-product">
          <a>
            <img src="/img/product-thumb-4.jpg" alt="" className="product-thumb" />
          </a>
          <h2>
            <a>Sony playstation microsoft</a>
          </h2>
          <div className="product-wid-rating">
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
          </div>
          <div className="product-wid-price">
            <ins>$400.00</ins>
            <del>$425.00</del>
          </div>
        </div>
        <div className="single-wid-product">
          <a>
            <img src="/img/product-thumb-1.jpg" alt="" className="product-thumb" />
          </a>
          <h2>
            <a >Sony Smart Air Condtion</a>
          </h2>
          <div className="product-wid-rating">
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
          </div>
          <div className="product-wid-price">
            <ins>$400.00</ins>
            <del>$425.00</del>
          </div>
        </div>
        <div className="single-wid-product">
          <a>
            <img src="/img/product-thumb-2.jpg" alt="" className="product-thumb" />
          </a>
          <h2>
            <a >Samsung gallaxy note 4</a>
          </h2>
          <div className="product-wid-rating">
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
          </div>
          <div className="product-wid-price">
            <ins>$400.00</ins>
            <del>$425.00</del>
          </div>
        </div>
      </div>
    </div>
  )
}
export default RecentlyViewed