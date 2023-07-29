import "./App.css";
import React,{useState} from "react";
import "./Movie.css"
import Movies from "./component/movies";
import Header1 from "./component/Header1";
import Movie from "./Movie.json";

// import Header from "./component/Header"
// import Prop from "./component/Prop"

const App = () => {
  const [num,setnum]=useState(1);



  function inc() {
    setnum(num+1);
    }

  function dec() {
      setnum(num-1);
      }
      console.log(num) //for seeimg the valure of num
  

  
return (
  <>

  <div className="App">
    <Header1/>
    <div className="Main">
          {
            Movie.map((element,index) => { //we can pass any value between ()
              return(
                
                <Movies key={index} title={element.Title} year={element.Year} img={element.Poster}/>
              )
            
          }) 
        }
       </div>
       <div>
          <div className="Heading1">NUMBERS OF MOVIES YOU WANT TO WATCH</div>
          <div className="Heading">{num}</div>
        <div className="buttons">
          <button className="btn"onClick={inc}>INCREMENT</button>
          <button className="btn"onClick={dec}>DECREMENT</button>
            
        </div>
        </div>
    
  </div>
   
     
    
     
  </> 
  );
};

export default App;

