import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import {RiDeleteBinFill}from 'react-icons/ri'
import {removeFromData}from '../api/firebase'


export default function ProductCard({product,product:{id,title,price,category,image}}){    
        const navigate =useNavigate();
        const{user}=useAuthContext()
       
    return(
        <>
       <li onClick={()=>{navigate(`/products/${id}`,{state:{product}})}}
       className=" roudned-lg shadow-md overflow-hidden cursor-pointer transition-all hover:scale-105" > 
        <img className="w-full" src={image} alt={title} />
        <div className="mt-2 p-2 text-lg flex justify-between items-center">
            <h3 className="truncate">{title}</h3>
            <p>{`${price}$`}</p>
        </div>
            <p className="mb-2 px-2 text-gray-600 text-start">{category}</p>
            <div className="flex flex-row justify-end">
                  {user && user.isAdmin && <RiDeleteBinFill 
                  className=" text-2xl text-red-600 mb-2 transition-all cursor-pointer hover:text-brand hover:scale-105 mx-1 font-4xl " 
                 onClick={()=>removeFromData(product.id)}/> }
            </div>
        </li>
        </>
    )
    }