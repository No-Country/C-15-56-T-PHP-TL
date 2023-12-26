import {createContext, useState} from 'react';

const TiendaContext = createContext();

const TiendaProvider = ({children}) => {
    
    
    // carrito
    const [allProducts, setAllProducts] = useState([]);
    const [total, setTotal] = useState(0);
    const [countProducts, setCountProducts] = useState(0);

    return(
        <TiendaContext.Provider
            value={{
                allProducts,
                setAllProducts,
                total,
                setTotal,
                countProducts,
                setCountProducts
            
            }}
        >
            {children}
        </TiendaContext.Provider>
    )
}

export {
    TiendaProvider
}

export default TiendaContext;