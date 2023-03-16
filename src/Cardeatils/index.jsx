import React, { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import {
  FormControl,
  InputBase,
  MenuItem,
  NativeSelect,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import styled from "styled-components";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
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
  const [value, setValue] = React.useState("");
  const [variant, setVariant] = React.useState("");
  const [openname, setOpenname] = React.useState("");
  const [mileageValue, setMileageValue] = useState("");
  const [fule, setFule] = useState("");
  const [miles, setMiles] = useState("");
  const [Rnumber, setRnumber] = useState("");

  const handelRnumber = (event) => {
    setRnumber(event.target.value);
  };
  const handleVariant = (event) => {
    setVariant(event.target.value);
  };
  const handelOpenname = (event) => {
    setOpenname(event.target.value);
  };
  const handleFuel = (event) => {
    setFule(event.target.value);
  };
  const handleMiles = (event) => {
    setMiles(event.target.value);
  };
  const handelMileage = (e) => {
    setMileageValue(e.target.value);
  };
  const navigate = useNavigate();
  const openKnowimpact = () => {
    window.scrollTo(200, 0);
    console.log("Mvalue", mileageValue);

    navigate("/pages/KnowImpact", {
      state: {
        mileageValue: mileageValue,
        name: openname,
        variant: variant,
        Rnum: Rnumber,
        year: value,
      },
    });
  };

  const BootstrapInput = styled(InputBase)(() => ({
    "label + &": {},
    "& .MuiInputBase-input": {
      borderRadius: "0px 20px",
      position: "relative",
      border: "1px solid #ced4da",
      fontSize: 16,
      padding: "18px 0px 18px 15px",
      minWidth: "50px",
      "&:focus": {
        borderRadius: "0px 20px",
        boxShadow: "0rem",
      },
    },
  }));

  return (
    <div className="main-container2">
      <div className="heading2">Impact Calculator</div>
      <div className="main-box2">
        <h2 className="title2">Check your car's Impact</h2>
        <div className="sub-title2">Enter your car details to check</div>
        <div className="Registration-box2">
          <div className="Registration-title">Registration</div>
          <CssTextField
            value={Rnumber}
            onChange={handelRnumber}
            state={{ num: Rnumber }}
            label="Enter Registration Number*"
            id="custom-css-outlined-input"
          />
        </div>
        <div className="details-box">
          <div className="Basic-title">Car Basic Details</div>
          <div className="Two-col">
            <div className="col-1">
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Select
                  value={openname}
                  onChange={handelOpenname}
                  state={{ value: openname }}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="">
                    <em>Make</em>
                  </MenuItem>
                  <MenuItem value="Abarth">Abarth</MenuItem>
                  <MenuItem value="Bentley">Bentley</MenuItem>
                  <MenuItem value="Dodge">Dodge</MenuItem>
                  <MenuItem value="Infiniti">Infiniti</MenuItem>
                  <MenuItem value="Volv">Volv</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="col-2">
              <Stack>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Manufacture Year"
                    views={["year"]}
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
            <div className="variant-heading">Variant</div>
            <div className="V-box">
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Select
                  value={variant}
                  onChange={handleVariant}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                  state={{ name: variant }}
                >
                  <MenuItem value="">
                    <em>Other</em>
                  </MenuItem>
                  <MenuItem value="Petrol">Petrol</MenuItem>
                  <MenuItem value="Diesel">Diesel</MenuItem>
                  <MenuItem value="Electric">Electric</MenuItem>
                  <MenuItem value="Petrol(MHEV)">Petrol(MHEV)</MenuItem>
                  <MenuItem value="Diesel(MHEV)">Diesel(MHEV)</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="Fuel-box">
            <div className="Fuel-heading">Fuel&Mileage</div>
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
                  <NativeSelect
                    id="demo-customized-select-native"
                    value={fule}
                    onChange={handleFuel}
                    input={<BootstrapInput />}
                  >
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
                  value={mileageValue}
                  onChange={handelMileage}
                />
              </div>
              <div className="F-col2">
                <FormControl sx={{ m: 1 }} variant="standard">
                  <NativeSelect
                    id="demo-customized-select-native"
                    value={miles}
                    onChange={handleMiles}
                    input={<BootstrapInput />}
                  >
                    <option value={1}>Miles</option>
                    <option value={2}>Km</option>
                  </NativeSelect>
                </FormControl>
              </div>
            </div>
          </div>
          <div className="btn">
            {/* <Link to="../pages/KnowImpact"> */}
            <button onClick={openKnowimpact} className="impact-btn">
              Know your Impact
            </button>
            {/* </Link> */}
          </div>
          <div className="bottom-container">
            <div className="line-box">
              <div className="left-line"></div>
              <div className="text-div">
                <div>OR</div>
              </div>
              <div className="right-line"></div>
            </div>
            <div className="details">
              <a href="./ImpactCalculator">Find your vehicle</a>
              <div className="arrow">
                <img src="./image/icon-arrow.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// export default Registration;
