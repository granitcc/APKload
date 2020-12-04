import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import './signin.scss'

const SigninPage = () => {

    const [isOpen,setIsOpen] = useState(false);

    const toggle = () =>{
        setIsOpen(!isOpen);
    }
    

    return (
        <div>
             <Sidebar isOpen={isOpen} toggle={toggle}/>
         <Navbar toggle={toggle} />  
         
         <h1>Sign in page</h1>
         <h1>Sign in page</h1>
         <h1>Sign in page</h1>
         <h1>Sign in page</h1>
         <h1>Sign in page</h1>
         <h1>Sign in page</h1>
         <h1>Sign in page</h1>
         <h1>Sign in page</h1>
         <h1>Sign in page</h1>
         <h1>Sign in page</h1>
         <h1>Sign in page</h1>
         <h1>Sign in page</h1>
         <h1>Sign in page</h1>
         <Footer />

            
        </div>
    )
}

export default SigninPage
