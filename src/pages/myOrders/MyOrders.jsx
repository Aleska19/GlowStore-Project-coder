import { useContext } from "react";
import { Link } from "react-router-dom";
import Layout from "../../component/Layout/Layout";
import { ShoppingCartContext } from "../../context/context";
import OrdersCard from "../../component/OrdersCard/OrdersCard";

function MyOrders() {
    const context = useContext(ShoppingCartContext);

    return (
        <Layout>
            <div className="flex items-center justify-center w-80 relative">
                <h1 className="p-5 text-marronSuave text-lg font-bold">My Orders</h1>
            </div>
            {context.order.map((order, index) => (
                <Link key={index} to={`/my-orders/${index}`}>
                    <OrdersCard
                        totalPrice={order.totalPrice || order.total} // Asegúrate de que el campo totalPrice o total exista
                        totalproducts={order.totalproducts || order.products.length} // Asegúrate de que el campo totalproducts o products exista
                    />
                </Link>
            ))}
        </Layout>
    );
}

export default MyOrders;