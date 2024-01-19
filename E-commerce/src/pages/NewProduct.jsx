// import { set } from "firebase/database";
import { QueryClient, useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";

import { uploadImage } from "../api/uploader";
import Button from "../components/button";
import useProducts from "../hooks/useProducts";

export default function NewProduct(){
    const [product,setProduct]=useState({});
    const [files,setFiles]=useState();
    const [isUploading, setIsUploading]=useState(false);
    const [success  , setSuccess]=useState();
     const {addProduct}=useProducts()
    const handleChange =(e)=>{
        const {name,value,files}=e.target;
        
        if(name==='file'){
            setFiles(files&& files[0])
           
            return;
        }
        setProduct((product)=>({...product,[name]:value}))
    };
    const handleSubmit =(e)=>{
        e.preventDefault();

        setIsUploading(true);

        uploadImage(files)
        .then((url) => {
            addProduct.mutate(
              { product, url },
              {
                onSuccess: () => {
                  setSuccess('New Product has been added');
                  setTimeout(() => {
                    setSuccess(null);
                  }, 4000);
            }})
           
             })
       
       .finally(()=>setIsUploading(false))
    };


    return(
       <section className="w-full text-center">
        <h1 className="text-2xl font-bold my-4">Regist New Product</h1>
            {success  && <p className="my-2">{success}</p>}
            {files && <img className="w-96 mx-auto mb-2" alt={product.title} src={URL.createObjectURL(files)}/>}
       <form onSubmit={handleSubmit} className='flex flex-col px-12'>
            <input type="file" accept="image/*" name="file" required onChange={handleChange} />
            <input type="text" name='title' value={product.title ?? ''} required onChange={handleChange} placeholder="Product Name" />
            <input type="number" name='price' value={product.price ?? ''} required onChange={handleChange} placeholder="Price" />
            <input type="text" name='category' value={product.category ?? ''} required onChange={handleChange} placeholder="Category" />
            <input type="text" name='description' value={product.description ?? ''} required onChange={handleChange} placeholder="Description" />
            <input type="text" name='option' value={product.option ?? ''} required onChange={handleChange} placeholder="option " />
        
            <Button text={isUploading ? 'uploading...' : 'Submit'} disabled={isUploading} onClick={handleSubmit}/>


       </form>

       </section>
    )
}