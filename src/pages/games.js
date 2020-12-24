import React, { useState, useEffect } from "react";
import "./games.scss";
import Sidebar from '../components/Sidebar' 
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import game1 from "../components/images/game1.png";
import game2 from "../components/images/game2.png";
import game3 from "../components/images/game3.png";
import game4 from "../components/images/game4.png";
import game5 from "../components/images/game5.png";
import game6 from "../components/images/game6.png";
import game7 from "../components/images/game7.png";
import game8 from "../components/images/game8.png";
import game9 from "../components/images/game9.png";
import game10 from "../components/images/game10.png";
import game11 from "../components/images/game11.png";
import game12 from "../components/images/game12.png";

import { FaStar } from "react-icons/fa";

const bands = [
  {
    id: 1,
    name: "Empires & Puzzel: Epic Matches",
    img: game1,
    rate: 5,
    category:'Adventure',
    price:120,
  },
  {
    id: 2,
    name: "Boom Beach",
    img: game2,
    rate: 5,
    category:'Adventure',
    price:120,
  },
  {
    id: 3,
    name: "Clash of Clans",
    img: game3,
    rate: 4,
    category:'Adventure',
    price:120,
  },
  {
    id: 4,
    name: "Cats:Crash Arena Turbo Star",
    img: game4,
    rate: 3,
    category:'Adventure',
    price:120,

    
  },
  {
    id: 5,
    name: "Fortnite",
    img: game5,
    rate: 2,
    category:'Adventure',
    price:120,
  },
  {
    id: 6,
    name: "Clash Royale",
    img: game6,
    rate: 4,
    category:'Action',
    price:20,
  },
  {
    id: 7,
    name: "Clash Royale",
    img: game7,
    rate: 5,
    category:'Action',
    price:20,
  },
  {
    id: 8,
    name: "Epic Games",
    img: game8,
    rate: 3,
    category:'Action',
    price:20,
  },
  {
    id: 9,
    name: "Du Recorder",
    img: game9,
    rate: 2,
    category:'Action',
    price:20,
  },
  {
    id: 11,
    name: "Legacy of Discord FuriousWings",
    img: game10,
    rate: 5,
    category:'RPG',
    price:20,
  },
  {
    id: 12,
    name: "Brawls Star",
    img: game11,
    rate: 5,
    category:'RPG',
    price:20,
  },
  {
    id: 13,
    name: "Temple Rund 2",
    img: game12,
    rate: 5,
    category:'RPG',
    price:20,
  }, {
    id: 14,
    name: "Empires & Puzzel: Epic Matches",
    img: game1,
    rate: 5,
    category:'RPG',
    price:20,
  },
  {
    id: 15,
    name: "Boom Beach",
    img: game2,
    rate: 5,
    category:'RPG',
    price:20,
  },
  {
    id: 16,
    name: "Clash of Clans",
    img: game3,
    rate: 5,
    category:'RPG',
    price:20,
  },
  {
    id: 17,
    name: "Cats:Crash Arena Turbo Star",
    img: game4,
    rate: 5,
    category:'Music',
    price:220,
  },
  {
    id: 18,
    name: "Fortnite",
    img: game5,
    rate: 2,
    category:'Music',
    price:220,

  },
  {
    id: 19,
    name: "Clash Royale",
    img: game6,
    rate: 5,
    category:'Music',
    price:220,

  },
  {
    id: 20,
    name: "Clash Royale",
    img: game7,
    rate: 5,
    category:'Music',
    price:220,

  },
  {
    id: 21,
    name: "Epic Games",
    img: game8,
    rate: 5,
    category:'Art',
    price:220,

  },
  {
    id: 22,
    name: "Du Recorder",
    img: game9,
    rate: 5,
    category:'Art',
    price:220,

  },
  {
    id: 23,
    name: "Legacy of Discord FuriousWings",
    img: game10,
    rate: 5,
    category:'Art',
    price:220,

  },
  {
    id: 24,
    name: "Brawls Star",
    img: game11,
    rate: 5,
    category:'Art',
    price:220,

  },
  {
    id: 25,
    name: "Temple Rund 2",
    img: game12,
    rate: 5,
    category:'Art',
    price:220,

  },
  {
    id: 26,
    name: "Empires & Puzzel: Epic Matches",
    img: game1,
    rate: 5,
    category:'Art',
    price:1220,

  },
  {
    id: 27,
    name: "Boom Beach",
    img: game2,
    rate: 5,
    category:'Art',
    price:1220,


  },

  {
    id: 28,
    name: "Clash of Clans",
    img: game3,
    rate: 5,
    category:'Art',
    price:1220,


  },
  {
    id: 29,
    name: "Cats:Crash Arena Turbo Star",
    img: game4,
    rate: 5,
    category:'Art',
    price:1220,


  },
  {
    id: 30,
    name: "Fortnite",
    img: game5,
    rate:3,
    category:'Art',
    price:1220,


  },
  {
    id: 31,
    name: "Clash Royale",
    img: game6,
    rate: 5,
    category:'Art',
    price:1220,


  },
  {
    id: 32,
    name: "Clash Royale",
    img: game7,
    rate: 5,
    category:'Art',
    price:1220,


  },
  {
    id: 33,
    name: "Epic Games",
    img: game8,
    rate: 5,
    category:'Desgine',
    price:500,


  },
  {
    id: 34,
    name: "Du Recorder",
    img: game9,
    rate: 5,
    category:'Desgine',
    price:500,

  },
  {
    id: 35,
    name: "Legacy of Discord FuriousWings",
    img: game10,
    rate: 5,
    category:'Desgine',
    price:500,

  },
  {
    id: 36,
    name: "Brawls Star",
    img: game11,
    rate: 5,
    category:'Desgine',
    price:500,

  },
  {
    id: 37,
    name: "Temple Rund 2",
    img: game12,
    rate: 5,
    category:'Desgine',
    price:500,

  }, {
    id: 38,
    name: "Empires & Puzzel: Epic Matches",
    img: game1,
    rate: 5,
    category:'Desgine',
    price:500,

  },
  {
    id: 39,
    name: "Boom Beach",
    img: game2,
    rate: 5,
    category:'Desgine',
    price:500,

  },
  {
    id: 40,
    name: "Clash of Clans",
    img: game3,
    rate: 5,
    category:'Desgine',
    price:500,

  },
  {
    id:41 ,
    name: "Cats:Crash Arena Turbo Star",
    img: game4,
    rate: 5,
    category:'Desgine',
    price:500,

  },
  {
    id: 42,
    name: "Fortnite",
    img: game5,
    rate: 4,
    category:'Race',
    price:500,

  },
  {
    id: 43,
    name: "Clash Royale",
    img: game6,
    rate: 5,
    category:'Race',
    price:500,
  },
  {
    id: 44,
    name: "Clash Royale",
    img: game7,
    rate: 5,
    category:'Race',
    price:500,
  },
  {
    id: 45,
    name: "Epic Games",
    img: game8,
    rate: 5,
    category:'Race',
    price:100,
  },
  {
    id: 46,
    name: "Du Recorder",
    img: game9,
    rate: 5,
    category:'Race',
    price:100,
  },
  {
    id: 47,
    name: "Legacy of Discord FuriousWings",
    img: game10,
    rate: 5,
    category:'Race',
    price:100,
  },
  {
    id: 48,
    name: "Brawls Star",
    img: game11,
    rate: 5,
    category:'Race',
    price:100,
  },
  {
    id: 49,
    name: "Temple Rund 2",
    img: game12,
    rate: 5,
    category:'Race',
    price:100,
  },
   {
    id: 50,
    name: "Temple Rund 2",
    img: game12,
    rate: 5,
    category:'Race',
    price:100,
  },
  {
    id: 51,
    name: "Legacy of Discord FuriousWings",
    img: game10,
    rate: 5,
    category:'Race',
    price:100,
  },
  {
    id: 52,
    name: "Brawls Star",
    img: game11,
    rate: 2,
    category:'Race',
    price:100,
  },
  {
    id: 53,
    name: "Temple Rund 2",
    img: game12,
    rate: 4,
    category:'Race',
    price:100,
  },
   {
    id: 54,
    name: "Temple Rund 2",
    img: game12,
    rate: 3,
    category:'Race',
    price:100,
  },
  
];


