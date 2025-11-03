import {  createContext, useState } from "react";


export const CheckoutMenuContext = createContext();
export const CheckoutMenuProvider = ({ children }) => {
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

    return(
        <CheckoutMenuContext.Provider value={{
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu

        }}>
            {children}
        </CheckoutMenuContext.Provider>
    )
}


