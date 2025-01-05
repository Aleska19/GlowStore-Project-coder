import { useRoutes} from 'react-router-dom';
import Home from '../pages/home/Home'
import MyAccount from '../pages/myAccount/MyAccount'
import MyOrder from '../pages/myOrder/MyOrder';
import MyOrders from '../pages/myOrders/MyOrders';
import NotFound from '../pages/notFound/NotFound';
import Signin from '../pages/signin/Signin';


const AppRoutes = () => {
    let routes = useRoutes([
        { path: '/', element: <Home /> },
        { path: '/clothes', element: <Home /> },
        { path: '/electronics', element: <Home /> },
        { path: '/furnitures', element: <Home /> },
        { path: '/toys', element: <Home /> },
        { path: '/others', element: <Home /> },
        { path: '/my-Account', element: <MyAccount /> }, 
        { path: '/my-Order', element: <MyOrder /> }, 
        { path: '/my-Orders', element: <MyOrders /> },
        { path: '/my-Orders/last', element: <MyOrder /> },
        { path: '/my-Orders/:id', element: <MyOrder /> },
        { path: '/sig-nin', element: <Signin /> },
        { path: '/*', element: <NotFound /> },
      ])
    
      return routes 
}

export default AppRoutes;  