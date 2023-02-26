import './App.css';
import React from "react";
import Axios from "axios";
import {Home} from"./pages/Home";
import { BrowserRouter as Router , Route, NavLink,Routes} from 'react-router-dom';
import { Link } from 'react-router-dom';
import {Book} from './pages/book';
import {Owner} from './pages/owner';
import {Adminlogin} from './pages/adminlogin';
import {Search} from './pages/search';
import {Display} from './pages/display';
function App(){
    return(
            <div>
            <Routes>
                <Route exact path="/" element={<Home  />} />
                <Route path="/book" element={<Book />} />
                <Route path="/owner" element={<Owner />} />
                <Route path="/admin" element={<Adminlogin />} />
                <Route path="/search" element={<Search/>} />
                <Route path="/display" element={<Display />} />
            </Routes>
            </div>

    );

}
export default App;