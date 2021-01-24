import React from 'react'
import CartItem from './CartItem'
import { Link } from 'next/link'

const CartItems = (props) => {
  function renderCartItems() {
    return (
      props.cartData.items.map((product, index) => {
        return <CartItem product={product} updateCartInfos={props.updateCartInfos} key={index} />
      })
    );
  }


  return (<table cellSpacing={0} className="shop_table cart">
    <thead>
      <tr>
        <th className="product-remove">&nbsp;</th>
        <th className="product-thumbnail">&nbsp;</th>
        <th className="product-name">Product</th>
        <th className="product-price">Price</th>
        <th className="product-quantity">Quantity</th>
        <th className="product-subtotal">Total</th>
      </tr>
    </thead>
    <tbody>
      {props.cartData && props.cartData.items && props.cartData.items.length > 0 && renderCartItems()}
      <tr>
        <td className="actions" colSpan={6}>

          {/* <Link href="/checkout"><button value="Checkout" name="proceed" className="checkout-button button alt wc-forward" > </button></Link> */}
        </td>
      </tr>
    </tbody>
  </table>)

}
export default CartItems