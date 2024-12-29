import { useContext } from "react";
import ItemCard from "../ItemCard/ItemCard"
import { ShoppingCartContext } from "../../context/context"



const ItemListContainer = ({Products})=>{
    const context = useContext(ShoppingCartContext)
    return(
           
        context.Products.map((product) => (
            <ItemCard key={product.id} data={product} />
        ))
    )
}
export default ItemListContainer