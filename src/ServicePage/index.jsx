import React, { useState } from "react";
import "./style.css";
// import styled from "@eCotion/styled";
// import { styled } from "@material-ui/styles";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { differenceInDays, endOfDay, set, startOfDay } from "date-fns";
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
  // function ControlledOpenSelect() {
  const [age, setAge] = useState("");
  const [open, setOpen] = useState(false);
  const [value1, setValue1] = useState(null);
  const [value2, setValue2] = useState(null);
  const [Startdate, setStartdate] = useState(null);
  const [Enddate, setEnddate] = useState(null);

  const handleChange = (event) => {
    setAge(event.target.value);
    setOpen(event.target.value);
    
  };
 

  // datedifference

  const handelStartDate = () => {
    setStartdate(value1);
    if (Enddate) {
      const diff = differenceInDays(new Date(Enddate), new Date(date));
      setDuration(diff);
    }
  };
  const handelEndDate = (e) => {
    setEnddate(e.target.value);
    if (Startdate) {
      const diff = differenceInDays(new Date(Enddate), new Date(date));
      setDuration(diff);
    }
  };

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
            <div className="Title">
              <label>
                Title
                <input type="text" className="Title-box" />
              </label>
            </div>
            {/* <CssTextField  id="custom-css-outlined-input" /> */}
            <div className="Category">
              <InputLabel>Category</InputLabel>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Select
                  value={age}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="">
                    <em></em>
                  </MenuItem>
                  <MenuItem value={1}>Category1</MenuItem>
                  <MenuItem value={2}>Category2</MenuItem>
                  <MenuItem value={3}>Category3</MenuItem>
                  <MenuItem value={4}>Category4</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="Primary">
              <label>Primary Point of Contact</label>

              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Select
                  value={age}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="">
                    <em></em>
                  </MenuItem>
                  <MenuItem value={1}>Category1</MenuItem>
                  <MenuItem value={2}>Category2</MenuItem>
                  <MenuItem value={3}>Category3</MenuItem>
                  <MenuItem value={3}>Category4</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="col-2">
            <div className="Queue">
              <label>Queue</label>

              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Select
                  value={age}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="">
                    <em></em>
                  </MenuItem>
                  <MenuItem value={1}>Queue1</MenuItem>
                  <MenuItem value={2}>Queue2</MenuItem>
                  <MenuItem value={3}>Queue3</MenuItem>
                  <MenuItem value={3}>Queue4</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="Assigned">
              <label>Assigned to</label>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Select
                  value={age}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="">
                    <em></em>
                  </MenuItem>
                  <MenuItem value={1}>Queue1</MenuItem>
                  <MenuItem value={2}>Queue2</MenuItem>
                  <MenuItem value={3}>Queue3</MenuItem>
                  <MenuItem value={3}>Queue4</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="Channel">
              <label>Channel Type</label>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Select
                  value={age}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="">
                    <em></em>
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

        <div className="Nature-box">
          <div className="Nature-heading">
            Nature of Allegation / Case Summary
          </div>
          <div className="Two-colum">
            <div className="Nature-col-1">
              <div className="Summary">
                <label>Summary of Allegation</label>
                <textarea type="text" />
              </div>
              <div className="Case">
                <label>
                  Nature of Case
                  <select>
                    <option value="">Other</option>
                    <option value="">Case1</option>
                    <option value="">Case2</option>
                    <option value="">Case3</option>
                    <option value="">Case4</option>
                  </select>
                </label>
              </div>
              <div className="Suspension">
                <label>Suspension Date</label>
                <input type="date" />
              </div>
              <div className="Return">
                <label>Suspension Return Date </label>
                <input type="date" />
              </div>
              <div className="Characteristics">
                <label>
                  Profected Characteristics
                  <select>
                    <option value="">Characteristics1</option>
                    <option value="">Characteristics2</option>
                    <option value="">Characteristics3</option>
                    <option value="">Characteristics4</option>
                    <option value="">Characteristics5</option>
                  </select>
                </label>
              </div>
              <div className="Respondent">
                <label>
                  Respondent
                  <select>
                    <option value=""> Respondent1</option>
                    <option value=""> Respondent2</option>
                    <option value=""> Respondent3</option>
                    <option value=""> Respondent4</option>
                    <option value=""> Respondent5</option>
                  </select>
                </label>
              </div>
              <div className="Date-Allegend">
                <label>Date of Allegend</label>

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    name="Startdate"
                    value={value1}
                    // onChange={(newValue) => {
                    //   setValue1(newValue);
                    // }}
                    onChange={handelStartDate}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </div>
            </div>
            <div className="Nature-col-2">
              <div className="Reported1">
                <label>Date Reported / Initiated</label>

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    name="Enddate"
                    value={value2}
                    // onChange={(newValue) => {
                    //   setValue2(newValue);
                    // }}
                    onChange={handelEndDate}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </div>
              <div className="Reportaing-stage">
                <label>Duration of Reportaing Stage (in days)</label>
                
              </div>
              <div className="Reported2">
                <label>
                  Reported
                  <select>
                    <option value="">Other</option>
                    <option value="">Case1</option>
                    <option value="">Case2</option>
                    <option value="">Case3</option>
                    <option value="">Case4</option>
                  </select>
                </label>
              </div>
              <div className="Complainanat">
                <label>Complainant Name</label>
                <input type="text" />
              </div>
              <div className="Complainanat-Category">
                <label>
                  Complainanat Category
                  <select>
                    <option value=""></option>
                    <option value="">Category1</option>
                    <option value="">Category2</option>
                    <option value="">Category3</option>
                    <option value="">Category4</option>
                    <option value="">Category5</option>
                  </select>
                </label>
              </div>
              <div className="Manager">
                <label>
                  HR Case Manager
                  <select>
                    <option value=""></option>
                    <option value="">Case1</option>
                    <option value="">Case2</option>
                    <option value="">Case3</option>
                    <option value="">Case4</option>
                    <option value="">Case5</option>
                  </select>
                </label>
              </div>
              <div className="Informal">
                <label>
                  Informal Case Action
                  <select>
                    <option value=""></option>
                    <option value="">Case1</option>
                    <option value="">Case2</option>
                    <option value="">Case3</option>
                    <option value="">Case4</option>
                    <option value="">Case5</option>
                  </select>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
