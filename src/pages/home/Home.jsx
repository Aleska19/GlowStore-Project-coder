import Layout from "../../component/Layout/Layout";
import Loader from "../../component/Loader/Loader";
import ItemListContainer from "../../component/itemListContainer/ItemListContainer";
import { ShoppingCartContext } from "../../context/context"
import ProductDetail from "../../component/ProductDetails/ProductDetails";
import { useContext } from "react";
function Home(){
    const {Loading, Products} = useContext(ShoppingCartContext); //estado para manejar el estado de carga


    return (
        <Layout className="bg-red-100">
            <div className="flex items-center justify-center w-80 relative">
                <h1 className="p-5 text-marronSuave text-lg font-bold">EXCLUSIVE PRODUCTS</h1>
            </div>

            <input 
             type="text"
             placeholder="Search products" 
             className="w-80 h-10 border border-rosaEmpolvado focus:border-terracota focus:outline-none rounded-lg p-4 transition duration-300 text-marronSuave mb-6 placeholder:text-gray-400"
            />


          {Loading ? (
            // Loader envuelto en su propio div
            <div className="flex items-center justify-center h-screen space-x-2">
              <Loader />
            </div>
          ) : (
            // Div para ItemListContainer con grid
            <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
              <ItemListContainer Products={Products} />
            </div>
          )}
          <ProductDetail/>
        </Layout>
      );

}

export default Home;