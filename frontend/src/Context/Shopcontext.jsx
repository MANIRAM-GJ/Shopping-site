import React,{createContext, useState} from 'react'
import all_product from '../Components/Assets/all_product'


export const Shopcontext=createContext(null);

const getDefaultCart=()=>{
    let cart={};
    for(let i=0;i<all_product.length+1;i++){
        cart[i]=0;
    }
    return cart;
}

const ShopcontextProvider=(props)=>{
    
    const [cartItems,setcartItems]=useState(getDefaultCart());
    
    const addtocart=(itemid)=>{
        setcartItems((prev)=>({...prev,[itemid]:prev[itemid]+1}))
        
    }

    const removefromcart=(itemid)=>{
        setcartItems((prev)=>({...prev,[itemid]:prev[itemid]-1}))
    }

    const getTotalcartamount=()=>{
        let totalamt=0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let iteminfo=all_product.find((product)=>product.id===Number(item))
                totalamt+=iteminfo.new_price*cartItems[item];
            }
            
        }
        return totalamt;
    }

    const getTotalcartitems=()=>{
        let totalitem=0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                totalitem+=cartItems[item];
            }
        }
        return totalitem;
    }



    const contextval={getTotalcartitems,getTotalcartamount,all_product,cartItems,addtocart,removefromcart,};

    return(
        <Shopcontext.Provider value={contextval}>
            {props.children}
        </Shopcontext.Provider>
    )
}

export default ShopcontextProvider;