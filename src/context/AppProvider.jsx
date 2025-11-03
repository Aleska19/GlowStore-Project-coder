import { ProductDetailsProvider } from "../context/productDetailsContext.jsx"
import { ShoppingCartProvider  } from "../context/context.jsx";
import { CheckoutMenuProvider } from './checkoutMenuContext.jsx';
import { OrderProvider } from './orderContext.jsx';

export const AppProvider = ({children}) =>{
    return(
        <ProductDetailsProvider>
            <ShoppingCartProvider>
                <CheckoutMenuProvider>
                    <OrderProvider>
                        {children}
                    </OrderProvider>
                </CheckoutMenuProvider>
            </ShoppingCartProvider>
        </ProductDetailsProvider>
  )
};

