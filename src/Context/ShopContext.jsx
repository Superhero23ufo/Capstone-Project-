import React, {createContext, useState} from "react";
import all_product from "../Components/Asset/all_product"
export const ShppContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length+1; index++){
        cart[index]= 0
    }

    return cart;
}

const ShopContextProvider = (props) =>{
    const [cartItems,setCartItems] = useState(getDefaultCart())
    
   

    const addtoCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        console.log(cartItems);
    }
    
    const removefromCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    
   
    const contextValue  = {all_product,cartItems,addtoCart,removefromCart};
    return (

        <ShppContext.Provider value={contextValue}>
            {props.children}
        </ShppContext.Provider>
    )
}


export default ShopContextProvider;