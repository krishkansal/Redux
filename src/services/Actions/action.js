//define the work of the functionality and also type

import {ADD_TO_CART} from "../constants"
export const addtocart=(data)=>{
    console.log("action:",data);
    return{
        type:ADD_TO_CART,
        data:data
    }
}