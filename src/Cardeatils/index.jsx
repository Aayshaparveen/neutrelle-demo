import React, { useState } from "react";
import "./style.css";
import TextField from "@mui/material/TextField";
import styled from "@emotion/styled";
import NativeSelect from "@mui/material/NativeSelect";
import InputBase from "@mui/material/InputBase";
// import InputLabel from '@mui/material/InputLabel';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Stack } from "@mui/system";
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

  // const handleClose = () => {
  //   setOpen(false);
  // };

  // const handleOpen = () => {
  //   setOpen(true);
  // };
  // const [value, setValue] = React.useState(null);

  const BootstrapInput = styled(InputBase)(() => ({
    "label + &": {},
    "& .MuiInputBase-input": {
      borderRadius: "0px 20px",
      position: "relative",
      border: "1px solid #ced4da",
      fontSize: 16,
      padding: "18px 0px 18px 15px",
      minWidth:"50px",
      "&:focus": {
        borderRadius: "0px 20px",
        // padding: "18px 0px 18px 15px",
        // borderColor: "gray",
        boxShadow: "0rem",
      },
    },
  }));
    //  DatePickers() {
    const [value, setValue] = React.useState(('2022-04-07'));
  // }

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
          <p className="Basic-title">Car Basic Details</p>
          <div className="Two-col">
            <div className="col-1">
              <FormControl sx={{ m: 1, minWidth: 120 }}>
              {/* <InputLabel id="demo-simple-select-helper-label">Make</InputLabel> */}
                <Select
                
                  value={age}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                  
                >
                  <MenuItem value=""
                  >
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
            <Stack>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Manufacture Year"
                  views={['year']}
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
              </Stack>
            </div>
          </div>
          <div className="variant-box">
            <p className="variant-heading">Variant</p>
            <div className="V-box">
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Select
                  value={age}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="">
                    <em>Other</em>
                  </MenuItem>
                  <MenuItem value={1}>Petrol</MenuItem>
                  <MenuItem value={2}>Diesel</MenuItem>
                  <MenuItem value={3}>Electric</MenuItem>
                  <MenuItem value={3}>Petrol(MHEV)</MenuItem>
                  <MenuItem value={3}>Diesel(MHEV)</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="Fuel-box">
            <p className="Fuel-heading">Fuel&Mileage</p>
            <div className="Two-col-1">
              <div className="F-col1">
                <TextField
                  id="outlined-basic"
                  label="Fuel Economy*"
                  variant="outlined"
                />
              </div>
              <div className="F-col2">
                <FormControl sx={{ m: 1 }} variant="standard">
                  {/* <InputLabel htmlFor="demo-customized-select-native">
                  Age
                </InputLabel> */}
                  <NativeSelect
                    id="demo-customized-select-native"
                    value={age}
                    onChange={handleChange}
                    input={<BootstrapInput />}
                  >
                    {/* <option aria-label="None" value="" /> */}
                    <option value={1}>Mpg</option>
                    <option value={2}>Kmpl</option>
                  </NativeSelect>
                </FormControl>
              </div>
            </div>
            <div className="Two-col-2">
              <div className="F-col1">
                <TextField
                  id="outlined-basic"
                  label="Mileage*"
                  variant="outlined"
                />
              </div>
              <div className="F-col2">
                <FormControl sx={{ m: 1 }} variant="standard">
                  {/* <InputLabel htmlFor="demo-customized-select-native">
                  Age
                </InputLabel> */}
                  <NativeSelect
                    id="demo-customized-select-native"
                    value={age}
                    onChange={handleChange}
                    input={<BootstrapInput />}
                  >
                    {/* <option aria-label="None" value="" /> */}
                    <option value={1}>Miles</option>
                    <option value={2}>Km</option>
                  </NativeSelect>
                </FormControl>
              </div>
            </div>
          </div>
          <div className="btn">
            <button className="impact-btn">Know your Impact</button>
          </div>
          <div className="bottom-container">
            <div className="line-box">
              <div className="left-line"></div>
              <div className="text-div">
                <p>OR</p>
              </div>
              <div className="right-line"></div>
            </div>
            <div className="details">
              <a href="./ImpactCalculator">Find your vehicle</a>
              <p className="arrow">
                <img src="./image/icon-arrow.svg" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// export default Registration;
