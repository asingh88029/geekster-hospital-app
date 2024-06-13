import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom"
import {useSelector} from "react-redux"

const AdminDashboard = () => {

  const navigate = useNavigate()

  const role = useSelector((state)=>state.user.role)

  useEffect(()=>{
    if(role!=="ADMIN"){
      navigate("/signin")
    }
  }, [])


  return (
    <div>Admin Dashboard</div>
  )
}

export default AdminDashboard