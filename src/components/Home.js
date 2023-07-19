import React from 'react'

const Home = (props) => {
    console.log("home",props.data);
    console.log(props);
  return (
    <div>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img alt="" src="https://m.media-amazon.com/images/I/71yzJoE7WlL._AC_UF1000,1000_QL80_.jpg" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button onClick={()=>props.addToCartHandler({price:1000})}>Add To Cart</button>
                    
                    <button className='remove-cart-btn' onClick={()=>props.removeToCartHandler()} >Remove To Cart</button>
                </div>
                
            </div>
            </div>
  )
}

export default Home