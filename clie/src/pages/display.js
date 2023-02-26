import React from "react";
import './App.css';
import Axios from "axios";
import { useState } from "react";
import bookingList from './book';
import getdata from './book';

export function Display(){
  const [bookingList, setbookingList] = useState([]);
  
  
  const getdata = () => {
    Axios.get("http://localhost:3001/disp1").then((response) => {
        setbookingList(response.data);
          
    });
  };
 
  
  

   
    return(<div>
      <nav>
  <ul>
    <li>
      <a href="/">Home</a>
    </li>
    <li>
      <a href="/admin">About</a>
    </li>
    <li>
      <a href="#">Contact</a>
    </li>
  </ul>
</nav>
      
      
      
    <button  onClick ={getdata}>display orders </button>
    {bookingList.map((val, key) => {
      return <div>
      <h4>vechiclename:{val.vechiclename}</h4>
      <h4>Vechicleno:{val.Vechicleno}</h4>
      <h4>dateofbooking:{val.dateofbooking}</h4>
      <h4>service:{val.service}</h4>
      <h4>cusname:{val.cusname}</h4>
      <h4>cusno:{val.cusno}</h4>
      <h4>cusaddr:{val.cusaddr}</h4>
      <h4>pincode:{val.pincode} 
      </h4>
     
    </div>
    
      
    })}
   
    </div>
    
     
     
   
    );
  }
  
  export default Display;
  