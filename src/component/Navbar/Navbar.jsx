import { useContext, useState } from "react"
import { NavLink } from "react-router-dom"
import { ArchiveBoxIcon } from "@heroicons/react/16/solid"
import { Bars4Icon } from "@heroicons/react/20/solid"
import { UserIcon } from "@heroicons/react/16/solid"
import CartWidget from "../CartWidget/CartWidget"
import Search from "../SearchProduct/Search"
import { ShoppingCartContext } from "../../context/context"

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const context = useContext(ShoppingCartContext);
    const activeStyle = 'text-marronSuave font-bold';

    return (
        <nav className={`flex justify-between items-center fixed z-10 w-full  py-5 px-8 text-sm font-light text-marronSuave top-0 navbar-class bg-white shadow-md  ${isMenuOpen ? 'h-full' : 'md:h-20 sm:overflow-hidden'} ${isMenuOpen ? 'sm:w-1/3' : 'md:w-full'}`}>
            {/* <div className="flex items-center justify-between gap-3"> */}
            <button
                className="md:hidden focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <Bars4Icon className="w-4 h-6 text-marronSuave" />
            </button>

            <ul className={`md:flex items-center justify-between gap-3 ${isMenuOpen ? 'block' : 'hidden'} `}>
                <li className="font-semibold text-lg text-marronSuave/95 navbar-logo">
                    <NavLink to='/' onClick={() => context.setSearchByCategory('')}>
                        GlowStore
                    </NavLink>
                </li>

                <li className="navbar-li">
                    <NavLink
                        to='/all'
                        onClick={() => context.setSearchByCategory('')}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined

                        }>
                        All
                    </NavLink>
                </li>
                <li className="navbar-li">
                    <NavLink
                        to='/clothes'
                        onClick={() => context.setSearchByCategory('clothes')}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined

                        }>
                        Clothes
                    </NavLink>
                </li>
                <li className="navbar-li">
                    <NavLink
                        to='/electronics'
                        onClick={() => context.setSearchByCategory('electronics')}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined

                        }>
                        Electronics
                    </NavLink>
                </li>
                <li className="navbar-li">
                    <NavLink
                        to='/category/furnitures'
                        onClick={() => context.setSearchByCategory('furniture')}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined

                        }>
                        Furnitures
                    </NavLink>
                </li>
                <li className="navbar-li">
                    <NavLink
                        to='/toys'
                        onClick={() => context.setSearchByCategory('toys')}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined

                        }>
                        Toys
                    </NavLink>
                </li>
                <li className="navbar-li">
                    <NavLink
                        to='/category/others'
                        onClick={() => context.setSearchByCategory('others')}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined

                        }>
                        Others
                    </NavLink>
                </li>
            </ul>

            <div className={`${isMenuOpen ? 'hidden' : 'flex'}`}>
                <Search />
            </div>

            <ul className={`flex items-center gap-3 ${isMenuOpen ? 'hidden' : 'flex'}`}>
                <li className="text-gray-400">
                    aleska@gmail.com
                </li>
                <li>
                    <NavLink
                        to='/my-Orders'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined

                        }>
                        <ArchiveBoxIcon className="h-6 w-6 text-marronSuave/100"></ArchiveBoxIcon>
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to='/sig-nin'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined

                        }>
                        <UserIcon className="h-6 w-6 text-marronSuave/100"></UserIcon>
                    </NavLink>
                </li>
                <CartWidget />
            </ul>
            {/* </div> */}


        </nav>
    );
};



export default Navbar;