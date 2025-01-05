import { useContext, useState, useEffect } from "react";
import Layout from "../../component/Layout/Layout";
import Loader from "../../component/Loader/Loader";
import ItemListContainer from "../../component/itemListContainer/ItemListContainer";
import ProductDetail from "../../component/ProductDetails/ProductDetails";
import { ShoppingCartContext } from "../../context/context"

function Home(){
    const {loading, products, setSearchByTitle} = useContext(ShoppingCartContext); //estado para manejar el estado de carga
    

    



    return (
        <Layout className="bg-red-100">
            <div className="flex items-center justify-center w-80 relative">
                <h1 className="p-5 text-marronSuave text-lg font-bold">EXCLUSIVE products</h1>
            </div>

            <input 
             type="search" 
             placeholder="Search products" 
             className="w-80 h-10 border border-rosaEmpolvado focus:border-terracota focus:outline-none rounded-lg p-4 transition duration-300 text-marronSuave mb-6 placeholder:text-gray-400"
             onChange={(e)=> setSearchByTitle(e.target.value)}
            />


          {loading ? (
            // Loader envuelto en su propio div
            <div className="flex items-center justify-center h-screen space-x-2">
              <Loader />
            </div>
          ) : (
            // Div para ItemListContainer con grid
            <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
              <ItemListContainer products={products} />
            </div>
          )}
          <ProductDetail/>
        </Layout>
      );

}

export default Home;