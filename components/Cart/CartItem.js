import React from 'react'
import { Link } from 'next/link'
import { useRouter } from 'next/router'
import { formatPrice, getProductImage } from '../../services/utils'

const CartItem = ({ product, updateCartInfos }) => {
  const router = useRouter()
  let categoryName = getProductImage(product)
  const productImgSrc = `/img/produts-img/${categoryName}/${product.imageName}`
  const pushRouterProduct = (e, productId) => {
    e.preventDefault()
    router.push(`/products/${productId}`)
  }
  return (<tr className="cart_item" key={product.id}>
    <td className="product-remove">
      <a title="Remove this item" className="remove" onClick={() => updateCartInfos(product, 'delete')}>×</a>
    </td>
    <td className="product-thumbnail">
      {/* <Link href="/products/[id]" as={`/products/${product.id}`}> use router*/}
      <a href={`/products/${product.id}`} onClick={(e) => pushRouterProduct(e, product.id)}>
        <img width={145} height={145} alt="poster_1_up" className="shop_thumbnail" src={productImgSrc} />
      </a>
      {/* </Link> */}

    </td>
    <td className="product-name">

      {/* <Link href="/products/[id]" as={`/products/${product.id}`} passHref> use router*/}
      <a href={`/products/${product.id}`} onClick={(e) => pushRouterProduct(e, product.id)}>
        {product.name}
      </a>
      {/* </Link> */}
    </td>
    <td className="product-price">
      <span className="amount">{formatPrice(product.price)}</span>
    </td>
    <td className="product-quantity">
      <div className="quantity buttons_added">
        <button type="button" className="minus" onClick={() => updateCartInfos(product, 'remove')} >-</button>
        <input type="number" size={4} className="input-text qty text" title="Qty" value={product.qty} />
        <button type="button" className="plus" onClick={() => updateCartInfos(product, 'add')} >+</button>
      </div>
    </td>
    <td className="product-subtotal">
      <span className="amount">{formatPrice(product.qty * product.price)}</span>
    </td>
  </tr>)

}
export default CartItem