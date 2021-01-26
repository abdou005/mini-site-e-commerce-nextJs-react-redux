import React from 'react'
import { formatPrice } from '../../services/utils'
import Link from 'next/link'
import { connect } from 'react-redux'
import { useEffect } from 'react';
import { prepareCart } from '../../redux/actions/cartAction'



const MiniCart = ({ cartTotal, cartQty, prepareCart }) => {
  useEffect(() => {
    prepareCart()
  }, [])
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

const mapStateToProps = ({ cartPage }) => {
  return cartPage;
};
const mapDispatchToProps = (dispatch) => {
  return {
    prepareCart: () => dispatch(prepareCart()),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(MiniCart);
//export default connect((state) => state)(MiniCart)