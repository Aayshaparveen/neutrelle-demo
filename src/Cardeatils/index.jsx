import React, { useState } from "react";
import "./style.css";
import TextField from "@mui/material/TextField";
import styled from "@emotion/styled";
// import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

// import Button from '@mui/material/Button';

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "gray",
    background: "white",
    padding: "0px 10px",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      marginRight: "400px",
      boxShadow: "0px 0px 1px 0px",
      borderRadius: "1px 15px",
      border: "1px solid rgb(226, 226, 226) ",
    },
    "&:hover fieldset": {
      borderColor: "transparent",
    },

    "&.Mui-focused fieldset": {
      border: "1px solid black",
      borderRadius: "1px 15px",
    },
  },
});

export default function ControlledOpenSelect() {
  const [age, setAge] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  // function BasicDatePicker() {
  const [value, setValue] = React.useState(null);
  // }
  // const Registration = () => {
  return (
    <div className="main-container2">
      <p className="heading2">Impact Calculator</p>
      <div className="main-box2">
        <h2 className="title2">Check your car's Impact</h2>
        <p className="sub-title2">Enter your car details to check</p>
        <div className="Registration-box2">
          <p className="Registration-title">Registration</p>
          <CssTextField
            label="Enter Registration Number*"
            id="custom-css-outlined-input"
          />
        </div>
        <div className="details-box">
          <p className="Registration-title">Car Basic Details</p>
          <div className="Two-col">
            <div className="col-1">
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Select
                  value={age}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="">
                    <em>Make</em>
                  </MenuItem>
                  <MenuItem value={1}>Abarth</MenuItem>
                  <MenuItem value={2}>Bentley</MenuItem>
                  <MenuItem value={3}>Dodge</MenuItem>
                  <MenuItem value={3}>Infiniti</MenuItem>
                  <MenuItem value={3}>Volv</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="col-2">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Manufacture Year"
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// export default Registration;
