import { useContext, useEffect } from "react";
import ItemCard from "../ItemCard/ItemCard"
import { ShoppingCartContext } from "../../context/context"
import NotFound from "../../pages/notFound/NotFound";



function ItemListContainer () {
    const context = useContext(ShoppingCartContext)

    
  useEffect(() => {
    const savedCategory = localStorage.getItem("selectedCategory");
    if (savedCategory) {
      context.setSearchByCategory(savedCategory);
    }
  }, []);

    const renderView = () =>{
            if (context.filteredproducts?.length > 0){
                return (
                    context.filteredproducts?.map(product => (
                        <ItemCard key={product.id} data={product} />
                    ))
                );
            } else{
                return(
                    <NotFound/>
                );
            }
    };


    return(
        <>
            {renderView()}
        </>
    );
}
export default ItemListContainer