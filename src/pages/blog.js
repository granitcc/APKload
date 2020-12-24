import React, {useState} from 'react'
import Sidebar from '../components/Sidebar' 
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import blog1 from '../components/images/blog1.png'
import blog1a from '../components/images/blog1a.png'
import blog2 from '../components/images/blog2.png'
import blog2a from '../components/images/blog2a.png'
import blog3 from '../components/images/blog3.png'
import blog3a from '../components/images/blog3a.png'
import blog4 from '../components/images/blog4.png'
import blog4a from '../components/images/blog4a.png'
import blog5 from '../components/images/blog5.png'
import blog5a from '../components/images/blog5a.png'
import blog6 from '../components/images/blog6.png'
import blog6a from '../components/images/blog6a.png'
import blog7 from '../components/images/blog7.png'
import blog7a from '../components/images/blog7a.png'
import blog8 from '../components/images/blog8.png'
import blog8a from '../components/images/blog8a.png'

import './blog.scss'

    const blog = [
      {
        id:1,
        date:'06/12/2019',
        name:'Super Mario Run is Live on ApkLoad!',
        description:'Its been over 3month since Super Mario Run came...',
        genere:'',
        popular:'',
        relevance:'',

      },
      {
        id:2,
        date:'06/12/2019',
        name:'Super Mario Run is Live on ApkLoad!',
        description:'Its been over 3month since Super Mario Run came...',
        genere:'',
        popular:'',
        relevance:'',
      },
      {
        id:3,
        date:'06/12/2019',
        name:'Super Mario Run is Live on ApkLoad!',
        description:'Its been over 3month since Super Mario Run came...',
        genere:'',
        popular:'',
        relevance:'',

      },
      {
        id:4,
        date:'06/12/2019',
        name:'Super Mario Run is Live on ApkLoad!',
        description:'Its been over 3month since Super Mario Run came...',
        genere:'',
        popular:'',
        relevance:'',

      },
      {
        id:5,
        date:'06/12/2019',
        name:'Super Mario Run is Live on ApkLoad!',
        description:'Its been over 3month since Super Mario Run came...',
        genere:'',
        popular:'',
        relevance:'',
      }

    ]
 function BlogPages() {
    const [isOpen,setIsOpen] = useState(false);

    const toggle = () =>{
        setIsOpen(!isOpen);
    }
    
    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
         <Navbar toggle={toggle} /> 

<div className="blog">
    <div className="left-blog">
      <div className="select-option">
       <span className="fleexx">Sort by:</span> 
        <select>
          <option>Relevance</option>
        </select>
        <select>
          <option>Date</option>
        </select>
        <select>
          <option>Popular</option>
        </select>
        <select>
          <option>Genre</option>
        </select>
       <span className="fleexx">Clear all filters  
        <button id="x">x</button></span> 
      </div>
         <div className="left-blog-content">
             <div className="contentone">
               <div className="imgcont"> <img src={blog1}  id="contentone" /></div> 
                 <span className="gamedesc"><img src={blog1a} className="littel" />Game descibtion</span>
             </div>
             <div className="contentone">

                 
               <div className="imgcont"> <img src={blog2} id="contentone"    /></div> 
                 <span className="gamedesc"><img src={blog2a} className="littel" />Game descibtion</span>
             

             </div>
             
         </div>
         <div className="left-blog-content">
             <div className="contentone">
               <div className="imgcont"> <img src={blog3} id="contentone" /></div> 
                 <span className="gamedesc"><img src={blog3a} className="littel" />Game descibtion</span>
             </div>
             <div className="contentone">

                 
               <div className="imgcont"> <img src={blog4}  id="contentone" /></div> 
                 <span className="gamedesc"><img src={blog4a} className="littel" />Game descibtion</span>
             

             </div>
             
         </div>
         <div className="left-blog-content">
             <div className="contentone">
               <div className="imgcont"> <img src={blog5}  id="contentone" /></div> 
                 <span className="gamedesc"><img src={blog8a} className="littel" />Game descibtion</span>
             </div>
             <div className="contentone">

                 
               <div className="imgcont"> <img src={blog6}  id="contentone" /></div> 
                 <span className="gamedesc"><img src={blog6a} className="littel" />Game descibtion</span>
             

             </div>
             
         </div>
         <div className="left-blog-content">
             <div className="contentone">
               <div className="imgcont"> <img src={blog7}  id="contentone" /></div> 
                 <span className="gamedesc"><img src={blog7a} className="littel" />Game descibtion</span>
             </div>
             <div className="contentone">

                 
               <div className="imgcont"> <img src={blog8}  id="contentone"/></div> 
                 <span className="gamedesc"><img src={blog8a} className="littel" />Game descibtion</span>
             

            
    
    </div>
    
    </div><h3 id="seemore"> See More </h3>
         </div>
    <div className="right-blog">
        <div className="right-blog-one">
          <span id="category">Category</span>
          <ul className="category">
            <li>Apps</li>
            <li>App Awards</li>
            <li>Apk Load</li>
            <li>Giveaways</li>
            <li>Solutions</li>
            <li>Tip & Tricks</li>
            <li>Meet Team</li>
            <li>Jobs</li>
            <li>Trending</li>
            <li>Popular</li>
            <li>News</li>
          </ul>
        </div>

        <div className="right-blog-two">
          
            
             <div className="right-blog-two-two">

             <div className="e-blog">
             <h3> Popular Posts </h3>
      {blog.map(blog => (

           <div className="gap">
             
        <div className="date">{blog.date}</div>
         
        <div className="name">{blog.name}</div>
        <div className="description">{blog.description}</div>
       </div>

      ))}
  
    </div> 

             </div>
        </div>
    </div>
</div>


         <Footer />
        </>
    )
}

export default BlogPages
