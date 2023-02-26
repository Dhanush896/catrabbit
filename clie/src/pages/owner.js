import React from "react";
import './App.css';
import Axios from "axios";
import { useState } from "react";
import bookingList from './book';
import getdata from './book';

export function Owner(){
  const [bookingList, setbookingList] = useState([]);
  const [newname, setnewname] = useState("");
  const [cusname,setcusname] = useState("");
  const [cusno,setcusno] = useState("");
  
  const [vechiclename, setvechiclename] = useState("");
  const [Vechicleno,setVechicleno] = useState("");
  const [dateofbooking,setdateofbooking] = useState("");
  const [service,setservice] = useState("");
  
  const [cusaddr,setcusaddr] = useState("");
  const [pincode,setpincode] = useState("");
  const [bookingstatus,setbookingstatus] = useState("");
  
  const getdata = () => {
    Axios.get("http://localhost:3001/disp").then((response) => {
        setbookingList(response.data);
          
    });
  };
 
  const updateEmployeeWage = (id) => {
    Axios.put("http://localhost:3001/update", { vechiclename: newname,Vechicleno:Vechicleno,
    dateofbooking:dateofbooking,
    service:service,
    cusname:cusname,
    cusno:cusno,
    cusaddr:cusaddr,
    pincode:pincode, id: id }).then(
      (response) => {
        setbookingList(
          bookingList.map((val) => {
            return val.id == id
              ? {
                  id: val.id,
                  vechiclename:val.vechiclename,
      Vechicleno:val.Vechicleno,
      dateofbooking:val.dateofbooking,
      service:val.service,
      cusname:val.cusname,
      cusno:val.cusno,
      cusaddr:val.cusaddr,
      pincode:val.pincode
                }
              : val;
          })
        );
      }
    );
  };

  const deleteEmployee = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
      setbookingList(
        bookingList.filter((val) => {
          return val.id != id;
          
          
        })
      );
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
      
      
      
    <button  onClick ={getdata}>Update</button>
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
      <label htmlfor="vechicletype">vechicle Name</label>
    <input type="text" onChange={(e)=>{setnewname(e.target.value);}} placeholder="Enter your vehicle" required></input>
    <label htmlfor="VehicleNo">Vehicle No</label>
    <input type="text" onChange={(e)=>{setVechicleno(e.target.value);}}placeholder="Enter your no" required></input>
    <label htmlfor="appointmentdate">Date of Booking</label>
    <input type="text" onChange={(e)=>{setdateofbooking(e.target.value);}} placeholder="date" required></input>
    <label htmlfor="type \ofservice">service</label>
    <input type="text" onChange={(e)=>{setservice(e.target.value);}} placeholder="service" required></input>
    
    <h4>Customer details</h4>
    <label htmlfor="vechicletype">Name</label>
    <input type="text" onChange={(e)=>{setcusname(e.target.value);}}placeholder="Enter your Name" required></input>
    <label htmlfor="Phone No">Phone No</label>
    <input type="text" onChange={(e)=>{setcusno(e.target.value);}}placeholder="Enter your number" required></input>
    <label htmlfor="address">Address</label>
    <input type="text" onChange={(e)=>{setcusaddr(e.target.value);}}placeholder="Enter your address" required></input>
    <label htmlfor="pincode">Pin code</label>
    <input type="text" onChange={(e)=>{setpincode(e.target.value);}}placeholder="Pincode" required></input>
    
    <button
                  onClick={() => {
                    updateEmployeeWage(val.id);
                  }}
                >
                  {" "}
                  Update
                </button>
                <button
                  onClick={() => {
                    deleteEmployee(val.id);
                  }}
                >
                  Delete
                </button>
    
      

    </div>
    
      
    })}
   
    </div>
    
     
     
   
    );
  }
  
  export default Owner;
  