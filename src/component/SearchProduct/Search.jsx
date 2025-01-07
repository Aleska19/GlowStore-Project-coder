import { useContext, useState, useEffect } from "react";
import { ShoppingCartContext } from "../../context/context"

function Search(){
    const {setSearchByTitle} = useContext(ShoppingCartContext); //estado para manejar el estado de carga
    return(
        <div className="">
          <input 
             type="search" 
             placeholder="Search products" 
             className="w-80 h-10 border border-marronSuave focus:border-terracota focus:outline-none rounded-lg p-4 transition duration-300 text-marronSuave  placeholder:text-gray-400"
             onChange={(e)=> setSearchByTitle(e.target.value)}
            />
          </div>
    )
}
export default Search