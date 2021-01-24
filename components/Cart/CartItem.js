import React from 'react'
import { Link } from 'next/link'
import { formatPrice, getProductImage } from '../../services/utils'

const CartItem = ({ product, updateCartInfos }) => {
  let categoryName = getProductImage(product)
  const productImgSrc = `/img/produts-img/${categoryName}/${product.imageName}`

  return (<tr className="cart_item" key={product.id}>
    <td className="product-remove">
      <a title="Remove this item" className="remove" onClick={() => updateCartInfos(product, 'delete')}>×</a>
    </td>
    <td className="product-thumbnail">
      {/* <Link href="/products/[id]" as={`/products/${product.id}`}> use router*/}
      <img width={145} height={145} alt="poster_1_up" className="shop_thumbnail" src={productImgSrc} />
      {/* </Link> */}

    </td>
    <td className="product-name">

      {/* <Link href="/products/[id]" as={`/products/${product.id}`} passHref> */}
      {product.name}
      {/* </Link> */}
    </td>
    <td className="product-price">
      <span className="amount">{formatPrice(product.price)}</span>
    </td>
    <td className="product-quantity">
      <div className="quantity buttons_added">
        <input type="button" className="minus" defaultValue="-" onClick={() => updateCartInfos(product, 'remove')} />
        <input type="number" size={4} className="input-text qty text" title="Qty" defaultValue={product.qty} min={1} step={1} />
        <input type="button" className="plus" defaultValue="+" onClick={() => updateCartInfos(product, 'add')} />
      </div>
    </td>
    <td className="product-subtotal">
      <span className="amount">{formatPrice(product.qty * product.price)}</span>
    </td>
  </tr>)

}
export default CartItem