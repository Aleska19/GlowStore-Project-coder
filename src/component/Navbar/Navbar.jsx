import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { ArchiveBoxIcon } from "@heroicons/react/16/solid"
import {UserIcon} from "@heroicons/react/16/solid"
import CartWidget from "../CartWidget/CartWidget"
import Search from "../SearchProduct/Search"
import { ShoppingCartContext } from "../../context/context"

const Navbar = () => {
    const context = useContext(ShoppingCartContext)
    const activeStyle = 'underline underline-offset-4'
    return(
        <nav className="flex justify-between item-center fixed z-10 w-full py-5 px-8 text-sm font-light text-marronSuave top-0 navbar-class"> 
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg text-marronSuave/95 navbar-logo">
                    <NavLink  
                    to= '/' 
                    onClick={()=> context.setSearchByCategory()}>
                    
                        GlowStore
                    </NavLink>
                </li>
                <li className="navbar-li">
                    <NavLink 
                    to= 'all' 
                    onClick={()=> context.setSearchByCategory()}
                    className={({ isActive}) =>
                        isActive ? activeStyle : undefined

                    }>
                        All
                    </NavLink>
                </li>
                <li className="navbar-li">
                    <NavLink 
                    to= '/clothes'
                    onClick={()=> context.setSearchByCategory('clothes')} 
                    className={({ isActive}) =>
                        isActive ? activeStyle : undefined

                    }>
                        Clothes
                    </NavLink>
                </li>
                <li className="navbar-li">
                    <NavLink
                     to= '/electronics'
                     onClick={()=> context.setSearchByCategory('electronics')}
                      className={({ isActive}) =>
                        isActive ? activeStyle : undefined

                    }>
                        Electronics
                    </NavLink>
                </li>
                <li className="navbar-li">
                    <NavLink
                     to= '/category/furnitures' 
                     onClick={()=> context.setSearchByCategory('furniture')}
                     className={({ isActive}) =>
                        isActive ? activeStyle : undefined

                    }>
                        Furnitures
                    </NavLink>
                </li>
                <li className="navbar-li">
                    <NavLink 
                    to= '/toys' 
                    onClick={()=> context.setSearchByCategory('toys')}
                    className={({ isActive}) =>
                        isActive ? activeStyle : undefined

                    }>
                        Toys
                    </NavLink>
                </li>
                <li className="navbar-li">
                    <NavLink
                     to= '/category/others' 
                     onClick={()=> context.setSearchByCategory('others')}
                     className={({ isActive}) =>
                        isActive ? activeStyle : undefined

                    }>
                        Others
                    </NavLink>
                </li>
            </ul>

            <div>
                <Search/>
            </div>

            <ul className="flex items-center gap-3">
                <li className="text-gray-400">
                        aleska@gmail.com
                </li>
                <li>
                    <NavLink
                     to= '/my-Orders' 
                     className={({ isActive}) =>
                        isActive ? activeStyle : undefined

                    }>
                        <ArchiveBoxIcon className="h-6 w-6 text-marronSuave/100"></ArchiveBoxIcon>
                    </NavLink>
                </li>

                <li>
                    <NavLink 
                    to= '/sig-nin' 
                    className={({ isActive}) =>
                        isActive ? activeStyle : undefined

                    }>
                        <UserIcon className="h-6 w-6 text-marronSuave/100"></UserIcon>
                    </NavLink>
                </li>
                <CartWidget/>
            </ul>

        </nav>
    )
}

export default Navbar;