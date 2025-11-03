import { useContext } from "react";
import { ShoppingCartContext } from "../../context/context";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import Loader from "../Loader/Loader";
import Layout from "../Layout/Layout";
import ProductDetail from "../ProductDetails/ProductDetails";


function Category() {
    const { loading, products} = useContext(ShoppingCartContext);


  


 

    return (
    <Layout className="bg-red-100">
        <div className="flex items-center justify-center w-80 relative">
            <h1 className="p-5 text-marronSuave text-lg font-bold">products</h1>
        </div>
      {loading ? (
        // Loader envuelto en su propio div
        <div className="flex items-center justify-center h-screen space-x-2">
          <Loader />
        </div>
      ) : (
        // Div para ItemListContainer con grid
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-screen-lg justify-items-center">
          <ItemListContainer products={products}/>
        </div>
      )}
      <ProductDetail/>



     
      
    </Layout>
  );




}



export default Category;