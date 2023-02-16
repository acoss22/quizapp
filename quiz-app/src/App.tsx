import { useEffect, useState } from "react";
import Data from './data/htmlquiz.json';
import "./App.css";

const App = () => {

 console.log(Data);
  


  return (
    <div className="App">
      QUIZ APP
     
       <button>
       {Data.quiz.name}
        </button> 

    </div>
  );
};

export default App;
