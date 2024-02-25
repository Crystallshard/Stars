import React, { createContext, useState, useContext } from 'react'




export const CartContext = createContext({
    products: [],
    addProductToCart: (product) => { },
    deleteProduct: (id) => { },
})

export const CartContextProvider = ({ children }) => {


    const [products, setProducts] = useState([])


    const addProduct = (product) => {
        setProducts(currentProductsFromState => [...currentProductsFromState, product])
    }

    const deleteProductFromCart = (id) => {
        const index = products.findIndex(({ id }) => id);
        if (index !== -1) {
            setProducts([
                ...products.slice(0, index),
                ...products.slice(index + 1)
            ]);
        }
        // console.log('delete clicked')
    }

    return (
        <CartContext.Provider value={{
            products,
            addProductToCart: addProduct,
            deleteProduct: deleteProductFromCart
        }}>
            {children}
        </CartContext.Provider>

    )
}

export const useCartContext = () => useContext(CartContext)