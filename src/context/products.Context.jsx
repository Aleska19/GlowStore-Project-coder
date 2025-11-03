// import { createContext } from "react";
// import { useState, useEffect } from "react";
// import { collection, getDocs} from "firebase/firestore"
// import { db } from "../firebase/config"

// export const ProductsContext = createContext()
// export const ProductsProvider = ({ children }) => {
//     //Get Product and loading and filter
//     const [products, setproducts] = useState([
//         //     localStorage.getItem("products") || null  //estado para manejar los productos 
//     ]); //guardar los productos//

//     useEffect(() => {
//         const colletionproducts = collection(db, "products");
//         getDocs(colletionproducts)
//             .then((snapshot) => {
//                 setproducts(
//                     snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
//                 )

//             })
//             .catch((error) => console.error('Error al obtener los productos', error))
//             .finally(setTimeout(() => { setloading(false); }, 2000))
//     }, []);

//     return (
//         <ProductsContext.Provider value={{
//             products,
//             setproducts
//         }}>
//             {children}
//         </ProductsContext.Provider>
//     )
// }