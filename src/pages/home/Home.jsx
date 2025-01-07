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
          <div className="info_eco_estore flex flex-col items-center justify-center p-8 rounded-lg shadow-lg w-full h-60 bg-cover bg-center bg-no-repeat sm:bg-cover md-bg-cover bg-black bg-opacity-45 relative  ">
            <h1 className="info_eco_h1 text-3xl font-serif text-marronSuave font-bold mb-2 z-0">Elegancia Sostenible</h1>
            <h2 className="info_eco_h2 text-2xl font-sans text-gray-700">Para cada Bolsillo</h2>

          </div>





          {loading ? (
            // Loader envuelto en su propio div
            <div className="flex items-center justify-center  space-x-2 z-0">
              <Loader />
            </div>
          ) : (
            // Div para ItemListContainer con grid
            <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg pt-10">
              <ItemListContainer products={products} />
            </div>
          )}
          <ProductDetail/>
        </Layout>
      );

}

export default Home;