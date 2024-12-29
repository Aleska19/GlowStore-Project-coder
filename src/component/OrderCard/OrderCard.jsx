import { XCircleIcon } from "@heroicons/react/16/solid"


const OrderCard = props =>{
    const {id, title, price, imageUrl, handDelete} = props
    let renderXMarkIcon
    if(handDelete){
        renderXMarkIcon = <XCircleIcon onClick={()=> handDelete(id)} className="h-6 w-6 text-verdeSavia cursor-pointer"></XCircleIcon>
    }

    return(
    <div className="flex justify-between items-center  mb-3">
        <div className="flex items-center gap-2">
            <figure className="w-20 h-20">
                <img className="w-full h-full rounded-lg object-cover" src={imageUrl} alt={title} />
            </figure>
            <p className="text-sm font-light">{title}</p>
        </div>
        <div className="flex items-center gap-2">
            <p className="text-lg font-medium ">{price}</p>
            {renderXMarkIcon}
        </div>
    </div>
    )
}
export default OrderCard