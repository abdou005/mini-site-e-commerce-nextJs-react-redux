import React from 'react'
import { formatPrice } from '../../services/utils'
const CartSummary = ({ cartData, cartTotal }) => {
  return (<div className="cart_totals ">
    <h2>Cart Totals</h2>
    <table cellSpacing={0}>
      <tbody>
        <tr className="cart-subtotal">
          <th>Cart Subtotal</th>
          <td><span className="amount">{(cartData.hasOwnProperty("subTotal")) ? formatPrice(cartData.subTotal) : 0}</span></td>
        </tr>
        <tr className="shipping">
          <th>Taxe (20%)</th>
          <td>{(cartData.hasOwnProperty("tax")) ? formatPrice(cartData.tax) : 0}</td>
        </tr>
        <tr className="order-total">
          <th>Order Total</th>
          <td><strong><span className="amount">{formatPrice(cartTotal)}</span></strong> </td>
        </tr>
      </tbody>
    </table>
  </div>)
}
export default CartSummary


