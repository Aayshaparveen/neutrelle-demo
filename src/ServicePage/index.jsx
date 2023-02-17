import React from "react";
import "./style.css";
import styled from "@emotion/styled";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
const Service = () => {
  const CssTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: "gray",
      background: "white",
      padding: "0px 10px",
    },

    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        boxShadow: "0px 0px 1px 0px",
        borderRadius: "1px 15px",
        border: "1px solid rgb(226, 226, 226) ",
      },
      "&:hover fieldset": {
        borderColor: "transparent",
      },
      "&.Mui-focused fieldset": {
        // borderColor: 'black',
        border: "1px solid black",
        borderRadius: "1px 15px",
      },
    },
  });
  const [age, setAge] = React.useState("");

  return (
    <>
      <div className="Service-container">
        <div className="Service-heading">
          <h1>Create Service Request</h1>
          <div className="Service-btns">
            <button className="btn1">Save and Continue</button>
            <button className="btn2">Save and Close</button>
            <button className="btn3">Cancel</button>
          </div>
        </div>
        <div className="Form-col">
          <div className="col-1">
            <CssTextField label="Title" id="custom-css-outlined-input" />
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <Select
                value={age}
                // onChange={handleChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="">
                  <em>Category</em>
                </MenuItem>
                <MenuItem value={1}>Category1</MenuItem>
                <MenuItem value={2}>Category2</MenuItem>
                <MenuItem value={3}>Category3</MenuItem>
                <MenuItem value={3}>Category4</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <Select
                value={age}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="">
                  <em>Primary Point of Contact</em>
                </MenuItem>
                <MenuItem value={1}>Category1</MenuItem>
                <MenuItem value={2}>Category2</MenuItem>
                <MenuItem value={3}>Category3</MenuItem>
                <MenuItem value={3}>Category4</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="col-2">
          <FormControl sx={{ m: 1, minWidth: 120 }}>
              <Select
                value={age}
              
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="">
                  <em>Queue</em>
                </MenuItem>
                <MenuItem value={1}>Queue1</MenuItem>
                <MenuItem value={2}>Queue2</MenuItem>
                <MenuItem value={3}>Queue3</MenuItem>
                <MenuItem value={3}>Queue4</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <Select
                value={age}
              
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="">
                  <em>Assigned to</em>
                </MenuItem>
                <MenuItem value={1}>Queue1</MenuItem>
                <MenuItem value={2}>Queue2</MenuItem>
                <MenuItem value={3}>Queue3</MenuItem>
                <MenuItem value={3}>Queue4</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <Select
                value={age}
              
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="">
                  <em>Channel Type</em>
                </MenuItem>
                <MenuItem value={1}>Queue1</MenuItem>
                <MenuItem value={2}>Queue2</MenuItem>
                <MenuItem value={3}>Queue3</MenuItem>
                <MenuItem value={3}>Queue4</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
