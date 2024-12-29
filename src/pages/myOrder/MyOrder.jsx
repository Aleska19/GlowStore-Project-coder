import { useContext } from "react"
import { Link } from "react-router-dom"
import { ShoppingCartContext } from "../../context/context"
import { ChevronLeftIcon } from "@heroicons/react/16/solid";
import Layout from "../../component/Layout/Layout";
import OrderCard from "../../component/OrderCard/OrderCard";

function MyOrder(){
    const context = useContext(ShoppingCartContext)
    const currentPath = window.location.pathname;
    let index = currentPath.substring(currentPath.lastIndexOf('/') + 1);

    if(index === 'last') index = context.order?.length -1;

    



    return(
    <Layout>
        <div className="flex items-center justify-center w-80 relative ">
            <Link to='/my-orders' className="absolute left-0">
                <ChevronLeftIcon className="h-6 w-6 text-marronSuave cursor-pointer"/>
            </Link>
            <h1 className="p-5 text-marronSuave text-lg font-bold">My Order</h1>

        </div>
        <div className="flex flex-wrap flex-col w-80">
            {
                context.order?.[index]?.products.map(product => (
                    <OrderCard 
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        imageUrl={product.images[0]}
                        price={product.price}
                    />
                ))
            }
        </div>
    </Layout>
    )

}

export default MyOrder;