import { Autocomplete, Box, TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import "./Temstyle.css";

const Userdata = () => {
  const [selectedId, setSelectedId] = useState("");
  const [autocompleteItems, setAutocompleteItems] = useState([]);
  const [userId, setUserId] = useState("");
  const [title1, setTitle1] = useState("");
  const [title2, setTitle2] = useState("");

  const [id, setId] = useState(null);
  const [body, setBody] = useState("");
  const [data, setData] = useState("");

  useEffect(() => {
    if (selectedId) {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${selectedId}`)
        .then((response) => {
          setId(response.data.id);
          setUserId(response.data.userId);
          setTitle1(response.data.title);
          setBody(response.data.body);
        });
    }
  }, [selectedId]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      setAutocompleteItems(response.data);
    });
  }, []);
  const handleAutocompleteChange = (event, value) => {
    if (value) {
      setSelectedId(value.id);
    } else {
      setSelectedId(null);
    }
  };
  useEffect(() => {
    // retrieve the data from the server on component mount
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      // .then((response) => response.json())
      .then((responseData) => setData(responseData));
  }, []);

  const submitHandler = (event) => {
    event.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        title1,
        body,
        id,
        userId,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="userpost-box-container">
      <Box
        className="kitchenNew-form"
        display="flex"
        fontFamily={"Poppins"}
        flexDirection={"column"}
        //
        margin="auto"
        marginTop={5}
        marginBottom={10}
        paddingLeft={25}
        paddingRight={25}
        borderRadius={5}
        gap="5vh"
      >
        <h1 className="userpost-page-title">User Post Id </h1>
        <div className="new-row-1">
          <Autocomplete
            className="user-id"
            disableClearable
            variant="outlined"
            options={autocompleteItems}
            getOptionLabel={(autocompleteItems) => autocompleteItems.id}
            onChange={handleAutocompleteChange}
            renderInput={(params) => (
              <TextField {...params} label="Id" variant="outlined" />
            )}
          />
          <TextField
            className="Kitchen-name"
            name="userId"
            label="UserId"
            type="number"
            variant="outlined"
            value={userId}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div className="new-row-2">
          <TextField
            className="food-description"
            name="title"
            label="Title"
            type={"text"}
            multiline
            value={title1}
            onChange={(e) => setTitle1(e.target.value)}
          />
          <TextField
            className="food-description"
            name="body"
            label="Body"
            type={"text"}
            multiline
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <div className="userpost-from">
          <h1 className="form-title">User Account Form</h1>
          <div className="userpost-row-1">
            <TextField
              className="food-description"
              name="title"
              label="Title"
              type={"text"}
              value={title2}
              onChange={(e) => setTitle2(e.target.value)}
            />
            <TextField
              className="food-description"
              name="body"
              label="Body"
              type="text"
              multiline
              // value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </div>
          <div className="userpost-row-2">
            <Autocomplete
              className="user-id"
              disableClearable
              options={autocompleteItems}
              getOptionLabel={(autocompleteItems) => autocompleteItems.id}
              onChange={(e) => setId(e.target.value)}
              renderInput={(params) => (
                <TextField {...params} label="Id" variant="outlined" />
              )}
            />

            <TextField
              className="food-description"
              name="userId"
              label="UserId"
              type={"number"}
              // value={userId}
              onSubmit={(e) => setUserId(e.target.value)}
            />
          </div>
          <div className="submit-btn">
            <button className="cust-button" onSubmit={submitHandler}>
              Submit
            </button>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default Userdata;
