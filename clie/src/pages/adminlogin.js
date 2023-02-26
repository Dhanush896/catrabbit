
import './App.css';
import { useState } from "react";
import Axios from "axios";
import Book from"./book";
import { BrowserRouter as Router , Route, NavLink,Routes} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



export function Adminlogin(){
  const navigate = useNavigate();
  

  const [usermail, setusermail] = useState("");
  const [password,setpassword] = useState("");
  
  const [loginstatus,setloginstatus] = useState("");

  const adlogin = (e) => {
      e.preventDefault();
      Axios.post("http://localhost:3001/adlogin", {
        usermail:usermail,
        password: password,
      }).then((response) => {
        if(response.data.message){
          setloginstatus(response.data.message)
        }else{
          setloginstatus(navigate('/owner'));
        }
        
      });
    };

  return  <div>
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
  <div style={{float:'right'}}>
              <form>
          <h4> Admin Login here</h4>
          <label htmlfor="usermail">Usermail</label>
      <input type="text" onChange={(e)=>{setusermail(e.target.value);}} placeholder="Enter your mail" required></input>
      <label htmlfor="password">password</label>
      <input type="text" onChange={(e)=>{setpassword(e.target.value);}} placeholder="Enter your password" required></input>
      <button  onClick ={adlogin}>Signup</button>
        <h4 style={{textAlign:'center'}}>{loginstatus}</h4>
    </form>
          </div>
      

  </div>


   
      
}

export default Adminlogin;