import React, { createContext,useReducer } from 'react';
import AppReducer from './AppReducer';
import {Data} from '../Constants/Data';
const initialState={
    addedItems:Data,
    items:[]
}
export const CartContext = createContext(initialState);
export const CartProvider=({children})=>{
    const [state,dispatch]=useReducer(AppReducer,initialState);
    function removeItem(id){
        dispatch({
             type:"REMOVE_ITEM",
             payload:id
        })
    }
    return(
        <CartContext.Provider value={{
          addedItems:state.addedItems,
          removeItem,
          items:state.items
        }}>
            {children}
        </CartContext.Provider>

    )
}