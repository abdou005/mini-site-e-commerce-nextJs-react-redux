import React from 'react'
const SimilarProduct = () => {
  return (<div className="cross-sells">
    <h2>You may be interested in...</h2>
    <ul className="products">
      <li className="product">
        <a >
          <img width={325} height={325} alt="T_4_front" className="attachment-shop_catalog wp-post-image" src="/img/product-2.jpg" />
          <h3>Ship Your Idea</h3>
          <span className="price"><span className="amount">20.00 €</span></span>
        </a>
        <a className="add_to_cart_button" data-quantity={1} data-product_sku data-product_id={22} rel="nofollow" >Add to Cart</a>
      </li>
      <li className="product">
        <a >
          <img width={325} height={325} alt="T_4_front" className="attachment-shop_catalog wp-post-image" src="/img/product-4.jpg" />
          <h3>Ship Your Idea</h3>
          <span className="price"><span className="amount">20.00 €</span></span>
        </a>
        <a className="add_to_cart_button" data-quantity={1} data-product_sku data-product_id={22} rel="nofollow" >Add to Cart</a>
      </li>
    </ul>
  </div>)
}
export default SimilarProduct