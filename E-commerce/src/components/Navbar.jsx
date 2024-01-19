import  {React, useState} from "react";
import { Link } from "react-router-dom";
import {HiViewList} from "react-icons/hi"
import {FcGoogle} from "react-icons/fc"
import {AiOutlineFileAdd,AiOutlineGithub} from "react-icons/ai"
import {BsFacebook} from "react-icons/bs"
import {GrClose} from "react-icons/gr"
import User from "./User";
import Button from './button'
import { useAuthContext } from "../context/AuthContext";
import CartStatus from "./cartStatus";
import Modal from 'react-modal'
import {modalStyle} from '../style/style'
import { FacebookLogin, GithubLogin,GoogleLogin,EmailLogin } from "../api/firebase";
export default function Navber(){
    
    const{user,Login,LogOut}=useAuthContext()
    const[modalIsOpen,setModalIsOpen]=useState(false)
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const handleSubmit=(e)=>{
        e.preventDefault()
    }
    const handelEmailChange = (e)=> (setEmail(e.target.value))
    const handelPasswordChange=(e)=>(setPassword(e.target.value))

    return(
        
        <header className="flex justify-between border-b border-gray-300 p-5 max-sm:flex-col items-center" >
           
         
           
            <Link to="/" className="flex items-center text-4xl text-brand">
              <img  src="images/newlogo.png" alt="logo"
                    className="w-2/5 h-5/5 max-sm:w-auto h-50 m-0" />
            </Link>
          
            <nav className="flex justify-around items-center font-bold gap-4 mr-20px min-sm:hidden">
                
                <Link to="/products" >Products</Link>
                {user&& <Link to="/Cart" > <CartStatus/></Link>}
               
               {user && user.isAdmin && <Link to="/products/new" className="text-2xl"><AiOutlineFileAdd/></Link>}
                {user && <User user={user}/>}
                <div>
                <Modal 
                       style={modalStyle}
                    isOpen={modalIsOpen}
                    onRequestClose={()=>setModalIsOpen(false)}
                    ariaHideApp={false}
                    >

                    <GrClose className="absolute right-5 text-2xl hover:cursor-pointer"
                        onClick={()=>(setModalIsOpen(false))}></GrClose>      
                      
            <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                    <div className="w-full max-w-md space-y-8">
                      <div>
                        <img
                          className="mx-auto h-12 w-auto"
                          src="/images/newlogo.png"
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Welcome !
            </h2>
          </div>
          <form className="mt-8 space-y-6 relative"
            onSubmit={handleSubmit}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                 
                  type="email" onChange={handelEmailChange}
                  autoComplete="email"
                  required
                  className="p-2 relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  type="password" onChange={handelPasswordChange}
                  autoComplete="current-password"
                  required
                  className="p-2  relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <p href="#" className="font-medium text-indigo-600 hover:text-indigo-500"
                   onClick={()=>{
                    setModalIsOpen(false)
                    setTest(true)
                  }}
                    ><Link to={'/join'}>create account</Link>
               
                </p>
              </div>
            </div>
                <div className="p-4 flex flex-row gap-10 text-4xl justify-center border-t-4 border-black-100">
                 <FcGoogle className="overflow-hidden cursor-pointer transition-all hover:scale-150" 
                 onClick={()=>GoogleLogin(setModalIsOpen)}></FcGoogle>
    
                 <BsFacebook className="overflow-hidden cursor-pointer transition-all hover:scale-150"
                 onClick ={()=>FacebookLogin(setModalIsOpen)}></BsFacebook>

                 <AiOutlineGithub className="overflow-hidden cursor-pointer transition-all hover:scale-150"
                 onClick ={()=>GithubLogin(setModalIsOpen)}></AiOutlineGithub>
                </div> 
            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={()=>EmailLogin(setModalIsOpen,email,password)}    
             > Login
              </button>
             
            </div>
          </form>
        </div>
      </div>
                   
                         

                         
                       
                        
                      
                </Modal>
                {!user && <Button  text={"LogIn"}onClick={()=>setModalIsOpen(true)}/>}
                {user &&  <Button text={"Logout"}onClick={LogOut}/>}
              
                </div>
            </nav>

            
     

        </header>

    )
}


