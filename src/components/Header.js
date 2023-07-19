import React from 'react'

const Header = (props) => {
    return (
        <div>
            <div className="add-to-cart">
                <img alt="" src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" />
            </div>
            <h1>Home Component</h1>
            <span className='cart-count'>{props.data.length}</span>
        </div>
    )
}

export default Header