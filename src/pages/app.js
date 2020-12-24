import React, { useState } from "react";
import "./games.scss";
import Sidebar from '../components/Sidebar' 
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import app1 from "../components/images/app1.png";
import app2 from "../components/images/app2.png";
import app3 from "../components/images/app3.png";
import app4 from "../components/images/app4.png";
import app5 from "../components/images/app5.png";
import app6 from "../components/images/app6.png";
import app7 from "../components/images/app7.png";
import app8 from "../components/images/app8.png";
import app9 from "../components/images/app9.png";
import app10 from "../components/images/app10.png";
import app11 from "../components/images/app11.png";
import app12 from "../components/images/app12.png";
import app13 from "../components/images/app13.png";
import app14 from "../components/images/app14.png";
import app15 from "../components/images/app15.png";
import app16 from "../components/images/app16.png";
import app17 from "../components/images/app17.png";
import app18 from "../components/images/app18.png";
import app19 from "../components/images/app19.png";
import app20 from "../components/images/app20.png";
import app21 from "../components/images/app21.png";
import app22 from "../components/images/app22.png";
import app23 from "../components/images/app23.png";
import app24 from "../components/images/app24.png";
import app25 from "../components/images/app25.png";
import app26 from "../components/images/app26.png";
import app27 from "../components/images/app27.png";
import app28 from "../components/images/app28.png";
import app30 from "../components/images/app30.png";
import app31 from "../components/images/app31.png";
import app32 from "../components/images/app32.png";
import app33 from "../components/images/app33.png";
import app34 from "../components/images/app34.png";
import app35 from "../components/images/app35.png";
import app36 from "../components/images/app36.png";
import app37 from "../components/images/app37.png";
import app38 from "../components/images/app38.png";
import app39 from "../components/images/app39.png";
import app40 from "../components/images/app40.png";




import { FaStar } from "react-icons/fa";

