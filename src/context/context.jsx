import { createContext, useState, useEffect } from "react"
import { apiUrl } from "../utils/Api/api"

export const ShoppingCartContext =  createContext()

export const ShoppingCartProvider = ({children}) => {
    //Shopping Cart | Increment quantity
    const[count, setCount] = useState(0)

    //Prodcut Detail | Open Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    //Checkout side menu
    
    //Prodcut Detail | Open Close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu= () => setIsCheckoutSideMenuOpen(false)

    //Product Detail | Show Product
    const [productToShow, setProductToShow] = useState({})

    //Shopping Cart / add products to cart
    const [cartProducts, setCartProducts] = useState([])

    //Shopping Cart / order
    const [order, setOrder] = useState([])

    //Get Product and loading
    const [Products, setProducts] = useState(null); //guardar los productos//
    const [Loading, setLoading] = useState(true); //estado para manejar el estado de carga

        useEffect(()=>{
            const fetchProducts = async () => {
                try{
                    const response = await fetch(`${apiUrl}/products`); //Solicitud HTTP GET
                    const data = await response.json(); //convertir respuesta a JSON 
                    setProducts(data); //guardar datos en el estado
                } catch (error){
                    console.error('Error al obtener los productos', error);
                }finally {
                    setTimeout(() => {
                        setLoading(false); 
                    }, 2000)
                }
            };
            fetchProducts()
        }, []);

    return(
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            order,
            setOrder,
            Products,
            setProducts,
            Loading,
            setLoading,

        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}