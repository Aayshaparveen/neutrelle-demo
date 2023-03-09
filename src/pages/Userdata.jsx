import React from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useEffect } from "react";
import { useState } from "react";
import "./Temstyle.css";

const userdata = () => {
  const [tableData, setTableData] = useState([]);
  const[tableId, setTableId] = useState([]);
  
  const getAllPostById = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      console.log("Response:AllPostsById = ", response.data);
    //   setTableData(response.data);
      setTableId(response.data.id)
      {console.log("data",tableId)}
    });
};
useEffect(() => {
    getAllPostById();
}, []);
return (
    <>
      <div className="user-box">
        <h1>User Post Id</h1>
        <Autocomplete
          id="combo-box-demo"
          options={numbers}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Id" />}
          />
      </div>
    </>
  );
};

export default userdata;
const numbers = [1, 2, 3, 4, 5];


