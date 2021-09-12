import React from 'react'
import '../CartWidget/CartWidget.css'


const CartWidget = () => {
    return (
        <div className="Cart">
            <i className="fas fa-shopping-cart"></i>
            <div className="Cart_count">
                <p>0</p>
            </div>
        </div>
    )
}

export default CartWidget
