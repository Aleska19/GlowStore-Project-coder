import { createContext, useState } from "react";

export const OrderContext = createContext()
export const OrderProvider = ({ children }) => {
    const [Order, setOrder] = useState([])

    return(
        <OrderContext.Provider value={{
            Order,
            setOrder
        }}>
            {children}

        </OrderContext.Provider>
    )
} 