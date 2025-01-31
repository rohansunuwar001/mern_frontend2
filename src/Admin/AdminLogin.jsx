import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
    let [email, setEmail] = useState("");
    let [password,setPassword] = useState("");
    
    let navigate = useNavigate();

    let handleSubmit = async (e) => {
      e.preventDefault();
      let data ={
        email:email,
        password:password
    }
    try {
        let result = await axios({
            url:`http://localhost:3001/webUser/login`,
            method:'POST',
            data:data,
        })
       // console.log(result)
        let token = result.data.token;
        localStorage.setItem("token",token)
        navigate('/admin');
        
    } catch (error) {
        
    }
    }
    
  return (
    <>
    <br />
    <form onSubmit={handleSubmit}>
        <br />
        <div>
            <label htmlFor="email">Email : </label>
            <input type="email" name="email" id="email" value={email} onChange={(e) => {
              setEmail(e.target.value);
            }
            } />
        </div>
        <br />
        <div>
            <label htmlFor="password">Password : </label>
            <input type="password" name="password" id="password" value={password} onChange={(e) => {
              setPassword(e.target.value)
            }
            }/>
        </div>
        <br />
        <button type="submit" style={{margin:'5px'}}>Login</button>
        <button
          type="button"
          style={{ margin: "10px" }}
          onClick={() => {
            navigate(`/admin/forgot-password`);
          }}
        >
          Forgot Password
        </button>
    </form>
    </>
  )
}

export default AdminLogin