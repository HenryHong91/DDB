import React from "react";
import { AiOutlineMinusSquare, AiOutlinePlusSquare} from "react-icons/ai";
import {RiDeleteBinFill} from 'react-icons/ri'

import useCart from "../hooks/useCart";
export default function CartItem({product,product:{id,image,title,option,quantity,price}}){

    const {removeItem,addOrUpdateItem}=useCart()

    const handleMinus=()=>{
        if(quantity < 2)return;
        addOrUpdateItem.mutate({...product,quantity:quantity-1})
    }
    const handlePlus=()=>{
      
        addOrUpdateItem.mutate({...product,quantity:quantity+1})
    }
    const handleDelete=()=>{
        removeItem.mutate(id);
    }
    return(
        <li className="flex justify-between my-2 items-center">
            <img className="w-24 md:w-48 rounded-lg " src={image} alt={title} />
            <div className="flex-1 flex justify-between ml-4 ">
                <div className="basis-3/5">
                <p className="text-lg">{title}</p>
                <p className="text-xl font-bold text-brand">{option}</p>
                <p>${price}</p>
                
                </div>
                <div className="text-2xl flex items-center">
                    <AiOutlineMinusSquare className="transition-all cursor-pointer hover:text-brand hover:scale-105 mx-1" onClick={handleMinus}/>
                    <span>{quantity}</span>
                    <AiOutlinePlusSquare className="transition-all cursor-pointer hover:text-brand hover:scale-105 mx-1" onClick={handlePlus}/>
                    <RiDeleteBinFill     className="transition-all cursor-pointer hover:text-brand hover:scale-105 mx-1" onClick={handleDelete}/>
                </div>
            </div>
        </li>
        )
}