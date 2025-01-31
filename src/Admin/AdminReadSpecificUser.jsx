import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const AdminReadSpecificUser = () => {

    let [user, setUser] = useState("");

    let params = useParams();

    let getData = async () => {
      try {
        let result = await axios({
            url:`http://localhost:3001/webUser/${params.id}`,
        })
        let data = result.data.data;
        setUser(data);
      } catch (error) {
        
      }
    }
    

    useEffect(() => {
      getData();
    }
    ,[])

  return (
    <div>

       <div>Full Name is : {user.fullname} </div>
       <div>Email is : {user.email} </div>
       <div> Gender is : {user.gender} </div>
       <div>Role is : {user.role} </div>



    </div>
  )
}

export default AdminReadSpecificUser