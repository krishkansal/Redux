//define the work of the functionality and also type

import {ADD_TO_CART} from "../constants"
import { REMOVE_TO_CART } from "../constants";

//add to cart
export const addtocart=(data)=>{
    console.log("action:",data);
    return{
        type:ADD_TO_CART,
        data:data
    }
}

//remove from cart
export const removetocart=()=>{
    console.log("action:");
    return{
        type:REMOVE_TO_CART,
        
    }
}