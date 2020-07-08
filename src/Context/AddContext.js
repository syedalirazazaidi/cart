import React, { createContext,useReducer } from "react";
import {Data} from '../Components/Constants/Data';
import cartReducer from "./AppReducer";
const initialState={
    items : Data,
    cartItems:[],
    itemsCount :0,
    total:0
}
export const AddContext = createContext(initialState);
const CartContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(cartReducer, initialState)
     function addToCart (id) {
        dispatch({type: 'ADD_ITEM', payload:id})
    }
    const remove=(id)=> {
        dispatch({
          type: 'REMOVE',
          payload: id
        })
      }
  
      const increase=(id)=> {
        dispatch({
          type: 'INCREASE',
          payload: id
        })
      }
  
      const decrease=(id)=> {
        dispatch({
          type: 'DECREASE',
          payload: id
        })
      }
    return ( 
        <AddContext.Provider value={{ itemsCount: state.cartItems.length,
          addToCart,
          remove,
          increase,
          decrease,
          total:state.total,
          cartItems:state.cartItems
       }}>
            { children }
        </AddContext.Provider>
     );
}
 
export default CartContextProvider;