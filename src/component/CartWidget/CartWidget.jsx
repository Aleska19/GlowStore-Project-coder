import { useContext } from "react";
import { ShoppingBagIcon } from "@heroicons/react/16/solid";
import { ShoppingCartContext } from "../../context/context";

const CartWidget = () => {
    const context = useContext(ShoppingCartContext)
    return(
        <div className="flex items-center">
            <ShoppingBagIcon className="h-6 w-6 text-marronSuave/100 cursor-pointer" onClick={context.cartproducts}></ShoppingBagIcon>
            <p>{context.cartproducts.length}</p>
        </div>
    )
};
export default CartWidget;