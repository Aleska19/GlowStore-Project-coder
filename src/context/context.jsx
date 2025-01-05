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

    //Get Product and loading and filter
    const [products, setproducts] = useState([]); //guardar los productos//
    const [loading, setloading] = useState(true); //estado para manejar el estado de carga
    const [filteredProducts, setFilteredProducts] = useState(null);

    //Get product by title and category


    const [searchByTitle, setSearchByTitle] = useState(null); //estado para manejar la busqueda por titulo de producto
    const [searchByCategory, setSearchByCategory] = useState(null); //estado para manejar la busqueda por titulo de producto

        useEffect(()=>{
            const fetchproducts = async () => {
                try{
                    const response = await fetch(`${apiUrl}/products`); //Solicitud HTTP GET
                    const data = await response.json(); //convertir respuesta a JSON 
                    setproducts(data); //guardar datos en el estado
                } catch (error){
                    console.error('Error al obtener los productos', error);
                }finally {
                    setTimeout(() => {
                        setloading(false); 
                    }, 2000)
                }
            };
            fetchproducts()
        }, []);


        //filtrados de productos por titulo y categoria


        const filteredProductsByTitle = (products, searchByTitle) =>{
                return products?.filter(product => product.title.toLowerCase().includes(searchByTitle.toLowerCase()))

        }

        const filteredProductsByCategory = (products, searchByCategory) =>{
            return products?.filter(product => product.category.name.toLowerCase().includes(searchByCategory.toLowerCase()))
        }

        const filterBy = (searchType, products, searchByTitle, searchByCategory) =>{
            if(searchType === 'by_title'){
                return filteredProductsByTitle(products, searchByTitle)
            }
            if(searchType === 'by_category'){
                return filteredProductsByCategory(products, searchByCategory)
            }
            if(searchType === 'by_title_AND_category'){
                return filteredProductsByCategory(products, searchByCategory).filter(product => product.title.toLowerCase().includes(searchByTitle.toLowerCase()))
            }
            if(!searchType){
                return products
            }
        }

        useEffect(() => {
            if (searchByTitle && searchByCategory) setFilteredProducts(filterBy('by_title_AND_category', products, searchByTitle, searchByCategory));
            if (searchByTitle && !searchByCategory) setFilteredProducts(filterBy('by_title', products, searchByTitle, searchByCategory));
            if (!searchByTitle && searchByCategory) setFilteredProducts(filterBy('by_category', products, searchByTitle, searchByCategory));
            if (!searchByTitle && !searchByCategory) setFilteredProducts(filterBy(null , products, searchByTitle, searchByCategory));
            
        }, [products, searchByTitle, searchByCategory]);

        

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
            products,
            setproducts,
            loading,
            setloading,
            searchByTitle,
            setSearchByTitle,
            filteredProducts,
            searchByCategory,
            setSearchByCategory,

        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}