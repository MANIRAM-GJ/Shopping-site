import React, { useContext } from 'react'
import './Cartitems.css'
import { Shopcontext } from '../../Context/Shopcontext'
import remove_icon from '../Assets/cart_cross_icon.png'


const Cartitems = () => {
    const {getTotalcartamount,all_product,cartItems,removefromcart}=useContext(Shopcontext);
  return (
    <div className='cartitems'>
        <div className="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>           
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        {all_product.map((e)=>{
            if(cartItems[e.id]>0){
                return <div>
                <div className="cartitems-format cartitems-format-main">
                    <img className='cartprod-icon' src={e.image} alt="" />
                    <p>{e.name}</p>
                    <p>${e.new_price}</p>
                    <button className='quantity'>{cartItems[e.id]}</button>
                    <p>${e.new_price*cartItems[e.id]}</p>
                    <img className='cartremove-icon'src={remove_icon} onClick={()=>{removefromcart(e.id)}} alt="" />
                </div>
                <hr />
            </div>
            }
            return null;
        })}
        <div className="cart-down">
            <div className="cart-total">
                <h1>cart Totals</h1>
                <div>
                    <div className="cart-totalitem">
                        <p>Subtotal</p>
                        <p>${getTotalcartamount()}</p>
                    </div>
                    <hr />
                    <div className="cart-totalitem">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="cart-totalitem">
                        <p>Total</p>
                        <p>${getTotalcartamount()}</p>
                    </div>
                    <hr />
                    
                </div>
                <button>PROCEED TO CHECKOUT</button>
            </div>
            <div className="cart-promocode">
                <p>If you have a promo code, Enter here</p>
                <div className="promobox">
                    <input type="text" placeholder='promo code' />
                    <button>Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cartitems