import PropTypes from "prop-types";
import { createContext, useState } from "react";


export const ProductDetailsContext = createContext();

export const ProductDetailsProvider = ({ children }) => {
    //Prodcut Detail | Open Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)


    // | Show Product
    const [productToShow, setProductToShow] = useState({})

    return(
        <ProductDetailsContext.Provider value={{
            isProductDetailOpen,
            openProductDetail,
            closeProductDetail,
            productToShow,
            setProductToShow
        }}>
            {children}
        </ProductDetailsContext.Provider>
    )

}

ProductDetailsProvider.propTypes = {
    children: PropTypes.node.isRequired
}