import { useContext } from "react"
import { PlusIcon, CheckIcon } from "@heroicons/react/16/solid"
import { ShoppingCartContext } from "../../context/context"


const ItemCard = (data) =>{
    const context = useContext(ShoppingCartContext)

    const showProduct = (productDetail) =>{
        context.openProductDetail()
        context.setProductToShow(productDetail)
    }

    const addproductsToCart = (event, productData) =>{
        event.stopPropagation()
        context.setCount(context.count + 1)
        context.setCartProducts([...context.cartProducts, productData])
        context.openCheckoutSideMenu()
        context.closeProductDetail()
    }

const renderIcon = () =>{
    const isInCart = context.cartProducts.filter(product => product.id === data.data.id).length > 0

    if (isInCart){
        return(

            <div className='absolute top-0 right-0 flex justify-center items-center w-6 h-6 rounded-full m-2 p-1 bg-verdeSavia' onClick={(event) => addproductsToCart(event, data.data)}>
             <CheckIcon className="h-6 w-6 text-marronSuave"></CheckIcon>
            </div>
            
        )
    } else {
        return(

            <div className='absolute top-0 right-0 flex justify-center items-center w-6 h-6 rounded-full m-2 p-1 bg-rosaEmpolvado' onClick={(event) => addproductsToCart(event, data.data)}>
             <PlusIcon className="h-6 w-6 text-marronSuave"></PlusIcon>
            </div>
        )
                
    }



}

    return(
        
        <div className=' cursor-pointer w-60 h-80 rounded-lg  p-6 shadow-md shadow-terracota-500/50 border-solid border border-terracota bg-white' 
        onClick={() => showProduct(data.data)} >
            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 rounded-lg text-black text-xs m-2 px-3 py-0.5 bg-verdeSavia/80'>{data.data.category}</span>
                <img className='w-full h-full object-cover rounded-lg' src={data.data.images[0]} alt="headphone" />
                {renderIcon(data.data.id)}
            </figure>
            <p className='flex justify-between'>
                <span className='text-sm font-light'>{data.data.title}</span>
                <span className='text-lg font-medium'>${data.data.price}</span>
            </p>
        </div>
    )
}

export default ItemCard