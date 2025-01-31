import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ReadAllStudent = () => {
  let [student, setStudent] = useState([]);

  let navigate = useNavigate();

  const getAllData = async () => {
    try {
      let result = await axios({
        url: `http://localhost:3001/student`,
        method: "GET",
      });
      setStudent(result.data.result);
    } catch (error) {}
  };

  useEffect(() => {
    getAllData();
  }, []);

  const handleDelete = async (id) => {
    try {
      let result = await axios({
        url: `http://localhost:3001/student/${id}`,
        method: "DELETE",
      });
      console.log(result.data.message);
      getAllData();
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
      {student.map((value, i) => {
        return (
          <div
            key={i}
            style={{
              border: "solid gray 3px",
              marginTop: "10px",
              padding: "10px",
            }}
          >
            <div>Name is {value.name} </div>
            <div>Age is {value.age} </div>
            <div>Location is {value.location} </div>
            <button
              style={{ margin: "10px", padding: "5px" }}
              onClick={() => {
                navigate(`/student/${value._id}`);
              }}
            >
              View
            </button>
            <button
              style={{ margin: "10px", padding: "5px" }}
              onClick={() => {
                navigate(`/student/update/${value._id}`);
              }}
            >
              Edit
            </button>
            <button
              style={{ margin: "10px", padding: "5px" }}
              onClick={() => {
                deleteAlert(value._id);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ReadAllStudent;
