import { useContext } from "react";
import { Link } from "react-router-dom";
import Layout from "../../component/Layout/Layout";
import { OrderContext } from "../../context/orderContext.jsx";
import OrdersCard from "../../component/OrdersCard/OrdersCard";

function MyOrders() {
    const orderContext = useContext(OrderContext);

    return (
        <Layout>
            <div className="flex items-center justify-center w-80 relative">
                <h1 className="p-5 text-marronSuave text-lg font-bold">My Orders</h1>
            </div>
            {orderContext.Order.map((Order, index) => (
                <Link key={index} to={`/my-Orders/${index}`}>
                    <OrdersCard
                        totalPrice={Order.totalPrice || Order.total} 
                        totalproducts={Order.totalproducts || Order.products.length} 
                    />
                </Link>
            ))}
        </Layout>
    );
}

export default MyOrders;