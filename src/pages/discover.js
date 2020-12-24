import React, { useState } from 'react'
import Sidebar from '../components/Sidebar' 
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import download from '../components/images/download.png'
import download1 from '../components/images/download1.png'
import download3 from '../components/images/download3.png'
import download4 from '../components/images/download4.png'
import download5 from '../components/images/download5.png'
import download6 from '../components/images/download6.png'
import download7 from '../components/images/download7.png'
import download8 from '../components/images/download8.png'
import download9 from '../components/images/download9.png'
import download10 from '../components/images/download10.png'
import download11 from '../components/images/download11.png'
import download12 from '../components/images/download12.png'
import download13 from '../components/images/download13.png'
import download14 from '../components/images/download14.png'
import download15 from '../components/images/download15.png'
import cats from '../components/images/cats.jpg'
import './discover.scss'

function DiscoverPage() {
    const [isOpen,setIsOpen] = useState(false);

    const toggle = () =>{
        setIsOpen(!isOpen);
    }
    
    return (
        <> <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle} /> 

<div className="discover">
    
    <div className="first">
    
        <div className="firstimg">
            <img src={download} id="firstimg"/>
            <span className="firststar">
            <svg xmlns="http://www.w3.org/2000/svg" width="16.859" height="16.137" viewBox="0 0 16.859 16.137">
  <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M8.967.56,6.909,4.733,2.3,5.4a1.009,1.009,0,0,0-.558,1.721L5.078,10.37,4.29,14.955a1.008,1.008,0,0,0,1.462,1.062l4.119-2.165,4.119,2.165a1.009,1.009,0,0,0,1.462-1.062l-.788-4.585L18,7.125A1.009,1.009,0,0,0,17.437,5.4l-4.6-.671L10.775.56A1.009,1.009,0,0,0,8.967.56Z" transform="translate(-1.441 0.001)" fill="#febe17"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16.859" height="16.137" viewBox="0 0 16.859 16.137">
  <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M8.967.56,6.909,4.733,2.3,5.4a1.009,1.009,0,0,0-.558,1.721L5.078,10.37,4.29,14.955a1.008,1.008,0,0,0,1.462,1.062l4.119-2.165,4.119,2.165a1.009,1.009,0,0,0,1.462-1.062l-.788-4.585L18,7.125A1.009,1.009,0,0,0,17.437,5.4l-4.6-.671L10.775.56A1.009,1.009,0,0,0,8.967.56Z" transform="translate(-1.441 0.001)" fill="#febe17"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16.859" height="16.137" viewBox="0 0 16.859 16.137">
  <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M8.967.56,6.909,4.733,2.3,5.4a1.009,1.009,0,0,0-.558,1.721L5.078,10.37,4.29,14.955a1.008,1.008,0,0,0,1.462,1.062l4.119-2.165,4.119,2.165a1.009,1.009,0,0,0,1.462-1.062l-.788-4.585L18,7.125A1.009,1.009,0,0,0,17.437,5.4l-4.6-.671L10.775.56A1.009,1.009,0,0,0,8.967.56Z" transform="translate(-1.441 0.001)" fill="#febe17"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16.859" height="16.137" viewBox="0 0 16.859 16.137">
  <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M8.967.56,6.909,4.733,2.3,5.4a1.009,1.009,0,0,0-.558,1.721L5.078,10.37,4.29,14.955a1.008,1.008,0,0,0,1.462,1.062l4.119-2.165,4.119,2.165a1.009,1.009,0,0,0,1.462-1.062l-.788-4.585L18,7.125A1.009,1.009,0,0,0,17.437,5.4l-4.6-.671L10.775.56A1.009,1.009,0,0,0,8.967.56Z" transform="translate(-1.441 0.001)" fill="#febe17"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16.859" height="16.137" viewBox="0 0 16.859 16.137">
  <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M8.967.56,6.909,4.733,2.3,5.4a1.009,1.009,0,0,0-.558,1.721L5.078,10.37,4.29,14.955a1.008,1.008,0,0,0,1.462,1.062l4.119-2.165,4.119,2.165a1.009,1.009,0,0,0,1.462-1.062l-.788-4.585L18,7.125A1.009,1.009,0,0,0,17.437,5.4l-4.6-.671L10.775.56A1.009,1.009,0,0,0,8.967.56Z" transform="translate(-1.441 0.001)" fill="#febe17"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="14" height="22" viewBox="0 0 14 22">
  <text id="_5_" data-name="5 " transform="translate(0 17)" fill="#febe17" font-size="16" font-family="OpenSans-Light, Open Sans" letter-spacing="0.015em" font-weight="300"><tspan x="0" y="0">5 </tspan></text>
</svg>

            </span>
        </div>
    
        <div className="firstmid" >
            <h3 id="pad">Pocket Ninja - Tales of Leaf <span id="number">2.7.1</span></h3>
            <span className="firstdate"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
  <path id="Icon_material-update" data-name="Icon material-update" d="M22.5,11.62h-6.78l2.74-2.82a7.04,7.04,0,0,0-9.881-.1,6.875,6.875,0,0,0,0,9.79,7.02,7.02,0,0,0,9.881,0A6.513,6.513,0,0,0,20.5,13.6h2a9.34,9.34,0,0,1-2.64,6.29,9.055,9.055,0,0,1-12.721,0,8.839,8.839,0,0,1-.02-12.58,8.988,8.988,0,0,1,12.651,0L22.5,4.5ZM14,9.5v4.25l3.5,2.08-.72,1.21L12.5,14.5v-5Z" transform="translate(-4.502 -4.5)" fill="#189ecc"/>
</svg>  22/01/2020</span>
            <p className="firsttext">Welcome to the world of Pocket Ninja - Tales of Leaf! Here you are able to exprience 
            being the Hokage yourself! Build and manage your own village, recruit the best ninja, upgrade the to ther 
            maximum potential and go on S rank missions to prectet your own village!</p>
            <span id="category">Category:<span id="categorycolor">Puzzle Game,Action,Adventure</span></span>
            <span className="views"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
  <path id="Icon_material-person" data-name="Icon material-person" d="M14,14a4,4,0,1,0-4-4A4,4,0,0,0,14,14Zm0,2c-2.67,0-8,1.34-8,4v2H22V20C22,17.34,16.67,16,14,16Z" transform="translate(-6 -6)" fill="#189ecc"/>
</svg>
  <span id="space">7.210</span></span>
            <button className="done">D O W N L O A D</button>
        </div>
      <div className="firstend">
          <img src={cats} id="imgend" />
      </div>
    </div>

     
    <div className="first">
    
        <div className="firstimg">
            <img src={download1} id="firstimg"/>
            <span className="firststar">
            <svg xmlns="http://www.w3.org/2000/svg" width="16.859" height="16.137" viewBox="0 0 16.859 16.137">
  <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M8.967.56,6.909,4.733,2.3,5.4a1.009,1.009,0,0,0-.558,1.721L5.078,10.37,4.29,14.955a1.008,1.008,0,0,0,1.462,1.062l4.119-2.165,4.119,2.165a1.009,1.009,0,0,0,1.462-1.062l-.788-4.585L18,7.125A1.009,1.009,0,0,0,17.437,5.4l-4.6-.671L10.775.56A1.009,1.009,0,0,0,8.967.56Z" transform="translate(-1.441 0.001)" fill="#febe17"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16.859" height="16.137" viewBox="0 0 16.859 16.137">
  <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M8.967.56,6.909,4.733,2.3,5.4a1.009,1.009,0,0,0-.558,1.721L5.078,10.37,4.29,14.955a1.008,1.008,0,0,0,1.462,1.062l4.119-2.165,4.119,2.165a1.009,1.009,0,0,0,1.462-1.062l-.788-4.585L18,7.125A1.009,1.009,0,0,0,17.437,5.4l-4.6-.671L10.775.56A1.009,1.009,0,0,0,8.967.56Z" transform="translate(-1.441 0.001)" fill="#febe17"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16.859" height="16.137" viewBox="0 0 16.859 16.137">
  <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M8.967.56,6.909,4.733,2.3,5.4a1.009,1.009,0,0,0-.558,1.721L5.078,10.37,4.29,14.955a1.008,1.008,0,0,0,1.462,1.062l4.119-2.165,4.119,2.165a1.009,1.009,0,0,0,1.462-1.062l-.788-4.585L18,7.125A1.009,1.009,0,0,0,17.437,5.4l-4.6-.671L10.775.56A1.009,1.009,0,0,0,8.967.56Z" transform="translate(-1.441 0.001)" fill="#febe17"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16.859" height="16.137" viewBox="0 0 16.859 16.137">
  <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M8.967.56,6.909,4.733,2.3,5.4a1.009,1.009,0,0,0-.558,1.721L5.078,10.37,4.29,14.955a1.008,1.008,0,0,0,1.462,1.062l4.119-2.165,4.119,2.165a1.009,1.009,0,0,0,1.462-1.062l-.788-4.585L18,7.125A1.009,1.009,0,0,0,17.437,5.4l-4.6-.671L10.775.56A1.009,1.009,0,0,0,8.967.56Z" transform="translate(-1.441 0.001)" fill="#febe17"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16.859" height="16.137" viewBox="0 0 16.859 16.137">
  <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M8.967.56,6.909,4.733,2.3,5.4a1.009,1.009,0,0,0-.558,1.721L5.078,10.37,4.29,14.955a1.008,1.008,0,0,0,1.462,1.062l4.119-2.165,4.119,2.165a1.009,1.009,0,0,0,1.462-1.062l-.788-4.585L18,7.125A1.009,1.009,0,0,0,17.437,5.4l-4.6-.671L10.775.56A1.009,1.009,0,0,0,8.967.56Z" transform="translate(-1.441 0.001)" fill="#febe17"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="14" height="22" viewBox="0 0 14 22">
  <text id="_5_" data-name="5 " transform="translate(0 17)" fill="#febe17" font-size="16" font-family="OpenSans-Light, Open Sans" letter-spacing="0.015em" font-weight="300"><tspan x="0" y="0">5 </tspan></text>
</svg>

            </span>
        </div>
    
        <div className="firstmid" >
            <h3 id="pad">Pocket Ninja - Tales of Leaf <span id="number">2.7.1</span></h3>
            <span className="firstdate"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
  <path id="Icon_material-update" data-name="Icon material-update" d="M22.5,11.62h-6.78l2.74-2.82a7.04,7.04,0,0,0-9.881-.1,6.875,6.875,0,0,0,0,9.79,7.02,7.02,0,0,0,9.881,0A6.513,6.513,0,0,0,20.5,13.6h2a9.34,9.34,0,0,1-2.64,6.29,9.055,9.055,0,0,1-12.721,0,8.839,8.839,0,0,1-.02-12.58,8.988,8.988,0,0,1,12.651,0L22.5,4.5ZM14,9.5v4.25l3.5,2.08-.72,1.21L12.5,14.5v-5Z" transform="translate(-4.502 -4.5)" fill="#189ecc"/>
</svg>  22/01/2020</span>
            <p className="firsttext">Welcome to the world of Pocket Ninja - Tales of Leaf! Here you are able to exprience 
            being the Hokage yourself! Build and manage your own village, recruit the best ninja, upgrade the to ther 
            maximum potential and go on S rank missions to prectet your own village!</p>
            <span id="category">Category:<span id="categorycolor">Puzzle Game,Action,Adventure</span></span>
            <span className="views"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
  <path id="Icon_material-person" data-name="Icon material-person" d="M14,14a4,4,0,1,0-4-4A4,4,0,0,0,14,14Zm0,2c-2.67,0-8,1.34-8,4v2H22V20C22,17.34,16.67,16,14,16Z" transform="translate(-6 -6)" fill="#189ecc"/>
</svg>
  <span id="space">7.210</span></span>
            <button className="done">D O W N L O A D</button>
        </div>
      <div className="firstend">
          <img src={download3} id="imgend" />
      </div>
    </div>
     
    <div className="first">
    
        <div className="firstimg">
            <img src={download4} id="firstimg"/>
            <span className="firststar">
            <svg xmlns="http://www.w3.org/2000/svg" width="16.859" height="16.137" viewBox="0 0 16.859 16.137">
  <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M8.967.56,6.909,4.733,2.3,5.4a1.009,1.009,0,0,0-.558,1.721L5.078,10.37,4.29,14.955a1.008,1.008,0,0,0,1.462,1.062l4.119-2.165,4.119,2.165a1.009,1.009,0,0,0,1.462-1.062l-.788-4.585L18,7.125A1.009,1.009,0,0,0,17.437,5.4l-4.6-.671L10.775.56A1.009,1.009,0,0,0,8.967.56Z" transform="translate(-1.441 0.001)" fill="#febe17"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16.859" height="16.137" viewBox="0 0 16.859 16.137">
  <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M8.967.56,6.909,4.733,2.3,5.4a1.009,1.009,0,0,0-.558,1.721L5.078,10.37,4.29,14.955a1.008,1.008,0,0,0,1.462,1.062l4.119-2.165,4.119,2.165a1.009,1.009,0,0,0,1.462-1.062l-.788-4.585L18,7.125A1.009,1.009,0,0,0,17.437,5.4l-4.6-.671L10.775.56A1.009,1.009,0,0,0,8.967.56Z" transform="translate(-1.441 0.001)" fill="#febe17"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16.859" height="16.137" viewBox="0 0 16.859 16.137">
  <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M8.967.56,6.909,4.733,2.3,5.4a1.009,1.009,0,0,0-.558,1.721L5.078,10.37,4.29,14.955a1.008,1.008,0,0,0,1.462,1.062l4.119-2.165,4.119,2.165a1.009,1.009,0,0,0,1.462-1.062l-.788-4.585L18,7.125A1.009,1.009,0,0,0,17.437,5.4l-4.6-.671L10.775.56A1.009,1.009,0,0,0,8.967.56Z" transform="translate(-1.441 0.001)" fill="#febe17"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16.859" height="16.137" viewBox="0 0 16.859 16.137">
  <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M8.967.56,6.909,4.733,2.3,5.4a1.009,1.009,0,0,0-.558,1.721L5.078,10.37,4.29,14.955a1.008,1.008,0,0,0,1.462,1.062l4.119-2.165,4.119,2.165a1.009,1.009,0,0,0,1.462-1.062l-.788-4.585L18,7.125A1.009,1.009,0,0,0,17.437,5.4l-4.6-.671L10.775.56A1.009,1.009,0,0,0,8.967.56Z" transform="translate(-1.441 0.001)" fill="#febe17"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16.859" height="16.137" viewBox="0 0 16.859 16.137">
  <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M8.967.56,6.909,4.733,2.3,5.4a1.009,1.009,0,0,0-.558,1.721L5.078,10.37,4.29,14.955a1.008,1.008,0,0,0,1.462,1.062l4.119-2.165,4.119,2.165a1.009,1.009,0,0,0,1.462-1.062l-.788-4.585L18,7.125A1.009,1.009,0,0,0,17.437,5.4l-4.6-.671L10.775.56A1.009,1.009,0,0,0,8.967.56Z" transform="translate(-1.441 0.001)" fill="#febe17"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="14" height="22" viewBox="0 0 14 22">
  <text id="_5_" data-name="5 " transform="translate(0 17)" fill="#febe17" font-size="16" font-family="OpenSans-Light, Open Sans" letter-spacing="0.015em" font-weight="300"><tspan x="0" y="0">5 </tspan></text>
</svg>

            </span>
        </div>
    
        <div className="firstmid" >
            <h3 id="pad">Pocket Ninja - Tales of Leaf <span id="number">2.7.1</span></h3>
            <span className="firstdate"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
  <path id="Icon_material-update" data-name="Icon material-update" d="M22.5,11.62h-6.78l2.74-2.82a7.04,7.04,0,0,0-9.881-.1,6.875,6.875,0,0,0,0,9.79,7.02,7.02,0,0,0,9.881,0A6.513,6.513,0,0,0,20.5,13.6h2a9.34,9.34,0,0,1-2.64,6.29,9.055,9.055,0,0,1-12.721,0,8.839,8.839,0,0,1-.02-12.58,8.988,8.988,0,0,1,12.651,0L22.5,4.5ZM14,9.5v4.25l3.5,2.08-.72,1.21L12.5,14.5v-5Z" transform="translate(-4.502 -4.5)" fill="#189ecc"/>
</svg>  22/01/2020</span>
            <p className="firsttext">Welcome to the world of Pocket Ninja - Tales of Leaf! Here you are able to exprience 
            being the Hokage yourself! Build and manage your own village, recruit the best ninja, upgrade the to ther 
            maximum potential and go on S rank missions to prectet your own village!</p>
            <span id="category">Category:<span id="categorycolor">Puzzle Game,Action,Adventure</span></span>
            <span className="views"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
  <path id="Icon_material-person" data-name="Icon material-person" d="M14,14a4,4,0,1,0-4-4A4,4,0,0,0,14,14Zm0,2c-2.67,0-8,1.34-8,4v2H22V20C22,17.34,16.67,16,14,16Z" transform="translate(-6 -6)" fill="#189ecc"/>
</svg>
  <span id="space">7.210</span></span>
            <button className="done">D O W N L O A D</button>
        </div>
      <div className="firstend">
          <img src={download5} id="imgend" />
      </div>
    </div>
     
    <div className="first">
    
        <div className="firstimg">
            <img src={download6} id="firstimg"/>
            <span className="firststar">
            <svg xmlns="http://www.w3.org/2000/svg" width="16.859" height="16.137" viewBox="0 0 16.859 16.137">
  <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M8.967.56,6.909,4.733,2.3,5.4a1.009,1.009,0,0,0-.558,1.721L5.078,10.37,4.29,14.955a1.008,1.008,0,0,0,1.462,1.062l4.119-2.165,4.119,2.165a1.009,1.009,0,0,0,1.462-1.062l-.788-4.585L18,7.125A1.009,1.009,0,0,0,17.437,5.4l-4.6-.671L10.775.56A1.009,1.009,0,0,0,8.967.56Z" transform="translate(-1.441 0.001)" fill="#febe17"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16.859" height="16.137" viewBox="0 0 16.859 16.137">
  <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M8.967.56,6.909,4.733,2.3,5.4a1.009,1.009,0,0,0-.558,1.721L5.078,10.37,4.29,14.955a1.008,1.008,0,0,0,1.462,1.062l4.119-2.165,4.119,2.165a1.009,1.009,0,0,0,1.462-1.062l-.788-4.585L18,7.125A1.009,1.009,0,0,0,17.437,5.4l-4.6-.671L10.775.56A1.009,1.009,0,0,0,8.967.56Z" transform="translate(-1.441 0.001)" fill="#febe17"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16.859" height="16.137" viewBox="0 0 16.859 16.137">
  <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M8.967.56,6.909,4.733,2.3,5.4a1.009,1.009,0,0,0-.558,1.721L5.078,10.37,4.29,14.955a1.008,1.008,0,0,0,1.462,1.062l4.119-2.165,4.119,2.165a1.009,1.009,0,0,0,1.462-1.062l-.788-4.585L18,7.125A1.009,1.009,0,0,0,17.437,5.4l-4.6-.671L10.775.56A1.009,1.009,0,0,0,8.967.56Z" transform="translate(-1.441 0.001)" fill="#febe17"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16.859" height="16.137" viewBox="0 0 16.859 16.137">
  <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M8.967.56,6.909,4.733,2.3,5.4a1.009,1.009,0,0,0-.558,1.721L5.078,10.37,4.29,14.955a1.008,1.008,0,0,0,1.462,1.062l4.119-2.165,4.119,2.165a1.009,1.009,0,0,0,1.462-1.062l-.788-4.585L18,7.125A1.009,1.009,0,0,0,17.437,5.4l-4.6-.671L10.775.56A1.009,1.009,0,0,0,8.967.56Z" transform="translate(-1.441 0.001)" fill="#febe17"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16.859" height="16.137" viewBox="0 0 16.859 16.137">
  <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M8.967.56,6.909,4.733,2.3,5.4a1.009,1.009,0,0,0-.558,1.721L5.078,10.37,4.29,14.955a1.008,1.008,0,0,0,1.462,1.062l4.119-2.165,4.119,2.165a1.009,1.009,0,0,0,1.462-1.062l-.788-4.585L18,7.125A1.009,1.009,0,0,0,17.437,5.4l-4.6-.671L10.775.56A1.009,1.009,0,0,0,8.967.56Z" transform="translate(-1.441 0.001)" fill="#febe17"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="14" height="22" viewBox="0 0 14 22">
  <text id="_5_" data-name="5 " transform="translate(0 17)" fill="#febe17" font-size="16" font-family="OpenSans-Light, Open Sans" letter-spacing="0.015em" font-weight="300"><tspan x="0" y="0">5 </tspan></text>
</svg>

            </span>
        </div>
    
        <div className="firstmid" >
            <h3 id="pad">Pocket Ninja - Tales of Leaf <span id="number">2.7.1</span></h3>
            <span className="firstdate"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
  <path id="Icon_material-update" data-name="Icon material-update" d="M22.5,11.62h-6.78l2.74-2.82a7.04,7.04,0,0,0-9.881-.1,6.875,6.875,0,0,0,0,9.79,7.02,7.02,0,0,0,9.881,0A6.513,6.513,0,0,0,20.5,13.6h2a9.34,9.34,0,0,1-2.64,6.29,9.055,9.055,0,0,1-12.721,0,8.839,8.839,0,0,1-.02-12.58,8.988,8.988,0,0,1,12.651,0L22.5,4.5ZM14,9.5v4.25l3.5,2.08-.72,1.21L12.5,14.5v-5Z" transform="translate(-4.502 -4.5)" fill="#189ecc"/>
</svg>  22/01/2020</span>
            <p className="firsttext">Welcome to the world of Pocket Ninja - Tales of Leaf! Here you are able to exprience 
            being the Hokage yourself! Build and manage your own village, recruit the best ninja, upgrade the to ther 
            maximum potential and go on S rank missions to prectet your own village!</p>
            <span id="category">Category:<span id="categorycolor">Puzzle Game,Action,Adventure</span></span>
            <span className="views"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
  <path id="Icon_material-person" data-name="Icon material-person" d="M14,14a4,4,0,1,0-4-4A4,4,0,0,0,14,14Zm0,2c-2.67,0-8,1.34-8,4v2H22V20C22,17.34,16.67,16,14,16Z" transform="translate(-6 -6)" fill="#189ecc"/>
</svg>
  <span id="space">7.210</span></span>
            <button className="done">D O W N L O A D</button>
        </div>
      <div className="firstend">
          <img src={download7} id="imgend" />
      </div>
    </div>
     
    <div className="first">
    
        <div className="firstimg">
            <img src={download8} id="firstimg"/>
            <span className="firststar">
            <svg xmlns="http://www.w3.org/2000/svg" width="16.859" height="16.137" viewBox="0 0 16.859 16.137">
  <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M8.967.56,6.909,4.733,2.3,5.4a1.009,1.009,0,0,0-.558,1.721L5.078,10.37,4.29,14.955a1.008,1.008,0,0,0,1.462,1.062l4.119-2.165,4.119,2.165a1.009,1.009,0,0,0,1.462-1.062l-.788-4.585L18,7.125A1.009,1.009,0,0,0,17.437,5.4l-4.6-.671L10.775.56A1.009,1.009,0,0,0,8.967.56Z" transform="translate(-1.441 0.001)" fill="#febe17"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16.859" height="16.137" viewBox="0 0 16.859 16.137">
  <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M8.967.56,6.909,4.733,2.3,5.4a1.009,1.009,0,0,0-.558,1.721L5.078,10.37,4.29,14.955a1.008,1.008,0,0,0,1.462,1.062l4.119-2.165,4.119,2.165a1.009,1.009,0,0,0,1.462-1.062l-.788-4.585L18,7.125A1.009,1.009,0,0,0,17.437,5.4l-4.6-.671L10.775.56A1.009,1.009,0,0,0,8.967.56Z" transform="translate(-1.441 0.001)" fill="#febe17"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16.859" height="16.137" viewBox="0 0 16.859 16.137">
  <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M8.967.56,6.909,4.733,2.3,5.4a1.009,1.009,0,0,0-.558,1.721L5.078,10.37,4.29,14.955a1.008,1.008,0,0,0,1.462,1.062l4.119-2.165,4.119,2.165a1.009,1.009,0,0,0,1.462-1.062l-.788-4.585L18,7.125A1.009,1.009,0,0,0,17.437,5.4l-4.6-.671L10.775.56A1.009,1.009,0,0,0,8.967.56Z" transform="translate(-1.441 0.001)" fill="#febe17"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16.859" height="16.137" viewBox="0 0 16.859 16.137">
  <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M8.967.56,6.909,4.733,2.3,5.4a1.009,1.009,0,0,0-.558,1.721L5.078,10.37,4.29,14.955a1.008,1.008,0,0,0,1.462,1.062l4.119-2.165,4.119,2.165a1.009,1.009,0,0,0,1.462-1.062l-.788-4.585L18,7.125A1.009,1.009,0,0,0,17.437,5.4l-4.6-.671L10.775.56A1.009,1.009,0,0,0,8.967.56Z" transform="translate(-1.441 0.001)" fill="#febe17"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16.859" height="16.137" viewBox="0 0 16.859 16.137">
  <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M8.967.56,6.909,4.733,2.3,5.4a1.009,1.009,0,0,0-.558,1.721L5.078,10.37,4.29,14.955a1.008,1.008,0,0,0,1.462,1.062l4.119-2.165,4.119,2.165a1.009,1.009,0,0,0,1.462-1.062l-.788-4.585L18,7.125A1.009,1.009,0,0,0,17.437,5.4l-4.6-.671L10.775.56A1.009,1.009,0,0,0,8.967.56Z" transform="translate(-1.441 0.001)" fill="#febe17"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="14" height="22" viewBox="0 0 14 22">
  <text id="_5_" data-name="5 " transform="translate(0 17)" fill="#febe17" font-size="16" font-family="OpenSans-Light, Open Sans" letter-spacing="0.015em" font-weight="300"><tspan x="0" y="0">5 </tspan></text>
</svg>

            </span>
        </div>
    
        <div className="firstmid" >
            <h3 id="pad">Pocket Ninja - Tales of Leaf <span id="number">2.7.1</span></h3>
            <span className="firstdate"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
  <path id="Icon_material-update" data-name="Icon material-update" d="M22.5,11.62h-6.78l2.74-2.82a7.04,7.04,0,0,0-9.881-.1,6.875,6.875,0,0,0,0,9.79,7.02,7.02,0,0,0,9.881,0A6.513,6.513,0,0,0,20.5,13.6h2a9.34,9.34,0,0,1-2.64,6.29,9.055,9.055,0,0,1-12.721,0,8.839,8.839,0,0,1-.02-12.58,8.988,8.988,0,0,1,12.651,0L22.5,4.5ZM14,9.5v4.25l3.5,2.08-.72,1.21L12.5,14.5v-5Z" transform="translate(-4.502 -4.5)" fill="#189ecc"/>
</svg>  22/01/2020</span>
            <p className="firsttext">Welcome to the world of Pocket Ninja - Tales of Leaf! Here you are able to exprience 
            being the Hokage yourself! Build and manage your own village, recruit the best ninja, upgrade the to ther 
            maximum potential and go on S rank missions to prectet your own village!</p>
            <span id="category">Category:<span id="categorycolor">Puzzle Game,Action,Adventure</span></span>
            <span className="views"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
  <path id="Icon_material-person" data-name="Icon material-person" d="M14,14a4,4,0,1,0-4-4A4,4,0,0,0,14,14Zm0,2c-2.67,0-8,1.34-8,4v2H22V20C22,17.34,16.67,16,14,16Z" transform="translate(-6 -6)" fill="#189ecc"/>
</svg>
  <span id="space">7.210</span></span>
            <button className="done">D O W N L O A D</button>
        </div>
      <div className="firstend">
          <img src={download9} id="imgend" />
      </div>
    </div>
     
    <div className="first">
    
        <div className="firstimg">
            <img src={download10} id="firstimg"/>
            <span className="firststar">
            <svg xmlns="http://www.w3.org/2000/svg" width="16.859" height="16.137" viewBox="0 0 16.859 16.137">
  <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M8.967.56,6.909,4.733,2.3,5.4a1.009,1.009,0,0,0-.558,1.721L5.078,10.37,4.29,14.955a1.008,1.008,0,0,0,1.462,1.062l4.119-2.165,4.119,2.165a1.009,1.009,0,0,0,1.462-1.062l-.788-4.585L18,7.125A1.009,1.009,0,0,0,17.437,5.4l-4.6-.671L10.775.56A1.009,1.009,0,0,0,8.967.56Z" transform="translate(-1.441 0.001)" fill="#febe17"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16.859" height="16.137" viewBox="0 0 16.859 16.137">
  <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M8.967.56,6.909,4.733,2.3,5.4a1.009,1.009,0,0,0-.558,1.721L5.078,10.37,4.29,14.955a1.008,1.008,0,0,0,1.462,1.062l4.119-2.165,4.119,2.165a1.009,1.009,0,0,0,1.462-1.062l-.788-4.585L18,7.125A1.009,1.009,0,0,0,17.437,5.4l-4.6-.671L10.775.56A1.009,1.009,0,0,0,8.967.56Z" transform="translate(-1.441 0.001)" fill="#febe17"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16.859" height="16.137" viewBox="0 0 16.859 16.137">
  <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M8.967.56,6.909,4.733,2.3,5.4a1.009,1.009,0,0,0-.558,1.721L5.078,10.37,4.29,14.955a1.008,1.008,0,0,0,1.462,1.062l4.119-2.165,4.119,2.165a1.009,1.009,0,0,0,1.462-1.062l-.788-4.585L18,7.125A1.009,1.009,0,0,0,17.437,5.4l-4.6-.671L10.775.56A1.009,1.009,0,0,0,8.967.56Z" transform="translate(-1.441 0.001)" fill="#febe17"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16.859" height="16.137" viewBox="0 0 16.859 16.137">
  <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M8.967.56,6.909,4.733,2.3,5.4a1.009,1.009,0,0,0-.558,1.721L5.078,10.37,4.29,14.955a1.008,1.008,0,0,0,1.462,1.062l4.119-2.165,4.119,2.165a1.009,1.009,0,0,0,1.462-1.062l-.788-4.585L18,7.125A1.009,1.009,0,0,0,17.437,5.4l-4.6-.671L10.775.56A1.009,1.009,0,0,0,8.967.56Z" transform="translate(-1.441 0.001)" fill="#febe17"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16.859" height="16.137" viewBox="0 0 16.859 16.137">
  <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M8.967.56,6.909,4.733,2.3,5.4a1.009,1.009,0,0,0-.558,1.721L5.078,10.37,4.29,14.955a1.008,1.008,0,0,0,1.462,1.062l4.119-2.165,4.119,2.165a1.009,1.009,0,0,0,1.462-1.062l-.788-4.585L18,7.125A1.009,1.009,0,0,0,17.437,5.4l-4.6-.671L10.775.56A1.009,1.009,0,0,0,8.967.56Z" transform="translate(-1.441 0.001)" fill="#febe17"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="14" height="22" viewBox="0 0 14 22">
  <text id="_5_" data-name="5 " transform="translate(0 17)" fill="#febe17" font-size="16" font-family="OpenSans-Light, Open Sans" letter-spacing="0.015em" font-weight="300"><tspan x="0" y="0">5 </tspan></text>
</svg>

            </span>
        </div>
    
        <div className="firstmid" >
            <h3 id="pad">Pocket Ninja - Tales of Leaf <span id="number">2.7.1</span></h3>
            <span className="firstdate"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
  <path id="Icon_material-update" data-name="Icon material-update" d="M22.5,11.62h-6.78l2.74-2.82a7.04,7.04,0,0,0-9.881-.1,6.875,6.875,0,0,0,0,9.79,7.02,7.02,0,0,0,9.881,0A6.513,6.513,0,0,0,20.5,13.6h2a9.34,9.34,0,0,1-2.64,6.29,9.055,9.055,0,0,1-12.721,0,8.839,8.839,0,0,1-.02-12.58,8.988,8.988,0,0,1,12.651,0L22.5,4.5ZM14,9.5v4.25l3.5,2.08-.72,1.21L12.5,14.5v-5Z" transform="translate(-4.502 -4.5)" fill="#189ecc"/>
</svg>  22/01/2020</span>
            <p className="firsttext">Welcome to the world of Pocket Ninja - Tales of Leaf! Here you are able to exprience 
            being the Hokage yourself! Build and manage your own village, recruit the best ninja, upgrade the to ther 
            maximum potential and go on S rank missions to prectet your own village!</p>
            <span id="category">Category:<span id="categorycolor">Puzzle Game,Action,Adventure</span></span>
            <span className="views"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
  <path id="Icon_material-person" data-name="Icon material-person" d="M14,14a4,4,0,1,0-4-4A4,4,0,0,0,14,14Zm0,2c-2.67,0-8,1.34-8,4v2H22V20C22,17.34,16.67,16,14,16Z" transform="translate(-6 -6)" fill="#189ecc"/>
</svg>
  <span id="space">7.210</span></span>
            <button className="done">D O W N L O A D</button>
        </div>
      <div className="firstend">
          <img src={download11} id="imgend" />
      </div>
    </div>
     
    <div className="first">
    
        <div className="firstimg">
            <img src={download12} id="firstimg"/>
            <span className="firststar">
            <svg xmlns="http://www.w3.org/2000/svg" width="16.859" height="16.137" viewBox="0 0 16.859 16.137">
  <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M8.967.56,6.909,4.733,2.3,5.4a1.009,1.009,0,0,0-.558,1.721L5.078,10.37,4.29,14.955a1.008,1.008,0,0,0,1.462,1.062l4.119-2.165,4.119,2.165a1.009,1.009,0,0,0,1.462-1.062l-.788-4.585L18,7.125A1.009,1.009,0,0,0,17.437,5.4l-4.6-.671L10.775.56A1.009,1.009,0,0,0,8.967.56Z" transform="translate(-1.441 0.001)" fill="#febe17"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16.859" height="16.137" viewBox="0 0 16.859 16.137">
  <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M8.967.56,6.909,4.733,2.3,5.4a1.009,1.009,0,0,0-.558,1.721L5.078,10.37,4.29,14.955a1.008,1.008,0,0,0,1.462,1.062l4.119-2.165,4.119,2.165a1.009,1.009,0,0,0,1.462-1.062l-.788-4.585L18,7.125A1.009,1.009,0,0,0,17.437,5.4l-4.6-.671L10.775.56A1.009,1.009,0,0,0,8.967.56Z" transform="translate(-1.441 0.001)" fill="#febe17"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16.859" height="16.137" viewBox="0 0 16.859 16.137">
  <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M8.967.56,6.909,4.733,2.3,5.4a1.009,1.009,0,0,0-.558,1.721L5.078,10.37,4.29,14.955a1.008,1.008,0,0,0,1.462,1.062l4.119-2.165,4.119,2.165a1.009,1.009,0,0,0,1.462-1.062l-.788-4.585L18,7.125A1.009,1.009,0,0,0,17.437,5.4l-4.6-.671L10.775.56A1.009,1.009,0,0,0,8.967.56Z" transform="translate(-1.441 0.001)" fill="#febe17"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16.859" height="16.137" viewBox="0 0 16.859 16.137">
  <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M8.967.56,6.909,4.733,2.3,5.4a1.009,1.009,0,0,0-.558,1.721L5.078,10.37,4.29,14.955a1.008,1.008,0,0,0,1.462,1.062l4.119-2.165,4.119,2.165a1.009,1.009,0,0,0,1.462-1.062l-.788-4.585L18,7.125A1.009,1.009,0,0,0,17.437,5.4l-4.6-.671L10.775.56A1.009,1.009,0,0,0,8.967.56Z" transform="translate(-1.441 0.001)" fill="#febe17"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16.859" height="16.137" viewBox="0 0 16.859 16.137">
  <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M8.967.56,6.909,4.733,2.3,5.4a1.009,1.009,0,0,0-.558,1.721L5.078,10.37,4.29,14.955a1.008,1.008,0,0,0,1.462,1.062l4.119-2.165,4.119,2.165a1.009,1.009,0,0,0,1.462-1.062l-.788-4.585L18,7.125A1.009,1.009,0,0,0,17.437,5.4l-4.6-.671L10.775.56A1.009,1.009,0,0,0,8.967.56Z" transform="translate(-1.441 0.001)" fill="#febe17"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="14" height="22" viewBox="0 0 14 22">
  <text id="_5_" data-name="5 " transform="translate(0 17)" fill="#febe17" font-size="16" font-family="OpenSans-Light, Open Sans" letter-spacing="0.015em" font-weight="300"><tspan x="0" y="0">5 </tspan></text>
</svg>

            </span>
        </div>
    
        <div className="firstmid" >
            <h3 id="pad">Pocket Ninja - Tales of Leaf <span id="number">2.7.1</span></h3>
            <span className="firstdate"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
  <path id="Icon_material-update" data-name="Icon material-update" d="M22.5,11.62h-6.78l2.74-2.82a7.04,7.04,0,0,0-9.881-.1,6.875,6.875,0,0,0,0,9.79,7.02,7.02,0,0,0,9.881,0A6.513,6.513,0,0,0,20.5,13.6h2a9.34,9.34,0,0,1-2.64,6.29,9.055,9.055,0,0,1-12.721,0,8.839,8.839,0,0,1-.02-12.58,8.988,8.988,0,0,1,12.651,0L22.5,4.5ZM14,9.5v4.25l3.5,2.08-.72,1.21L12.5,14.5v-5Z" transform="translate(-4.502 -4.5)" fill="#189ecc"/>
</svg>  22/01/2020</span>
            <p className="firsttext">Welcome to the world of Pocket Ninja - Tales of Leaf! Here you are able to exprience 
            being the Hokage yourself! Build and manage your own village, recruit the best ninja, upgrade the to ther 
            maximum potential and go on S rank missions to prectet your own village!</p>
            <span id="category">Category:<span id="categorycolor">Puzzle Game,Action,Adventure</span></span>
            <span className="views"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
  <path id="Icon_material-person" data-name="Icon material-person" d="M14,14a4,4,0,1,0-4-4A4,4,0,0,0,14,14Zm0,2c-2.67,0-8,1.34-8,4v2H22V20C22,17.34,16.67,16,14,16Z" transform="translate(-6 -6)" fill="#189ecc"/>
</svg>
  <span id="space">7.210</span></span>
            <button className="done">D O W N L O A D</button>
        </div>
      <div className="firstend">
          <img src={download13} id="imgend" />
      </div>
    </div>
     
    <div className="first">
    
        <div className="firstimg">
            <img src={download14} id="firstimg"/>
            <span className="firststar">
            <svg xmlns="http://www.w3.org/2000/svg" width="16.859" height="16.137" viewBox="0 0 16.859 16.137">
  <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M8.967.56,6.909,4.733,2.3,5.4a1.009,1.009,0,0,0-.558,1.721L5.078,10.37,4.29,14.955a1.008,1.008,0,0,0,1.462,1.062l4.119-2.165,4.119,2.165a1.009,1.009,0,0,0,1.462-1.062l-.788-4.585L18,7.125A1.009,1.009,0,0,0,17.437,5.4l-4.6-.671L10.775.56A1.009,1.009,0,0,0,8.967.56Z" transform="translate(-1.441 0.001)" fill="#febe17"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16.859" height="16.137" viewBox="0 0 16.859 16.137">
  <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M8.967.56,6.909,4.733,2.3,5.4a1.009,1.009,0,0,0-.558,1.721L5.078,10.37,4.29,14.955a1.008,1.008,0,0,0,1.462,1.062l4.119-2.165,4.119,2.165a1.009,1.009,0,0,0,1.462-1.062l-.788-4.585L18,7.125A1.009,1.009,0,0,0,17.437,5.4l-4.6-.671L10.775.56A1.009,1.009,0,0,0,8.967.56Z" transform="translate(-1.441 0.001)" fill="#febe17"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16.859" height="16.137" viewBox="0 0 16.859 16.137">
  <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M8.967.56,6.909,4.733,2.3,5.4a1.009,1.009,0,0,0-.558,1.721L5.078,10.37,4.29,14.955a1.008,1.008,0,0,0,1.462,1.062l4.119-2.165,4.119,2.165a1.009,1.009,0,0,0,1.462-1.062l-.788-4.585L18,7.125A1.009,1.009,0,0,0,17.437,5.4l-4.6-.671L10.775.56A1.009,1.009,0,0,0,8.967.56Z" transform="translate(-1.441 0.001)" fill="#febe17"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16.859" height="16.137" viewBox="0 0 16.859 16.137">
  <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M8.967.56,6.909,4.733,2.3,5.4a1.009,1.009,0,0,0-.558,1.721L5.078,10.37,4.29,14.955a1.008,1.008,0,0,0,1.462,1.062l4.119-2.165,4.119,2.165a1.009,1.009,0,0,0,1.462-1.062l-.788-4.585L18,7.125A1.009,1.009,0,0,0,17.437,5.4l-4.6-.671L10.775.56A1.009,1.009,0,0,0,8.967.56Z" transform="translate(-1.441 0.001)" fill="#febe17"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16.859" height="16.137" viewBox="0 0 16.859 16.137">
  <path id="Icon_awesome-star" data-name="Icon awesome-star" d="M8.967.56,6.909,4.733,2.3,5.4a1.009,1.009,0,0,0-.558,1.721L5.078,10.37,4.29,14.955a1.008,1.008,0,0,0,1.462,1.062l4.119-2.165,4.119,2.165a1.009,1.009,0,0,0,1.462-1.062l-.788-4.585L18,7.125A1.009,1.009,0,0,0,17.437,5.4l-4.6-.671L10.775.56A1.009,1.009,0,0,0,8.967.56Z" transform="translate(-1.441 0.001)" fill="#febe17"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="14" height="22" viewBox="0 0 14 22">
  <text id="_5_" data-name="5 " transform="translate(0 17)" fill="#febe17" font-size="16" font-family="OpenSans-Light, Open Sans" letter-spacing="0.015em" font-weight="300"><tspan x="0" y="0">5 </tspan></text>
</svg>

            </span>
        </div>
    
        <div className="firstmid" >
            <h3 id="pad">Pocket Ninja - Tales of Leaf <span id="number">2.7.1</span></h3>
            <span className="firstdate"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
  <path id="Icon_material-update" data-name="Icon material-update" d="M22.5,11.62h-6.78l2.74-2.82a7.04,7.04,0,0,0-9.881-.1,6.875,6.875,0,0,0,0,9.79,7.02,7.02,0,0,0,9.881,0A6.513,6.513,0,0,0,20.5,13.6h2a9.34,9.34,0,0,1-2.64,6.29,9.055,9.055,0,0,1-12.721,0,8.839,8.839,0,0,1-.02-12.58,8.988,8.988,0,0,1,12.651,0L22.5,4.5ZM14,9.5v4.25l3.5,2.08-.72,1.21L12.5,14.5v-5Z" transform="translate(-4.502 -4.5)" fill="#189ecc"/>
</svg>  22/01/2020</span>
            <p className="firsttext">Welcome to the world of Pocket Ninja - Tales of Leaf! Here you are able to exprience 
            being the Hokage yourself! Build and manage your own village, recruit the best ninja, upgrade the to ther 
            maximum potential and go on S rank missions to prectet your own village!</p>
            <span id="category">Category:<span id="categorycolor">Puzzle Game,Action,Adventure</span></span>
            <span className="views"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
  <path id="Icon_material-person" data-name="Icon material-person" d="M14,14a4,4,0,1,0-4-4A4,4,0,0,0,14,14Zm0,2c-2.67,0-8,1.34-8,4v2H22V20C22,17.34,16.67,16,14,16Z" transform="translate(-6 -6)" fill="#189ecc"/>
</svg>
  <span id="space">7.210</span></span>
            <button className="done">D O W N L O A D</button>
        </div>
      <div className="firstend">
          <img src={download15} id="imgend" />
      </div>
    </div>

</div>
        <Footer/>

        </>
    )
}

export default DiscoverPage
