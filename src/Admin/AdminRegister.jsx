import axios from 'axios';
import  { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminRegister = () => {
    let [fullname,setFullName] = useState("");
    let [email, setEmail] = useState("");
    let [gender ,setGender] = useState();
    let [password, setPassword] = useState("");

    let genders =[
        {
            label:"Male", value:'male'
        },
        {
            label:"Female" , value:"female"
        },
        {
            label:"Other" , value:"other"
        }
    ]

    let handleSubmit = async (e) => {
      e.preventDefault();
      let data={
        fullname:fullname,
        email:email,
        gender:gender,
        password:password
      }
      data={
        ...data,role:"admin"
      }
      try {
        let result = await axios({
            url:`http://localhost:3001/webUser`,
            method:'POST',
            data:data
        });
        toast.success(result.data.message)
        setFullName("");
        setEmail("");
        setGender("");
        setPassword("");
      } catch (error) {
        
      }
    }
    
  return (
    <>
    <br />
    <ToastContainer />
    <form onSubmit={handleSubmit}>
        <br />
        <div>
            <label htmlFor="fullname">Full Name : </label>
            <input type="text" name="fullname" id="fullname" value={fullname} onChange={(e) => {
              setFullName(e.target.value);
            }
            } />
        </div>
        <br />

        <div>
            <label htmlFor="email">Email : </label>
            <input type="email" name="email" id="email" value={email} onChange={(e) => {
              setEmail(e.target.value)
            }
            }/>
        </div>
        <br />
        <div>
            <label htmlFor="gender">Gender : </label>
            {genders.map((value,index) => {
              return (
                <span key={index}>
                    <label htmlFor={value.value}>{value.label}</label>
                    <input type="radio" name="gender" id={value.label} value={value.value} checked={gender === value.value} onChange={(e) => {
                      setGender(e.target.value)
                    }
                    } />
                </span>
              )
            }
            )}
        </div>
        <br />
        <div>
            <label htmlFor="password">Password : </label>
            <input type="password" name="password" id="password" value={password} onChange={(e) => {
              setPassword(e.target.value);
            }
            }/>
        </div>
        <br />
       
            <button type="submit">Register</button>

    </form>
    </>
  )
}

export default AdminRegister