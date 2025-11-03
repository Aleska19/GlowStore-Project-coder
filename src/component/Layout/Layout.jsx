import { useLocation } from "react-router-dom"
import Banner from "../Banner/Banner";
import PropTypes from "prop-types";


const Layout = ({children}) => {
const location = useLocation();    
    return(
        <div className='flex flex-col items-center mt-20 pb-3'>
            {location.pathname === '/' && <Banner/>}
        {children}
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout