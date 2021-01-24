import React from 'react'
import { formatPrice } from '../../services/utils'
import Link from 'next/link'
import { connect } from 'react-redux'

const MiniCart = ({ cartPage }) => {
  const { cartTotal, cartQty } = cartPage
  return (
    <div className="col-sm-4">
      <div className="shopping-item">
        <Link href="/cart">
          <a>
            Cart :  <span className="cart-amunt">{cartTotal ? formatPrice(cartTotal) : 0}</span> <i className="fa fa-shopping-cart" /> <span className="product-count">{cartQty}</span>
          </a>
        </Link>
      </div>
    </div>
  )
}
export default connect((state) => state)(MiniCart)