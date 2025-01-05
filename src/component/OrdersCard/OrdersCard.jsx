import { ChevronRightIcon } from "@heroicons/react/16/solid"


const OrdersCard = props =>{
    const {totalPrice, totalproducts} = props;

    return(
    <div className="flex justify-between items-center  mb-3 border-b border-terracota p-4 w-80">
        <div className="flex items-center gap-5 justify-between w-full">
            <p className="flex  flex-col gap-4" >
              <span className="text-marronSuave font-light text-md">Date: 25.12.24</span>
              <span className="text-marronSuave font-light text-md">products: {totalproducts}</span>
            </p>

            <p className="flex items-center gap-2">
            <span className="font-medium text-2xl text-marronSuave">${totalPrice}</span>
            <ChevronRightIcon className="h-7 w-7 text-marronSuave cursor-pointer"/>
            </p>
        </div>
    </div>
    );
};
export default OrdersCard