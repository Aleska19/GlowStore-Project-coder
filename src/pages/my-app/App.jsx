import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from '../../context/AppProvider.jsx';
import Navbar from '../../component/Navbar/Navbar';
import Footer from '../../component/Footer/Footer';
import AppRoutes from '../../routes/AppRoutes';
import CheckoutSideMenu from '../../component/Checkout/CheckoutSideManu.jsx';
import './App.css'



function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <div className='min-h-screen flex flex-col'>
          <Navbar />
          <main className='flex-1'>
            <AppRoutes />
          </main>
          <CheckoutSideMenu />
          <Footer />
        </div>
      </BrowserRouter>
    </AppProvider>
  )

}

export default App
