import {BrowserRouter } from 'react-router-dom';
import { ShoppingCartProvider } from '../../context/context';
import Navbar from '../../component/navbar/Navbar';
import AppRoutes from '../../routes/AppRoutes';
import CheckoutSideMenu from '../../component/Checkout/CheckoutSideManu';
import './App.css'



function App() {
  return(
    <ShoppingCartProvider>
      <BrowserRouter>
       <AppRoutes/>
       <Navbar/>
       <CheckoutSideMenu/>
      </BrowserRouter>
    </ShoppingCartProvider>
  )

}

export default App
