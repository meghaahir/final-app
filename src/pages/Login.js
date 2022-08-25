import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router';
//import { loggin } from '../reducers/slice'
import {Field, Form} from 'react-final-form'
import { doLogin } from "../actions/auth";

function Login() {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [data, setData] = useState({
    email: "",
    password: "hxu6hc"
  })

  const onSubmit = async value => {
    //console.log(data);
    }
  function login() {

    // function token() {
    //   localStorage.setItem('usertoken', JSON.stringify('testApi'))

    // }
    // console.log('data', data);
    
    dispatch(doLogin(data))
    .then(response =>  console.log("data", data))
        .then(response => navigate('/Home'))
    .catch(response => console.log(response))
    }


  return (

    <><div><h1>Login</h1></div>
            <Form
                onSubmit={onSubmit}
                render={({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <Field name="email" >
                            {({ input }) => (
                                <div>
                                    <label>Email</label>
                                    <input {...input} type="email"
                                        value={data.email} onChange={(e) => setData({ ...data, email: e.target.value, })} />

                                </div>
                            )}
                        </Field>
                        <Field name="password" >
                            {({ input }) => (
                                <div>
                                    <label>Password</label>
                                    <input {...input} type="password" 
                                        value={data.password} onChange={(e) => setData({ ...data, password: e.target.value, })} />

                                </div>
                            )}
                        </Field>

                        <button onClick={login}>Login</button>
                    </form>)}
            /></>
            )

};

export default Login;
