import React from 'react'

const MiniCart = ({ cartTotal, cartQty }) => {
  return (
    <div className="col-sm-4">
      <div className="shopping-item">
        <a>
          Cart :  <span className="cart-amunt">{cartTotal}</span> <i className="fa fa-shopping-cart" /> <span className="product-count">{cartQty}</span>
        </a>
      </div>
    </div>
  )
}
export default MiniCart