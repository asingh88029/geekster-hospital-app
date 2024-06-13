import {useReducer} from 'react';
import { Input, DatePicker, Select, Space, Button } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone, MobileFilled } from '@ant-design/icons';
import "./Signup.css";

const Signup = () => {

  const initialData = {
    firstName : "",
    lastName : "",
    email : "",
    phone : "",
    dob : "",
    role : "",
    gender : "",
    password : ""
  }

  const reducerFunc = (state, action)=>{
    switch(action.type){

      case "update_fname":
        return {
          ...state,
          firstName : action.payload
        }

      case "update_lname":
        return {
          ...state,
          lastName : action.payload
        }

      case "update_email":
        return {
          ...state,
          email : action.payload
        }

      case "update_phone":
        return {
          ...state,
          phone : action.payload
        }

      case "update_dob":
        return {
          ...state,
          dob : action.payload
        }

      case "update_role":
        return {
          ...state,
          role : action.payload
        }

      case "update_gender":
        return {
          ...state,
          gender : action.payload
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

  const signupHandler = ()=>{
    // all the form data using state
    // we have to call the api
    // if account is created
      // redirect to login page
    // if error
      // Error message
  }

  return(
    <div id='screen-container'>
      <div>
        <h2>Create Your Account</h2>
        <div id='form-container'>
          <Input onChange={(e)=>{dispatch({type : "update_fname", payload : e.target.value})}} placeholder='Enter Your First Name'/>
          <Input onChange={(e)=>{dispatch({type : "update_lname", payload : e.target.value})}} placeholder='Enter Your Last Name'/>
          <Input onChange={(e)=>{dispatch({type : "update_email", payload : e.target.value})}} placeholder='Enter Your Email'/>
          <Input onChange={(e)=>{dispatch({type : "update_phone", payload : e.target.value})}} placeholder='Enter Your Mobile'/>
          <DatePicker onChange={(date, dateStr)=>{
            dispatch({type : "update_dob", payload : dateStr})
          }} placeholder='Enter Your DOB' style={{width: '100%',}} needConfirm />
          <Select
            defaultValue="Select Role"
            style={{
              width: "100%",
            }}
            onChange={(value, option)=>{ 
              dispatch({type : "update_role", payload : value}) 
            }}
            options={[
              {
                value: 'ADMIN',
                label: 'ADMIN',
              },
              {
                value: 'DOCTOR',
                label: 'DOCTOR',
              },
              {
                value: 'PATIENT',
                label: 'PATIENT',
              },
            ]}
          />
          <Select
            defaultValue="Select Gender"
            style={{
              width: "100%",
            }}
            onChange={(value, option)=>{ dispatch({type : "update_gender", payload : value}) }}
            options={[
              {
                value: 'MALE',
                label: 'MALE',
              },
              {
                value: 'FEMALE',
                label: 'FEMALE',
              },
              {
                value: 'OTHER',
                label: 'OTHER',
              },
            ]}
          />
          <Input.Password
            onChange={(e)=>{dispatch({type : "update_password", payload : e.target.value})}}
            placeholder="Enter Your Password"
            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
          />   
          <Button onClick={signupHandler} style={{width: "100%"}} type="primary">Create Account</Button> 
        </div>
      </div>
    </div>
  )

}

export default Signup;

