import { useContext } from "react"
import { ProductDetailsContext } from "../../context/productDetailsContext.jsx"
import { XCircleIcon } from "@heroicons/react/16/solid"


const ProductDetail = () => {
    const productDetailContext = useContext(ProductDetailsContext)
    return(
        <aside className={`${productDetailContext.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 bOrder bOrder-marronSuave rounded-lg bg-white overflow-y-scroll w-full sm:w-1/2 lg:w-1/3  xl:w-1/3`}>
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl text-marronSuave">Detail</h2>
                <div onClick={productDetailContext.closeProductDetail}>
                    <XCircleIcon className="h-6 w-6 text-verdeSavia cursor-pointer"></XCircleIcon>
                </div>

            </div>
            <figure className="px-6">
                <img className="w-full h-full rounded-lg" 
                src={productDetailContext.productToShow.images}
                alt={productDetailContext.productToShow.title} />
            </figure>
            <p className="flex flex-col p-6 ">
                <span className="font-medium font-serif text-marronSuave text-2xl">${productDetailContext.productToShow.price}</span>
                <span className="font-medium font-serif text-marronSuave  text-lg">{productDetailContext.productToShow.title}</span>
                <span className="font-light font-sans text-sm  text-gray-700">{productDetailContext.productToShow.description}</span>
            </p>
        </aside>
    )
}

export default ProductDetail