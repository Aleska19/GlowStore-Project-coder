import { useLocation } from "react-router-dom"
import Banner from "../Banner/Banner";


const Layout = ({children}) => {
const location = useLocation();    
    return(
        <div className='flex flex-col items-center mt-20 pb-3'>
            {location.pathname === '/' && <Banner/>}
        {children}
        </div>
    )
}

export default Layout