import React from "react";
import { Link , useNavigate} from "react-router-dom";
import axios from "axios";
import {useDispatch} from "react-redux"
import {} from "./viewproduct"
import {doLogout  } from "../actions/auth";

function Home() {
  const dispatch= useDispatch()
  const navigate= useNavigate()

  function logout(id) {
    dispatch(doLogout())
    navigate("/")
  }
 
  return (
  <>
      This is Home page <br/>
      <Link to="/Add">Add Product</Link><br></br>
      <Link to="/viewproduct">View Product</Link><br/><br/>

      <button type="button" onClick={logout}> Logout</button>
  </>
 )
}
export default Home;
