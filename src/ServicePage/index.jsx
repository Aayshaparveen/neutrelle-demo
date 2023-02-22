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
import { differenceInDays } from "date-fns";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
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
  // const [value1, setValue1] = useState(null);
  // const [value2, setValue2] = useState(null);
  // const [age, setAge] = useState("");
  const [category, setCategory] = useState("");
  const [primary, setPrimary] = useState("");
  const [queue, setQueue] = useState("");
  const [assigned, setAssigned] = useState("");
  const [channel, setChannel] = useState("");
  const [nature, setNature] = useState("");

  const [startdate, setStartdate] = useState(null);
  const [enddate, setEnddate] = useState(null);
  const [duration, setDuration] = useState("");
  const [diff, setdifferenceInDays] = useState("");

  const handleCategory = (event) => {
    setCategory(event.target.value);
  };
  const handlePrimary = (event) => {
    setPrimary(event.target.value);
  };
  const handleQueue = (event) => {
    setQueue(event.target.value);
  };
  const handleAssigned = (event) => {
    setAssigned(event.target.value);
  };
  const handlechannel = (event) => {
    setChannel(event.target.value);
  };
  const handlenature = (event) => {
    setNature(event.target.value);
  };

  // datedifference
  const handelStartDate = (e) => {
    setStartdate(e);
    if (enddate) {
      const diff = differenceInDays(new Date(enddate), new Date(e));
      setDuration(diff);
    }
  };
  const handelEndDate = (e) => {
    setEnddate(e);
    if (startdate) {
      const diff = differenceInDays(new Date(enddate), new Date(e));
      console.log("startdate", startdate.$D);
      let daysLeft = enddate - startdate;
      console.log("daysLeft", daysLeft);

      setDuration(diff);
    }
  };
  const [value1, setValue1] = useState(null);
  const [value2, setValue2] = useState(null);

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
                  value={category}
                  onChange={handleCategory}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="">
                    <em></em>
                  </MenuItem>
                  <MenuItem value={1}>Enquiry: Sick Leave</MenuItem>
                  <MenuItem value={2}>Enquiry: Annual Leave</MenuItem>
                  <MenuItem value={3}>Enquiry: Maternity Leave</MenuItem>
                  <MenuItem value={4}>ER Case: Grievance</MenuItem>
                  <MenuItem value={5}>ER Case: Capability</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="Primary">
              <label>Primary Point of Contact</label>

              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Select
                  value={primary}
                  onChange={handlePrimary}
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
            <div className="Case-status">Case Status</div>
          </div>
          <div className="col-2">
            <div className="Queue">
              <label>Queue</label>

              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Select
                  value={queue}
                  onChange={handleQueue}
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
                  value={assigned}
                  onChange={handleAssigned}
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
                  value={channel}
                  onChange={handlechannel}
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
            <div className="attachment">
              <p>Attachment</p>
              {/* <AddIcon className="add-icon">
              <input type="file" />
              </AddIcon> */}
              <Button variant="contained" component="label"  className="add-icon-1">
                <AddIcon className="add-icon-2"/>
                <input type="file" hidden />
              </Button>
            </div>
            <div className="service-type">Service Request Type</div>
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
                <label>Nature of Case</label>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                  <Select
                    value={nature}
                    onChange={handlenature}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem value="">
                      <em></em>
                    </MenuItem>
                    <MenuItem value={1}>Case1</MenuItem>
                    <MenuItem value={2}>Case2</MenuItem>
                    <MenuItem value={3}>Case3</MenuItem>
                    <MenuItem value={3}>Case4</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className="Suspension">
                <label>Suspension Date</label>
                {/* <input type="date" /> */}
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    value={value1}
                    onChange={(newValue) => {
                      setValue1(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </div>
              <div className="Return">
                <label>Suspension Return Date </label>
                {/* <input type="date" /> */}
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    value={value2}
                    onChange={(newValue) => {
                      newValue;
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
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
                    value={startdate}
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
                    value={enddate}
                    onChange={handelEndDate}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </div>
              <div className="Reportaing-stage">
                <label>Duration of Reportaing Stage (in days) {duration}</label>
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
