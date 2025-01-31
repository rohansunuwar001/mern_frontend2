import axios from 'axios';
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Swal from 'sweetalert2';

const AdminReadAll = () => {
    let [user, setUser] = useState([]);

    const navigate = useNavigate();

    let token = localStorage.getItem("token");

    let getData = async () => {
      try {
        let result = await axios({
            url:`http://localhost:3001/webUser`,
            method:'GET',
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
       // console.log(result);
        setUser(result.data.data);
      } catch (error) {
        
      }
    }

    useEffect(() => {
      getData();
    },[]
    )
    
    const handleDelete = async (id) => {
        try {
          let result = await axios({
            url: `http://localhost:3001/webUser/${id}`,
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          toast.success(result.data.message);
          getData();
        } catch (error) {}
      };
    
      let deleteAlert = (id) => {
        Swal.fire({
          title: "Are you sure you want to Delete?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed === true) {
            handleDelete(id);
          }
        });
      };

  return (
  <div>
        <ToastContainer />
        {user.map((item, i) => {
          return (
            <div
              key={i}
              style={{
                border: "solid gray 3px",
                margin: "10px",
                padding: "10px",
              }}
            >
              <div>Email is : {item.email}</div>
              <div>FullName is : {item.fullname}</div>
              <div>Gender is : {item.gender}</div>
              <div>Role is : {item.role}</div>
              <br />
              <button style={{ margin: "5px", cursor: "pointer" }} onClick={() => {
                navigate(`/admin/${item._id}`)
              }
              } >View</button>
              <button style={{ margin: "5px", cursor: "pointer" }} onClick={() => {
                navigate(`/admin/update/${item._id}`);
              }
              }>Edit</button>
  
              <button
                style={{ margin: "5px", cursor: "pointer" }}
                onClick={() => {
                  deleteAlert(item._id);
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
        
      )
    }

export default AdminReadAll