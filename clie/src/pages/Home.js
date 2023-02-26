
import './App.css';
import { useState } from "react";
import Axios from "axios";
import Book from"./book";
import { BrowserRouter as Router , Route, NavLink,Routes} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



export function Home(){
  const navigate = useNavigate();
  

  const [usermail, setusermail] = useState("");
  const [password,setpassword] = useState("");
  const [mobileno,setmobileno] = useState("");
  const [registerstatus,setregisterstatus] = useState("");
  const [loginstatus,setloginstatus] = useState("");

  const register = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/register", {
      usermail:usermail,
      password: password,
      mobileno:mobileno
    }).then((response) => {
      if(response.data.message){
        setregisterstatus(response.data.message);
      }else{
        setregisterstatus("Account created succesfully");
      }
      
    });
  };
  const login = (e) => {
      e.preventDefault();
      Axios.post("http://localhost:3001/login", {
        usermail:usermail,
        password: password,
      }).then((response) => {
        if(response.data.message){
          setloginstatus(response.data.message)
        }else{
          setloginstatus(navigate('/book'));
        }
        
      });
    };

  return <div>
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/admin">Admin</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>

    <div  class="container" id="container">
          <div style={{float:'left'}}>
          <form>
          <h4>Register here</h4>
          <label htmlfor="usermail">Usermail</label>
      <input type="text" onChange={(e)=>{setusermail(e.target.value);}} placeholder="Enter your mail" required></input>
      <label htmlfor="mobileno">Phone No</label>
      <input type="text" onChange={(e)=>{setmobileno(e.target.value);}} placeholder="Enter your no" required></input>
      <label htmlfor="password">password</label>
      <input type="text" onChange={(e)=>{setpassword(e.target.value);}} placeholder="Enter your password" required></input>
      <button  onClick ={register}>Sign in</button>
        <h4 style={{textAlign:'center'}}>{registerstatus}</h4>
    </form>
          </div>
          <div style={{float:'right'}}>
              <form>
          <h4>Login here</h4>
          <label htmlfor="usermail">Usermail</label>
      <input type="text" onChange={(e)=>{setusermail(e.target.value);}} placeholder="Enter your mail" required></input>
      <label htmlfor="password">password</label>
      <input type="text" onChange={(e)=>{setpassword(e.target.value);}} placeholder="Enter your password" required></input>
      <button  onClick ={login}>Signup</button>
        <h4 style={{textAlign:'center'}}>{loginstatus}</h4>
    </form>
          </div>
      

      </div>

  </div>
  
      
}

export default Home;