import { useContext } from "react"
import { Link } from "react-router-dom"
import { ShoppingCartContext } from "../../context/context"
import { XCircleIcon } from "@heroicons/react/16/solid"
import {totalPrice} from '../../utils/utils'
import OrderCard from "../OrderCard/OrderCard"



const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext)

    const handDelete = (id) =>{
        const filteredproducts = context.cartProducts.filter(product => product.id !== id)
        context.setCartProducts(filteredproducts)
    }

    const handleCheckout = () =>{
        const orderToAdd = {
            date: '24.12.2024',
            products: context.cartProducts,
            total: totalPrice(context.cartProducts)
        }
        context.setOrder([...context.order, orderToAdd])
        context.setCartProducts([])
        context.setSearchByTitle(null)
    }
    return(
        <aside className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 border border-marronSuave rounded-lg bg-white`}>
            <div className="flex justify-between items-center p-6 ">
                <h2 className="font-medium text-xl text-marronSuave">My Order</h2>
                <div onClick={context.closeCheckoutSideMenu}>
                    <XCircleIcon 
                    className="h-6 w-6 text-verdeSavia cursor-pointer"></XCircleIcon>
                </div>

            </div>

            <div className="px-6 overflow-y-scroll flex-1">
             {
                context.cartProducts.map(product =>(
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
                    <span className="font-medium">${totalPrice(context.cartProducts)}</span>
                </p>
                <Link to={'/my-orders/last'}>
                    <button className="w-full bg-marronSuave  py-3 text-white rounded-lg" onClick={() => handleCheckout()}>Checkout</button>
                </Link>
                
            </div>
        </aside>
    )
}

export default CheckoutSideMenu