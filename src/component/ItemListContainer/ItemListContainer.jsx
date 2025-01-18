import { useContext } from "react";
import ItemCard from "../ItemCard/ItemCard"
import { ShoppingCartContext } from "../../context/context"
import NotFound from "../../pages/notFound/NotFound";



function ItemListContainer () {
    const context = useContext(ShoppingCartContext)

    const renderView = () =>{
            if (context.filteredProducts?.length > 0){
                return (
                    context.filteredProducts?.map(product => (
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