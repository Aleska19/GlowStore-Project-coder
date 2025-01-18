import { NavLink } from "react-router-dom"

function Footer(){
    return(
        <footer className="flex justify-between item-center  w-full py-5 px-8 text-sm font-light text-marronSuave footer-section">
            <p>© 2025 Mi Sitio Web. Todos los derechos reservados.</p>

            <nav>
                <ul>
                    <li>
                        <NavLink to='/aboutUs' activeClassName="active">
                        About us
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to= '/privacy' activeClassName="active">
                        Privacy
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to= '/policiesAndCondition' activeClassName="active">
                        Policies and Condition 
                        </NavLink>
                    </li>
                </ul>
            </nav>
            

        </footer>
    )
}

export default Footer