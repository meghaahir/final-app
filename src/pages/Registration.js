import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import {Field, Form} from 'react-final-form'
import { API_BASE } from '../constants/api';


    function Regester() {
    const navigate=useNavigate();
    const [data, setData] = useState({
        email: "",
        firstname: "",
        lastname: "",
        phoneno:''
        });
        
        const onSubmit = async values => {
          console.log(data);
         }
        function Emailvalidate(email) {
            return /\S+@\S+\.\S+/.test(email);
          }

        function add() {
            
        
            if (!data.email) {
            alert("Enter Email");
            return;
            }else if (!Emailvalidate(data.email)) {
            alert("enter valid email");
            return;
            }else if (!data.firstname) {
            alert("Enter Firstname");
            return;
            } else if (!data.lastname) {
            alert("Enter Lastname");
            return;
            } else if (!data.phoneno) {
            alert("Enter Phoneno");
            return;
            } else if (data.phoneno.length < 10) {
            alert("Enter phoneno In Proper Format");
            return;
            }

    axios({
      method: "post",
      url: API_BASE="/api/register",
      data: data,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log("data", response);
        console.log("data", data);
        if(response.data === "User Already exist with this email"){
          
          alert("User Already exist with this email");

         return
        }else{
           alert("Register success....");
           navigate('/Login');
          }
      
      })
      .catch((error) => {
        console.warn("not!!!", error.message);
      });
      

    
  }

  return (
    <><div><h2>Registration</h2></div>
        <Form
            onSubmit={onSubmit}
            render={({ handleSubmit, form, submitting, pristine }) => (
                <form onSubmit={handleSubmit}>
                    <Field name="email" >
                        {({ input }) => (
                            <div>
                                <label>Email</label>
                                <input {...input} type="email"
                                    value={data.email} onChange={(e) =>
                                        setData({ ...data, email: e.target.value, }) 
                                    }/> 
                                   
                            </div>
                        )}
                    </Field>
                    <Field name="firstname" >
                        {({ input }) => (
                            <div>
                                <label>First Name</label>
                                <input {...input} type="firstname"
                                value={data.firstname} onChange={(e) =>
                                    setData({ ...data, firstname: e.target.value, }) 
                                }/> 
                               
                            </div>
                        )}
                    </Field>
                    <Field
                        name="lastname" >
                        {({ input }) => (
                            <div>
                                <label>Last Name</label>
                                <input {...input} type="lastname"
                                value={data.lastname} onChange={(e) =>
                                    setData({ ...data, lastname: e.target.value, }) 
                                }/> 
                            </div>
                        )}
                    </Field>
                    <Field
                        name="phoneno" >
                        {({ input }) => (
                            <div>
                                <label>Phone no</label>
                                <input {...input} type="phoneno"
                                value={data.phoneno} onChange={(e) =>
                                    setData({ ...data, phoneno: e.target.value, }) 
                                }/> 
                            </div>
                        )}
                    </Field>
                    <div className="buttons">
                        <button type="submit"  disabled={submitting}
                        onClick={add}>
                            Register
                        </button>
                        
                        <button
                            type="button"
                            onClick={form.reset}
                            disabled={submitting || pristine}
                        ><Link to={"./Login"}>
                            Login</Link>
                        </button>
                    </div>
                </form>
            )} /></>
  )
}

export default Regester;