const bands = [
  {
    id: 1,
    name: "Empires & Puzzel: Epic Matches",
    img: app1,
    rate: 5,
    category:'Race',
  },
  {
    id: 2,
    name: "Boom Beach",
    img: app2,
    rate: 5,
    category:'Race',
  },
  {
    id: 3,
    name: "Clash of Clans",
    img: app22,
    rate: 5,
    category:'Race',
  },
  {
    id: 4,
    name: "Cats:Crash Arena Turbo Star",
    img: app4,
    rate: 4,
    category:'Race',
  },
  {
    id: 5,
    name: "Fortnite",
    img: app5,
    rate: 3,
    category:'Race',
  },
  {
    id: 6,
    name: "Clash Royale",
    img: app6,
    rate: 5,
    category:'Desgine',

  },
  {
    id: 7,
    name: "Clash Royale",
    img: app7,
    rate: 4,
    category:'Desgine',

  },
  {
    id: 8,
    name: "Epic Games",
    img: app8,
    rate: 4,
    category:'Desgine',

  },
  {
    id: 9,
    name: "Du Recorder",
    img: app9,
    rate: 5,
    category:'Desgine',

  },
  {
    id: 11,
    name: "Legacy of Discord FuriousWings",
    img: app10,
    rate: 5,
    category:'Desgine',

  },
  {
    id: 12,
    name: "Brawls Star",
    img: app12,
    rate: 5,
    category:'Desgine',

  },
  {
    id: 13,
    name: "Temple Rund 2",
    img: app13,
    rate: 5,
    category:'Desgine',

  }, {
    id: 14,
    name: "Empires & Puzzel: Epic Matches",
    img: app14,
    rate: 5,
    category:'Desgine',

  },
  {
    id: 15,
    name: "Boom Beach",
    img: app15,
    rate: 5,
    category:'Desgine',

  },
  {
    id: 16,
    name: "Clash of Clans",
    img: app16,
    rate: 5,
    category:'Desgine',

  },
  {
    id: 17,
    name: "Cats:Crash Arena Turbo Star",
    img: app17,
    rate: 4,
    category:'Art',
  },
  {
    id: 18,
    name: "Fortnite",
    img: app18,
    rate: 3,
    category:'Art',
  },
  {
    id: 19,
    name: "Clash Royale",
    img: app19,
    rate: 5,
    category:'Art',
  },
  {
    id: 20,
    name: "Clash Royale",
    img: app20,
    rate: 4,
    category:'Art',
  },
  {
    id: 21,
    name: "Epic Games",
    img: app21,
    rate: 4,
    category:'Art',
  },
  {
    id: 22,
    name: "Du Recorder",
    img: app22,
    rate: 5,
    category:'Art',
  },
  {
    id: 23,
    name: "Legacy of Discord FuriousWings",
    img: app23,
    rate: 5,
    category:'Art',
  },
  {
    id: 24,
    name: "Brawls Star",
    img: app24,
    rate: 5,
    category:'Art',
  },
  {
    id: 25,
    name: "Temple Rund 2",
    img: app25,
    rate: 5,
    category:'Art',
  },
  {
    id: 26,
    name: "Empires & Puzzel: Epic Matches",
    img: app26,
    rate: 5,
    category:'Art',
  },
  {
    id: 27,
    name: "Boom Beach",
    img: app27,
    rate: 5,
    category:'Art',
  },
  {
    id: 28,
    name: "Clash of Clans",
    img: app28,
    rate: 5,
    category:'Art',
  },
  {
    id: 29,
    name: "Cats:Crash Arena Turbo Star",
    img: app1,
    rate: 4,
    category:'Art',
  },
  {
    id: 30,
    name: "Fortnite",
    img: app30,
    rate: 3,
    category:'Art',
  },
  {
    id: 31,
    name: "Clash Royale",
    img: app31,
    rate: 5,
    category:'Art',
  },
  {
    id: 32,
    name: "Clash Royale",
    img: app32,
    rate: 4,
    category:'Art',
  },
  {
    id: 33,
    name: "Epic Games",
    img: app33,
    rate: 4,
    category:'Art',
  },
  {
    id: 34,
    name: "Du Recorder",
    img: app34,
    rate: 5,
    category:'Art',
  },
  {
    id: 35,
    name: "Legacy of Discord FuriousWings",
    img: app35,
    rate: 5,
        category:'Music',

  },
  {
    id: 36,
    name: "Brawls Star",
    img: app36,
    rate: 5,
    category:'Music',

  },
  {
    id: 37,
    name: "Temple Rund 2",
    img: app37,
    rate: 5,
    category:'Music',

  }, {
    id: 38,
    name: "Empires & Puzzel: Epic Matches",
    img: app38,
    rate: 5,
    category:'Music',

  },
  {
    id: 39,
    name: "Boom Beach",
    img: app39,
    rate: 5,
    category:'Music',

  },
  {
    id: 40,
    name: "Clash of Clans",
    img: app40,
    rate: 5,
    category:'Music',

  },
  {
    id:41 ,
    name: "Cats:Crash Arena Turbo Star",
    img: app32,
    rate: 4,
    category:'Music',

  },
  {
    id: 42,
    name: "Fortnite",
    img: app32,
    rate: 3,
    category:'Music',

  },
  {
    id: 43,
    name: "Clash Royale",
    img: app22,
    rate: 5,
    category:'RPG',

  },
  {
    id: 44,
    name: "Clash Royale",
    img: app21,
    rate: 4,
    category:'RPG',

  },
  {
    id: 45,
    name: "Epic Games",
    img: app10,
    rate: 4,
    category:'RPG',

  },
  {
    id: 46,
    name: "Du Recorder",
    img: app1,
    rate: 5,
    category:'Action',
  },
  {
    id: 47,
    name: "Legacy of Discord FuriousWings",
    img: app2,
    rate: 5,
    category:'Action',
  },
  {
    id: 48,
    name: "Brawls Star",
    img: app11,
    rate: 5,
    category:'Action',
  },
  {
    id: 49,
    name: "Temple Rund 2",
    img: app22,
    rate: 5,
    category:'Action',
  },
   {
    id: 50,
    name: "Temple Rund 2",
    img: app22,
    rate: 5,
    category:'Action',
  },
  {
    id: 51,
    name: "Legacy of Discord FuriousWings",
    img: app22,
    rate: 5,
    category:'Adventure',

  },
  {
    id: 52,
    name: "Brawls Star",
    img: app22,
    rate: 5,
    category:'Adventure',

  },
  {
    id: 53,
    name: "Temple Rund 2",
    img: app11,
    rate: 5,
    category:'Adventure',

  },
   {
    id: 54,
    name: "Temple Rund 2",
    img: app33,
    rate: 5,
    category:'Adventure',

  },
  
];

function AppPages()

{
  const [orderBy,setorderBy] = useState("asc");
  const [sortType, setSortType] = useState("rate");
  const [price, setPrice] = useState({min:0,max:1000});
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
                onChange={(e) => setorderBy(e.target.value)}
              >
                <option className="option" value="albums">Albums</option>
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
              <select onChange={(e) => setorderBy(e.target.value)}>
                <option value="min">300$</option>
              </select>

              <select onChange={(e) => setorderBy(e.target.value)}>
                <option value="max">1500$</option>
              </select>
              </div>
            </div>
            <div className="games-right-sort-column-third">
              <label  className="edit">TimeFrame</label>
              <select onChange={(e) => setorderBy(e.target.value)}>
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

              <select onChange={(e) => setorderBy(e.target.value)}>
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
                            <div className="helo"> <h3>Hello</h3></div>

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
export default AppPages;
