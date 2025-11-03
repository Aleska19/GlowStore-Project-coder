import { useContext } from "react"
import { Link } from "react-router-dom"
import { ShoppingCartContext } from "../../context/context.jsx"
import { CheckoutMenuContext } from "../../context/checkoutMenuContext.jsx"
import { OrderContext } from "../../context/orderContext.jsx"
import { XCircleIcon } from "@heroicons/react/16/solid"
import {totalPrice} from '../../utils/utils'
import OrderCard from "../OrderCard/OrderCard"





const CheckoutSideMenu = () => {
    const shopingCartContext = useContext(ShoppingCartContext)
    const checkoutMenuContext = useContext(CheckoutMenuContext)
    const orderContext = useContext(OrderContext)

    const handDelete = (id) =>{
        const filteredproducts = shopingCartContext.cartproducts.filter(product => product.id !== id)
        shopingCartContext.setCartproducts(filteredproducts)
    }

    const handleCheckout = () =>{
        const OrderToAdd = {
            date: '24.12.2024',
            products: shopingCartContext.cartproducts,
            total: totalPrice(shopingCartContext.cartproducts)
        }
        orderContext.setOrder([...orderContext.Order, OrderToAdd])
        shopingCartContext.setCartproducts([])
        shopingCartContext.setSearchByTitle(null)
    };

    console.log("Cart products:", shopingCartContext.cartproducts);
    console.log("Total Price:", totalPrice(shopingCartContext.cartproducts));



    return(
        <aside className={`${checkoutMenuContext.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 bOrder bOrder-marronSuave rounded-lg bg-white w-full lg:w-1/3 md:w-1/2 xl:w-1/3`}>
            <div className="flex justify-between items-center p-6 ">
                <h2 className="font-medium text-xl text-marronSuave">My Order</h2>
                <div onClick={checkoutMenuContext.closeCheckoutSideMenu}>
                    <XCircleIcon 
                    className="h-6 w-6 text-verdeSavia cursor-pointer"></XCircleIcon>
                </div>

            </div>

            <div className="px-6 overflow-y-scroll flex-1">
             {
                shopingCartContext.cartproducts.map(product =>(
                    <OrderCard 
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    imageUrl={product.images}
                    price={product.price}
                    handDelete={handDelete}
                    />
                ))
             }
            </div>

            <div className="px-6 py-4">
                <p className=" flex justify-between items-center text-xl  text-marronSuave mb-2">
                    <span className="font-light">TOTAL:</span>
                    <span className="font-medium">${totalPrice(shopingCartContext.cartproducts)}</span>
                </p>
                <Link to={'/my-Orders/last'}>
                    <button className="w-full bg-marronSuave  py-3 text-white rounded-lg" onClick={() => handleCheckout()}>Checkout</button>
                </Link>
                
            </div>
        </aside>
    )
}

export default CheckoutSideMenu