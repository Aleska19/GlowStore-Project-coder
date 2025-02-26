import { useRoutes} from 'react-router-dom';
import Home from '../pages/home/Home'
import Category from '../component/Category/Category';
import MyAccount from '../pages/myAccount/MyAccount'
import MyOrder from '../pages/myOrder/MyOrder';
import MyOrders from '../pages/myOrders/MyOrders';
import NotFound from '../pages/notFound/NotFound';
import Signin from '../pages/signin/Signin';
import AboutUs from '../pages/aboutUs/aboutUs';
import Privacy from '../pages/privacy-policy/privacy';
import PoliciesAndTerm from '../pages/policies-and-term/policiesAndTerm';


const AppRoutes = () => {
    let routes = useRoutes([
        { path: '/', element: <Home /> },
        { path: '/clothes', element: <Category /> },
        { path: '/electronics', element: <Category /> },
        { path: '/category/furnitures', element: <Category/> },
        { path: '/toys', element: <Category /> },
        { path: '/category/others', element: <Category/> },
        { path: '/my-Account', element: <MyAccount /> }, 
        { path: '/my-Order', element: <MyOrder /> }, 
        { path: '/my-Orders', element: <MyOrders /> },
        { path: '/my-Orders/last', element: <MyOrder /> },
        { path: '/my-Orders/:id', element: <MyOrder /> },
        { path: '/sig-nin', element: <Signin /> },
        { path: '/*', element: <NotFound /> },
        { path: '/aboutUs', element: <AboutUs /> },
        { path: '/privacy', element:<Privacy/>},
        { path: '/policiesAndCondition', element: <PoliciesAndTerm/>}
      ])
    
      return routes 
}

export default AppRoutes;  