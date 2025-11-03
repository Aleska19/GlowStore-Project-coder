import { useContext } from "react"
import { Link } from "react-router-dom"
import { OrderContext } from "../../context/orderContext"
import { ChevronLeftIcon } from "@heroicons/react/16/solid";
import Layout from "../../component/Layout/Layout";
import OrderCard from "../../component/OrderCard/OrderCard";

function MyOrder(){
    const orderContext = useContext(OrderContext)
    const currentPath = window.location.pathname;
    let index = currentPath.substring(currentPath.lastIndexOf('/') + 1);

    if(index === 'last') index = orderContext.Order?.length -1;

    



    return(
    <Layout>
        <div className="flex items-center justify-center w-80 relative ">
            <Link to='/my-Orders' className="absolute left-0">
                <ChevronLeftIcon className="h-6 w-6 text-marronSuave cursor-pointer"/>
            </Link>
            <h1 className="p-5 text-marronSuave text-lg font-bold">My Order</h1>

        </div>
        <div className="flex flex-wrap flex-col w-80">
            {
                orderContext.Order?.[index]?.products.map(product => (
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