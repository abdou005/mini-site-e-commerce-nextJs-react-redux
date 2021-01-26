import React from 'react'
import ProductInfos from './ProductInfos'
import Breadcrumb from './Breadcrumb'
const ProductDetails = ({ product }) => {
    return (

        <div className="single-product-area">
            <div className="zigzag-bottom" />
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="single-sidebar">
                            <h2 className="sidebar-title">Recently Viewed</h2>
                            <div className="thubmnail-recent">
                                <img src="/img/product-thumb-1.jpg" className="recent-thumb" alt="" />
                                <h2><a href="true">Sony Smart TV - 2015</a></h2>
                                <div className="product-sidebar-price">
                                    <ins>700.00 € </ins> <del>100.00 €</del>
                                </div>
                            </div>
                            <div className="thubmnail-recent">
                                <img src="/img/product-thumb-1.jpg" className="recent-thumb" alt="" />
                                <h2><a href="true">Sony Smart TV - 2015</a></h2>
                                <div className="product-sidebar-price">
                                    <ins>$700.00</ins> <del>$100.00</del>
                                </div>
                            </div>
                            <div className="thubmnail-recent">
                                <img src="/img/product-thumb-1.jpg" className="recent-thumb" alt="" />
                                <h2><a href="true">Sony Smart TV - 2015</a></h2>
                                <div className="product-sidebar-price">
                                    <ins>$700.00</ins> <del>$100.00</del>
                                </div>
                            </div>
                            <div className="thubmnail-recent">
                                <img src="/img/product-thumb-1.jpg" className="recent-thumb" alt="" />
                                <h2><a href="true">Sony Smart TV - 2015</a></h2>
                                <div className="product-s idebar-price">
                                    <ins>$700.00</ins> <del>$100.00</del>
                                </div>
                            </div>
                        </div>
                        <div className="single-sidebar">
                            <h2 className="sidebar-title">Others brands</h2>
                            <ul>
                                <li><a href="true">Sony</a></li>
                                <li><a href="true">Samsung</a></li>
                                <li><a href="true">LG</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="product-content-right">
                            <Breadcrumb product={product} />
                            <ProductInfos productData={product} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductDetails