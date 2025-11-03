import { NavLink } from "react-router-dom"

function Footer() {
    return (
        <footer className="flex justify-between item-center  w-full py-5 px-8 text-sm font-light text-marronSuave footer-section">
            <p>© 2025 Mi Sitio Web. Todos los derechos reservados.</p>

            <nav>
                <ul>
                    <li>
                        <NavLink to='/aboutUs' className={({ isActive }) =>
                            isActive ? "active" : undefined}>
                            About us
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to='/privacy' className={({ isActive }) =>
                            isActive ? "active" : undefined}>
                            Privacy
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to='/policiesAndCondition' className={({ isActive }) =>
                            isActive ? "active" : undefined}>
                            Policies and Condition
                        </NavLink>
                    </li>
                </ul>
            </nav>


        </footer>
    )
}

export default Footer