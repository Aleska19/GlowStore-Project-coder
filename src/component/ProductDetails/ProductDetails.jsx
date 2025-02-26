import { useContext } from "react"
import { ShoppingCartContext } from "../../context/context"
import { XCircleIcon } from "@heroicons/react/16/solid"


const ProductDetail = () => {
    const context = useContext(ShoppingCartContext)
    return(
        <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-marronSuave rounded-lg bg-white overflow-y-scroll`}>
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl text-marronSuave">Detail</h2>
                <div onClick={context.closeProductDetail}>
                    <XCircleIcon className="h-6 w-6 text-verdeSavia cursor-pointer"></XCircleIcon>
                </div>

            </div>
            <figure className="px-6">
                <img className="w-full h-full rounded-lg" 
                src={context.productToShow.images}
                alt={context.productToShow.title} />
            </figure>
            <p className="flex flex-col p-6 ">
                <span className="font-medium font-serif text-marronSuave text-2xl">${context.productToShow.price}</span>
                <span className="font-medium font-serif text-marronSuave  text-lg">{context.productToShow.title}</span>
                <span className="font-light font-sans text-sm  text-gray-700">{context.productToShow.description}</span>
            </p>
        </aside>
    )
}

export default ProductDetail