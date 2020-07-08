import React, { createContext, useState } from 'react';
import { Data } from '../Components/Constants/Data';
export const ProductsContext = createContext()
const ProductsContextProvider = ({children}) => {
    const [products] = useState(Data);
    return ( 
        <ProductsContext.Provider value={{products}} >
            { children }
        </ProductsContext.Provider>
     );
}
 
export default ProductsContextProvider;