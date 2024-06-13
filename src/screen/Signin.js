import {useReducer} from 'react';
import {useNavigate} from "react-router-dom";
import { Input, DatePicker, Select, Space, Button } from 'antd';
import {jwtDecode} from 'jwt-decode';
import { EyeInvisibleOutlined, EyeTwoTone, MobileFilled } from '@ant-design/icons';
import "./Signin.css";
import CONFIG from "./../config";

import {useDispatch} from "react-redux"
import {UPDATE_ROLE, UPDATE_EMAIL, UPDATE_ID} from "./../redux/slices/UserSlice"

const Signin = () => {

  const reduxDispatch = useDispatch()

  const navigate = useNavigate();

  const initialData = {
    email : "",
    password : ""
  }

  const reducerFunc = (state, action)=>{
    switch(action.type){

      case "update_email":
        return {
          ...state,
          email : action.payload
        }

      case "update_password":
        return {
          ...state,
          password : action.payload
        }

      default:
        return state

    }
  }

  const [state, dispatch] = useReducer(reducerFunc, initialData)

  const signinHandler = async()=>{

    // all the form data using state
    const {email, password} = state;

    const data = {
        email,
        password
    }

    // we have to call the api
    const apiResult = await fetch(`${CONFIG.API_BASE_URL}/api/v1/user/login`, {
        method : "POST",
        headers : {
            "content-type" : "application/json" 
        },
        body : JSON.stringify(data)
    }).then(res=>res.json())

    if(apiResult.success){

        const token = apiResult.token

        // store token in localstorage
        localStorage.setItem("token", token)

        // redirect to dashboard
        // We need to check role from the token
        const payload = jwtDecode(token);
        const role = payload.role;
        const email = payload.email;
        const id = payload.userId;

        reduxDispatch(UPDATE_ROLE(role))

        reduxDispatch(UPDATE_EMAIL(email))

        reduxDispatch(UPDATE_ID(id))

        if(role === "ADMIN"){
          navigate("/admin")
        }else if(role === "DOCTOR"){

        }else if(role === "PATIENT"){
            
        }


    }else{
        // error message
    }

  }

  return(
    <div id='screen-container'>
      <div>
        <h2>Login to account</h2>
        <div id='form-container'>
          <Input onChange={(e)=>{dispatch({type : "update_email", payload : e.target.value})}} placeholder='Enter Your Email'/>
          <Input.Password
            onChange={(e)=>{dispatch({type : "update_password", payload : e.target.value})}}
            placeholder="Enter Your Password"
            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
          />   
          <Button onClick={signinHandler} style={{width: "100%"}} type="primary">Login your account</Button> 
        </div>
      </div>
    </div>
  )

}

export default Signin;

