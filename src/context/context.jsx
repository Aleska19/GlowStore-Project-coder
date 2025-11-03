import { createContext, useState, useEffect } from "react"
import { collection, getDocs} from "firebase/firestore"
import { db } from "../firebase/config"
import PropTypes from 'prop-types'


export const ShoppingCartContext =  createContext()

export const ShoppingCartProvider = ({children}) => {
    //Shopping Cart | Increment quantity
    const[count, setCount] = useState(0)

    //Shopping Cart / add products to cart
    const [cartproducts, setCartproducts] = useState([])
    

   

    //Get Product and loading and filter
    const [products, setproducts] = useState([
     ]); //guardar los productos//

     //Estado para manejar el estado de carga 
    const [loading, setloading] = useState(true); //estado para manejar el estado de carga
    const [filteredproducts, setFilteredproducts] = useState(null);
    

    //Get product by title and category


    const [searchByTitle, setSearchByTitle] = useState(null); //estado para manejar la busqueda por titulo de producto
    // 
    const [searchByCategory, setSearchByCategory] = useState(
        localStorage.getItem("selectedCategory") || null
      ); //estado para manejar la busqueda por titulo de producto

      useEffect(() => {
        localStorage.setItem("selectedCategory", searchByCategory);
      }, [searchByCategory]);

      


        useEffect(() => {
            const colletionproducts = collection(db, "products");
            getDocs(colletionproducts)
            .then((snapshot) =>{
                setproducts(
                    snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}))
                )

            })
            .catch((error) => console.error('Error al obtener los productos', error))
            .finally(setTimeout(() => { setloading(false); }, 2000))
            
        },[]);

        
        //filtrados de productos por titulo y categoria


        const filteredproductsByTitle = (products, searchByTitle) =>{
                return products?.filter(product => product.title.toLowerCase().includes(searchByTitle.toLowerCase()))

        }

        const filteredproductsByCategory = (products, searchByCategory) =>{
                return products?.filter(product => product.category.toLowerCase().includes(searchByCategory.toLowerCase()))
        }

        const filterBy = (searchType, products, searchByTitle, searchByCategory) =>{
            if(searchType === 'by_title'){ 
                return filteredproductsByTitle(products, searchByTitle)
            }
            if(searchType === 'by_category'){
                return filteredproductsByCategory(products, searchByCategory)
            }
            if(searchType === 'by_title_AND_category'){
                return filteredproductsByCategory(products, searchByCategory).filter(product => product.title.toLowerCase().includes(searchByTitle.toLowerCase()))
            }
            if(!searchType){
                return products
            }
        }

        useEffect(() => {
            if (searchByTitle && searchByCategory) setFilteredproducts(filterBy('by_title_AND_category', products, searchByTitle, searchByCategory));
            if (searchByTitle && !searchByCategory) setFilteredproducts(filterBy('by_title', products, searchByTitle, searchByCategory));
            if (!searchByTitle && searchByCategory) setFilteredproducts(filterBy('by_category', products, searchByTitle, searchByCategory));
            if (!searchByTitle && !searchByCategory) setFilteredproducts(filterBy(null , products, searchByTitle, searchByCategory));
            
        }, [products, searchByTitle, searchByCategory]);

        

    return(
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            cartproducts,
            setCartproducts,
            products,
            
            setproducts,
            loading,
            setloading,
            searchByTitle,
            setSearchByTitle,
            filteredproducts,
            searchByCategory,
            setSearchByCategory,
            

        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

ShoppingCartProvider.propTypes = {
    children: PropTypes.node.isRequired
}