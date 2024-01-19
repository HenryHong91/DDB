import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { addOrUpdateToCart } from "../api/firebase";
import Button from "../components/button";
import { useAuthContext } from "../context/AuthContext";


export default function ProductDetail(){
   
    const {uid}= useAuthContext()
    const {state:{product:{id,image,title,description,category,price,option}}}=useLocation();
    const [selected,setSelected]=useState(option && option[0])
    const handleSelect = (e)=>{
        setSelected(e.target.value)
    }

    const handleClick=(e)=>{
        const product={id,image,title,price,optino:selected,quantity:1}
        addOrUpdateToCart(uid,product)
        alert('items has been added to cart')
    }

    return(
<>
        <p className="mx-12 mt-4 text-gray-700">{category}</p>
            <section className="flex flex-col md:flex-row p-4">
            <img className="w-full px-4 basis-7/12" src={image} alt={title} />
        <div className="w-full basis-5/12 flex flex-col p-4">
            <h2 className="text-3xl font-bold py-2 border-b borde-gray-400">{title}</h2>
            <p className="text-2xl font-bold py-2 border-b borde-gray-400">${price}</p>
            <p className="py-4 text-lg">{description}</p>
        <div className="flex items-center">
            <label className="text-brand font-bold" htmlFor="select">options:</label>
            <select className="p-2 m-4 flex-1 border-2 border-dashed border-brand outline-none" id='select' onChange={handleSelect} value={selected}>
                {option && option.map((option,index)=>  <option key={index}>{option}</option>)}
            </select>
        </div>
            <Button text="Add to Cart" onClick={handleClick}/>
        </div>
      
            </section>
</>  
             )
}