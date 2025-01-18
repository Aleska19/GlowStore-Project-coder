import {BrowserRouter } from 'react-router-dom';
import { ShoppingCartProvider } from '../../context/context';
import Navbar from '../../component/Navbar/Navbar';
import Footer from '../../component/Footer/Footer';
import AppRoutes from '../../routes/AppRoutes';
import CheckoutSideMenu from '../../component/Checkout/CheckoutSideManu';
import './App.css'



function App() {
  return(
    <ShoppingCartProvider>
      <BrowserRouter>
      <div className='min-h-screen flex flex-col'>
        <Navbar/>
        <main className='flex-1'>
          <AppRoutes/>
        </main>
       <CheckoutSideMenu/>
       <Footer/>
      </div>
      </BrowserRouter>
    </ShoppingCartProvider>
  )

}

export default App
