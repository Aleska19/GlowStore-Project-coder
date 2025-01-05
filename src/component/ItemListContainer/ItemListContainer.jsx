import { useContext } from "react";
import ItemCard from "../ItemCard/ItemCard"
import { ShoppingCartContext } from "../../context/context"



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
                    <h1>No encontramos ese producto☹️</h1>
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