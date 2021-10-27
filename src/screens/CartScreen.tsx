import React, { Fragment } from 'react'
const CartScreen: React.FC = () => {
    return (
        <Fragment>
            <div className="small-container products-cart">
                <table>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                    </tr>
                    <tr>
                        <td>
                            <div className="product-row">
                                <img src="/images/buy-1.jpg" alt="gallery-1" />
                                <div className="product-info">
                                    <h4>Intelligent Cotton Fish</h4>
                                    <p>Price: $50.00</p>
                                    <a href="#">Remove</a>
                                </div>
                            </div>
                        </td>
                        <td>
                            <input type="number" value="1" min="1" />
                        </td>
                        <td>
                            <h4>$50.00</h4>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="product-row">
                                <img src="/images/buy-2.jpg" alt="gallery-1" />
                                <div className="product-info">
                                    <h4>Intelligent Cotton Fish</h4>
                                    <p>Price: $50.00</p>
                                    <a href="#">Remove</a>
                                </div>
                            </div>
                        </td>
                        <td>
                            <input type="number" value="1" min="1" />
                        </td>
                        <td>
                            <h4>$50.00</h4>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="product-row">
                                <img src="/images/buy-3.jpg" alt="gallery-1" />
                                <div className="product-info">
                                    <h4>Intelligent Cotton Fish</h4>
                                    <p>Price: $50.00</p>
                                    <a href="#">Remove</a>
                                </div>
                            </div>
                        </td>
                        <td>
                            <input type="number" value="1" min="1" />
                        </td>
                        <td>
                            <h4>$50.00</h4>
                        </td>
                    </tr>
                </table>

                <div className="total-product">
                    <table>
                        <tr>
                            <td>Subtotal</td>
                            <td>$200.00</td>
                        </tr>
                        <tr>
                            <td>Tax</td>
                            <td>$35.00</td>
                        </tr>
                        <tr>
                            <td>Total</td>
                            <td>$230.00</td>
                        </tr>
                    </table>
                </div>
            </div>
        </Fragment>
    );
}

export default CartScreen