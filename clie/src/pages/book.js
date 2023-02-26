import React from "react";
import './App.css';
import Axios from "axios";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Owner from "./owner";

export function Book(){
  const navigate = useNavigate();
  const [vechiclename, setvechiclename] = useState("");
  const [Vechicleno,setVechicleno] = useState("");
  const [dateofbooking,setdateofbooking] = useState("");
  const [service,setservice] = useState("");
  const [cusname,setcusname] = useState("");
  const [cusno,setcusno] = useState("");
  const [cusaddr,setcusaddr] = useState("");
  const [pincode,setpincode] = useState("");
  const [bookingstatus,setbookingstatus] = useState("");
  const [bookingList, setbookingList] = useState([]);

  
  const booking= (e) => {
    
    e.preventDefault();
    Axios.post("http://localhost:3001/booking", {
      vechiclename:vechiclename,
      Vechicleno:Vechicleno,
      dateofbooking:dateofbooking,
      service:service,
      cusname:cusname,
      cusno:cusno,
      cusaddr:cusaddr,
      pincode:pincode
    }).then((response) => {
      
      if(response.data.message){
        setbookingstatus(response.data.message);
      }else{
        setbookingstatus(navigate("/owner"));
        
      
        
      }
      
    });
  };
  
 
  
  

    return(
    <div class="container" id="container">
    <div style={{float:'left'}}>
    <form>
    <h4>Book Here</h4>
    
    <h4>Vechicle details</h4>
    <label htmlfor="vechicletype">vechicle Name</label>
    <input type="text" onChange={(e)=>{setvechiclename(e.target.value);}} placeholder="Enter your vehicle" required></input>
    <label htmlfor="VehicleNo">Vehicle No</label>
    <input type="text" onChange={(e)=>{setVechicleno(e.target.value);}}placeholder="Enter your no" required></input>
    <label htmlfor="appointmentdate">Date of Booking</label>
    <input type="text" onChange={(e)=>{setdateofbooking(e.target.value);}} placeholder="date" required></input>
    <label htmlfor="type \ofservice">service</label>
    <input type="text" onChange={(e)=>{setservice(e.target.value);}} placeholder="service" required></input>
    </form>
    </div>    
    <div style={{float:'right'}}>
    <form>
    <h4>Customer details</h4>
    <label htmlfor="vechicletype">Name</label>
    <input type="text" onChange={(e)=>{setcusname(e.target.value);}}placeholder="Enter your Name" required></input>
    <label htmlfor="Phone No">Phone No</label>
    <input type="text" onChange={(e)=>{setcusno(e.target.value);}}placeholder="Enter your number" required></input>
    <label htmlfor="address">Address</label>
    <input type="text" onChange={(e)=>{setcusaddr(e.target.value);}}placeholder="Enter your address" required></input>
    <label htmlfor="pincode">Pin code</label>
    <input type="text" onChange={(e)=>{setpincode(e.target.value);}}placeholder="Pincode" required></input>
    <button  onClick ={booking}>BOOK NOW</button>
    <h4 style={{textAlign:'center'}}>{bookingstatus}</h4>
    <button  onClick ={navigate("/display")}>myorders</button>

   
          
              

    </form>
    </div>
    </div>
   
    );
  }
  
  export default Book;
  