function GamesPage() {
  const [orderBy,setorderBy] = useState("asc");
  const [sortType, setSortType] = useState("rate");
  const [price, setPrice] = useState({min:0,max:1500});
  const [category,setCategory] = useState("all");
   let sortedGame = bands
  // useEffect(() => {
    const sortArray = (type) => {
      console.log(category)

      if (category !== "all"){
      sortedGame=bands.filter(band=>band.category===category)
      }
      console.log(sortedGame)
      if (orderBy==="asc")
       sortedGame = sortedGame.sort((a,b)=>a[type] > b[type] ? 1 :-1)

       else
       sortedGame =sortedGame.sort((a,b)=>a[type] < b[type] ? 1 :-1)

    // 
  };




    sortArray(sortType);
  // }, [sortType]);
  const [isOpen,setIsOpen] = useState(false);
    
  const toggle = () =>{
      setIsOpen(!isOpen);
  }
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle} /> 
      <div className="games">
        <div className="games-left">
          <div className="games-inner-left">
        <div className="apps">Apps</div>
        <ul className="games-left-list-apps">
         <li><span className="g  cool-link">Art & Desgine</span></li>
         <li><span className="g  cool-link">Augmented Reality</span></li>
         <li><span className="g  cool-link">Auto & Vehicle</span></li>
         <li><span className="g  cool-link">Beauty</span></li>
         <li><span className="g  cool-link">Books</span></li>
         <li><span className="g  cool-link">Business</span></li>
         <li><span className="g  cool-link">Comics</span></li>
         <li><span className="g  cool-link">Communication</span></li>
         <li><span className="g  cool-link">Dating</span></li>
         <li><span className="g  cool-link">Daydream</span></li>
         <li><span className="g  cool-link">Education</span></li>
         <li><span className="g  cool-link">Entertainment</span></li>
         <li><span className="g  cool-link">Events</span></li>
         <li><span className="g  cool-link">Finance</span></li>
         <li><span className="g  cool-link">Food & Drink</span></li>
         <li><span className="g  cool-link">health & Fitness</span></li>
         <li><span className="g  cool-link">House & Home</span></li>
         <li><span className="g  cool-link">Libraries & Demo</span></li>
         <li><span className="g  cool-link">Lifestyle</span></li>
         <li><span className="g  cool-link">Maps & Navigation</span></li>
         <li><span className="g  cool-link">Medical</span></li>
         <li><span className="g  cool-link">Music & Audio</span></li>
         <li><span className="g  cool-link">New & magazines</span></li>
         <li><span className="g  cool-link">Parenting</span></li>
         <li><span className="g  cool-link">Personalizitaion</span></li>
         <li><span className="g  cool-link">Photography</span></li>

       </ul></div>
       <div className="games-inner-left">

       <div className="apps">Games</div>

       <ul className="games-left-list-games">
         <li><span className="g  cool-link">Art & Desgine</span></li>
         <li><span className="g  cool-link">Augmented Reality</span></li>
         <li><span className="g  cool-link">Auto & Vehicle</span></li>
         <li><span className="g  cool-link">Beauty</span></li>
         <li><span className="g  cool-link">Books</span></li>
         <li><span className="g  cool-link">Business</span></li>
         <li><span className="g  cool-link">Comics</span></li>
         <li><span className="g  cool-link">Communication</span></li>
         <li><span className="g  cool-link">Dating</span></li>
         <li><span className="g  cool-link">Daydream</span></li>
         <li><span className="g  cool-link">Education</span></li>
         <li><span className="g  cool-link">Entertainment</span></li>
         <li><span className="g  cool-link">Events</span></li>
         <li><span className="g  cool-link">Finance</span></li>
         <li><span className="g  cool-link">Food & Drink</span></li>
         <li><span className="g  cool-link">health & Fitness</span></li>
         <li><span className="g  cool-link">House & Home</span></li>
         <li><span className="g  cool-link">Libraries & Demo</span></li>
         <li><span className="g  cool-link">Lifestyle</span></li>
         <li><span className="g  cool-link">Maps & Navigation</span></li>
         <li><span className="g  cool-link">Medical</span></li>
         <li><span className="g  cool-link">Music & Audio</span></li>
         <li><span className="g  cool-link">New & magazines</span></li>
         <li><span className="g  cool-link">Parenting</span></li>
         <li><span className="g  cool-link">Personalizitaion</span></li>
         <li><span className="g  cool-link">Photography</span></li> 

       </ul>

        </div>
        </div>
        <div className="games-right">
          <div className="games-right-filetr">
            <div className="one">
            <i class="fa fa-filter"></i>  Filter
            
              </div>    
              <div className="two">
              <span className="large">
              <i class="fa fa-th"></i>

              </span>
              <span className="large">
              <i class="fa fa-th-large"></i>

                </span>
                </div>
                 
              </div>

          <div className="games-right-sort">

          <div className="games-right-sort-column-first">
              <label className="edit">A-Z</label>

              <select
                class="space"
                onChange={(e) => setorderBy(e.target.value)}
              >
                <option className="option" value="asc">Asceding</option>
                <option value="dsc">Desceding</option>
              </select>
            </div>

           
            <div className="games-right-sort-column-first">
              <label className="edit">Relevance</label>

              <select
                class="space"
                onChange={(e) => setSortType(e.target.value)}
              >
                <option className="option" value="names">Names</option>
                <option value="rate">Rate</option>
              </select>
            </div>
            <div className="games-right-sort-column-first">
              <label  className="edit">Category</label>

              <select onChange={(e) => setCategory(e.target.value)}>
                <option value={"all"}>All</option>
                <option value="Adventure">Adventure</option>
                <option value="Action">Action</option>
                <option value="RPG">RPG</option>
                <option value="Music">Music</option>
                <option value="Race">Race</option>
                <option value="Art">Art</option>
                <option value="Desgine">Desgine</option>


              </select>
            </div>
            <div className="games-right-sort-column-second">
            

              <label  className="edit">Price</label>
              <div className="games-right-sort-column-price">
             {/* <select onChange={(e) => setPrice(e.target.value)}> */}
                <input type="number"  value={price.min} placeholder="$20"  onChange={e => setPrice(e.target.value)}   />
            {/* //  </select> */}

              {/* <select onChange={(e) => setPrice(e.target.value)}> */}
              <input type="number"  value={price.max} placeholder="$1500"  onChange={e => setPrice(e.target.value)} />

              {/* </select> */}
              </div>
            </div>
            <div className="games-right-sort-column-third">
              <label  className="edit">TimeFrame</label>
              <select onChange={(e) => setSortType(e.target.value)}>
                <option value="albums">Albums</option>
                <option value="rate">Rate</option>
              </select>
            </div>
            <div className="games-right-sort-column-fourth">
              <label  className="edit">Rating</label>

              <select onChange={(e) => setSortType(e.target.value)}>
                <option value="name">Names</option>
                <option value="rate">Rate</option>
              </select>
            </div>
            <div className="games-right-sort-column-fifth">
              <label  className="edit">Download</label>

              <select onChange={(e) => setSortType(e.target.value)}>
                <option value="albums">Albums</option>
                <option value="rate">Rate</option>
              </select>
            </div>
          </div>

          <div className="games-right-content">
            {sortedGame.map((band) => (
              <div className="grc" key={band.id} style={{ margin: "10px" }}>
                <div className="img">
                  {" "}
                  <img src={band.img}  className="immg" />
                </div>
                <div className="name"> {` ${band.name}`}</div>
                <div className="rate">{[...Array(5)].map((v,i)=>{
                  return <FaStar className={`${i+1<=band.rate && "filled"}`} />
                })} </div>
                <div>
                  {" "}
                  <button className="bttnn">Download</button>
                </div>
               
              </div>
            ))}
          </div>
          <div className="numberpage">
          <ul className="numbertoanother">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li>10</li>
          </ul>
        </div>
        </div>
       
      </div>
      <Footer />
    </>
  );
}
export default GamesPage;
