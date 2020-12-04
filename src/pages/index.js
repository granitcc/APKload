

import React, { useState } from 'react'
import Sidebar from '../components/Sidebar' 
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Flexbox from '../components/Flexbox'


const Home = () => {

const [isOpen,setIsOpen] = useState(false);

const toggle = () =>{
    setIsOpen(!isOpen);
}

    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
         <Navbar toggle={toggle} />  
         
           
           <Flexbox /> 
           
      

          <Footer />
        
        </>
    );
};

export default Home;