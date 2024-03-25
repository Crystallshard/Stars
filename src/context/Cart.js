import React, { createContext, useState, useContext, useEffect } from 'react'


export const CartContext = createContext({
    cart: [],
    // products: [],
    addProductToCart: (product) => { },
    deleteProduct: (id, size) => { },
    incrementQuantity: (id, size) => { },
    deincrementQuantity: (id, size, quantity) => { },
    sizeGarmentCommit: (id) => { },
    sizeSelectBuffer: (id, product, size) => { },
})

export const CartContextProvider = ({ children }) => {

    // const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    
    let test = ""
    if (typeof window !== 'undefined') {
        const size = sessionStorage.getItem('key');
        test = size
    }

    useEffect(() => {
        console.log("cart array", cart);
    }, [cart]);

    // const match = () => {
    //     let theMatch = ""
    //     cart.forEach((product) => {
    //         const result = cart.some(item => size === item.size)
    //         theMatch = result
    //     })
    //     return theMatch
    // }
    
    const sizeBuffer = (id, product) => {
        setCart((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, size: item.size } : item
                
            )
        );
    }

    const sizeCommit = (id, product) => {
        setCart((prev) =>
            prev.map((item) =>
                item.size === product.size ? { ...item, size: test, inBag: true } : item
            )
        );
    }

    const addProduct = (product) => {
        increment(product.id, test)
        let result = false
        cart.map((item) => {
            const a = cart.some((items) => items.size === test && items.id === product.id)        
            result = a
        })
        // console.log("the id in page", product.id, "and the result is", result)
        // console.log("already in cart is", alreadyInCart)

        
        let alreadyInCart = false;
        let alreadyInCartSize = false;
        cart.map((item) => {
            if (item.id === product.id) {
                alreadyInCart = true;
            }

            if (alreadyInCart && item.size !== test) {
                alreadyInCartSize = true
            }
        })

        if (!alreadyInCart) {
            setCart(currentProductsFromState => [...currentProductsFromState, product])
            
        }

        if (alreadyInCartSize && result === false) {
            setCart(currentProductsFromState => [...currentProductsFromState, product])
        }
    }

    const increment = (id, size) => {
        setCart((prev) =>
            prev.map((item) =>
                item.id === id && item.size === size ? { ...item, count: item.count + 1 } : item
            )
        );
    }

    const deincrement = (id, size, quantity) => {
      console.log(quantity)
        if(quantity < 2){
            setCart((prev) => prev.map((item) => item.id === id && item.size === size ? { ...item, count: item.count - 0 } : item ));

        } else if (quantity > 0){
        setCart((prev) =>
            prev.map((item) =>
                item.id === id && item.size === size ? { ...item, count: item.count - 1 } : item
            )
        );
        }
    }

    const deleteProductFromCart = (id, size) => {
        setCart((state) => state.filter((item) => item.id !== id || item.size !== size))
    }

    return (
        <CartContext.Provider value={{
            cart,
            // products,
            addProductToCart: addProduct,
            deleteProduct: deleteProductFromCart,
            incrementQuantity: increment,
            deincrementQuantity: deincrement,
            sizeGarmentCommit: sizeCommit,
            sizeSelectBuffer: sizeBuffer,
        }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => useContext(CartContext)