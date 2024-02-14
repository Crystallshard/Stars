import React, { createContext, useState, useContext } from 'react'

export const CartContext = createContext({
    products: [],
    addProductToCart: (product) => {},
    deleteProduct: (id) => {},
})

export const CartContextProvider = ({ children }) => {
    const [products, setProducts] = useState([])

    const addProduct = (product) => {
        setProducts(currentProductsFromState => [...currentProductsFromState, product])
    }

    const deleteProductFromCart = (id) => {

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