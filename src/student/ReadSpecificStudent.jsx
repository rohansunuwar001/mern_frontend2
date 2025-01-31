import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ReadSpecificStudent = () => {
  let [student, setStudent] = useState("");

  let params = useParams();

  const getData = async () => {
    try {
      let result = await axios({
        url: `http://localhost:3001/student/${params.id}`,
        method: "GET",
      });
      setStudent(result.data.result);
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div>Name is : {student.name} </div>
      <div>Age is : {student.age} </div>
      <div>Location is : {student.location} </div>
    </div>
  );
};

export default ReadSpecificStudent;
