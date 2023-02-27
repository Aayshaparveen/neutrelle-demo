import React, { useState } from "react";
import "./style.css";
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
import Dropzone from "../Dropzone";
import OutlinedInput from "@mui/material/OutlinedInput";
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
        border: "1px solid black",
        borderRadius: "1px 15px",
      },
    },
  });
  const [category, setCategory] = useState("");
  const [primary, setPrimary] = useState("");
  const [queue, setQueue] = useState("");
  const [assigned, setAssigned] = useState("");
  const [channel, setChannel] = useState("");
  const [nature, setNature] = useState("");
  const [characteristics, setCharacteristics] = useState("");
  const [respondent, setRespondent] = useState("");
  const [reported, setReported] = useState("");
  const [complainanat, setComplainanat] = useState("");
  const [manager, setManager] = useState("");
  const [informal, setInformal] = useState("");

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
  const handlecharacteristics = (event) => {
    setCharacteristics(event.target.value);
  };
  const handlerespondent = (event) => {
    setRespondent(event.target.value);
  };
  const handlereported = (event) => {
    setReported(event.target.value);
  };
  const handlecomplainanat = (event) => {
    setComplainanat(event.target.value);
  };
  const handlemanager = (event) => {
    setManager(event.target.value);
  };
  const handleinformal = (event) => {
    setInformal(event.target.value);
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
                <FormControl sx={{ width: "29ch" }}>
                  <OutlinedInput />
                </FormControl>
              </label>
            </div>
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
              <Dropzone />
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
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    value={value2}
                    onChange={(newValue) => {
                      setValue2(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </div>
              <div className="Characteristics">
                <label>
                  Profected Characteristics
                  <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <Select
                      value={characteristics}
                      onChange={handlecharacteristics}
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                    >
                      <MenuItem value="">
                        <em></em>
                      </MenuItem>
                      <MenuItem value={1}>Characteristics1</MenuItem>
                      <MenuItem value={2}>Characteristics2</MenuItem>
                      <MenuItem value={3}>Characteristics3</MenuItem>
                      <MenuItem value={3}>Characteristics4</MenuItem>
                    </Select>
                  </FormControl>
                </label>
              </div>
              <div className="Respondent">
                <label>
                  Respondent
                  <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <Select
                      value={respondent}
                      onChange={handlerespondent}
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                    >
                      <MenuItem value="">
                        <em></em>
                      </MenuItem>
                      <MenuItem value={1}>Respondent1</MenuItem>
                      <MenuItem value={2}>Respondent2</MenuItem>
                      <MenuItem value={3}>Respondent3</MenuItem>
                      <MenuItem value={3}>Respondent4</MenuItem>
                    </Select>
                  </FormControl>
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
                  <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <Select
                      value={reported}
                      onChange={handlereported}
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
                </label>
              </div>
              <div className="Complainanat">
                <label>Complainant Name</label>
                <FormControl sx={{ width: "29ch" }}>
                  <OutlinedInput />
                </FormControl>
              </div>

              <div className="Complainanat-Category">
                <label>
                  Complainanat Category
                  <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <Select
                      value={complainanat}
                      onChange={handlecomplainanat}
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
                </label>
              </div>
              <div className="Manager">
                <label>
                  HR Case Manager
                  <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <Select
                      value={manager}
                      onChange={handlemanager}
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
                </label>
              </div>
              <div className="Informal">
                <label>
                  Informal Case Action
                  <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <Select
                      value={informal}
                      onChange={handleinformal}
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
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="description-field">
          <TextField fullWidth label="Detailed Description" id="fullWidth" />
        </div>
      </div>
    </>
  );
};

export default Service;
