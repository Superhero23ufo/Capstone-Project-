import React, {createContext} from "react";
import all_product from "../Components/Asset/all_product"
export const ShppContext = createContext(null);

const ShopContextProvider = (props) =>{
    
    
    const contextValue  = {all_product}

    return (

        <ShppContext.Provider value={contextValue}>
            {props.children}
        </ShppContext.Provider>
    )
}


export default ShopContextProvider;