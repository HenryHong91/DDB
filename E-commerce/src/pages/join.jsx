
import { createUserWithEmailAndPassword,signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { auth } from "../api/firebase";
import Button from "../components/button";


export default function Join(){
    
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    const navigate =useNavigate();
    const handleChangeEmail=(e)=>(setEmail(e.target.value))
    const handleChangePassword=(e)=>(setPassword(e.target.value))
    const handleSubmit=(e)=>{
        e.preventDefault()
    
    }
    const register=async()=>{
        
        try {
          const user = await createUserWithEmailAndPassword(
              auth,
              email,
              password
          ).then(()=>navigate('/'));
             setEmail("")
              setPassword("")
              
      } catch (error) {
          alert(error.message);
      }
      };  
    
      

      
    return(
      
        <form 
            className="flex flex-col mx-auto mt-10 h-20 w-2/5  gap-3"
            onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input type="email"onChange={handleChangeEmail} />
            <label htmlFor="password">password:</label>
            <input type="password" onChange={handleChangePassword} />
            
            <Button className="mt-5" text="join" onClick={register}/>
        </form>
        

    )

}