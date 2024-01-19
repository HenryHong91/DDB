import React from "react";
import CartItem from "../components/cartItem";
import {BsFillPlusCircleFill} from "react-icons/bs"
import { FaEquals } from "react-icons/fa";
import PriceCard from "../components/priceCard";
import Button from "../components/button";
import useCart from "../hooks/useCart";
const SHIPPING=2.5
export default function MyCart(){
    
    const {
        cartQuery: { isLoading, data: products },
      } = useCart();
    

    const hasProducts = products && products.length>0;
    const totalPrice= products && products.reduce((prev,current)=>prev+parseInt(current.price)*current.quantity,0);
    return(
        <section className="p-8 flex flex-col relative">
           
            <p className="text-4xl text-center font-bold pb-4 border-b border-gray-300">Cart</p>
            {!hasProducts && <div><img src="/images/empty.jpg" alt="" /></div> }
            {hasProducts && <>
                <ul className="border-b border-gray-300 mb-8 p-4 px-8">
                    {products && products.map((product)=>(<CartItem key={product.id} product={product}/>))}
                </ul>
                <div className="flex justify-between items-center p-2 mb-6 md:px-8 lg:px-16">
                    <PriceCard text="price" price={totalPrice}/>
                    <BsFillPlusCircleFill className="shrink-0"/>
                    <PriceCard text="shipping" price={SHIPPING}/>
                    <FaEquals className="shrink-0"/>
                    <PriceCard text="total" price={totalPrice + SHIPPING}/>
                </div>
                <Button text='order'/>
            </>}
        </section>
    )
}