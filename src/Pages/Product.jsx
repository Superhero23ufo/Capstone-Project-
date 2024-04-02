import React, { useContext } from "react";
import { ShppContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../Components/Breadcrum/Breadcrum";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";

const Product = () => {
   const {all_product}= useContext(ShppContext);
   const {productId}= useParams ();
   const product = all_product.find((e)=> e.id === Number(productId))
    return(
        <div>
            <Breadcrum product = {product}/>
            <ProductDisplay product = {product} />
        </div>
    )
}

export default Product;