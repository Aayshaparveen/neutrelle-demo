import React from "react";
import "./style.css";
import TextField from "@mui/material/TextField";
import styled from "@emotion/styled";
import InputLabel from "@mui/material/InputLabel";
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
          <div className="car-deatils">
            <div>
              {/* <Button sx={{ display: 'block', mt: 2 }} onClick={handleOpen}>
        Open the select
      </Button> */}
              <FormControl sx={{ m: 1, minWidth: 120, color: "gray" }}>
                <InputLabel id="demo-controlled-open-select-label">
                  Make
                </InputLabel>
                <Select
                  labelId="demo-controlled-open-select-label"
                  id="demo-controlled-open-select"
                  open={open}
                  onClose={handleClose}
                  onOpen={handleOpen}
                  value={age}
                  label="Age"
                  placeholder="Select One"
                  onChange={handleChange}
                >
                  {/* <MenuItem value="">
            <em>None</em>
          </MenuItem> */}
                  {/* <MenuItem value={10}>aaysha</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem> */}
                  <MenuItem> Abarth</MenuItem>
                    <MenuItem>AC</MenuItem>
                    <MenuItem>Acura</MenuItem>
                    <MenuItem>Alfa Romeo</MenuItem>
                    <MenuItem>Alpine</MenuItem>
                    <MenuItem>Ariel</MenuItem>
                    <MenuItem>Aston Martin</MenuItem>
                    <MenuItem>Audi</MenuItem>
                    <MenuItem>BAC</MenuItem>
                   <MenuItem> Bentley</MenuItem>
                    <MenuItem>BMW</MenuItem>
                    <MenuItem>BRABUS</MenuItem>
                    <MenuItem>Bugatti</MenuItem>  
                    <MenuItem>Buick</MenuItem>
                    <MenuItem>CUPRA</MenuItem>
                   <MenuItem> Cadillac</MenuItem>
                    <MenuItem>Caterham</MenuItem>
                    <MenuItem>Corvette</MenuItem>
                    <MenuItem>Chevrolet</MenuItem>
                    <MenuItem>Chrysler</MenuItem>
                   <MenuItem> Citroen</MenuItem>
                   <MenuItem> Dacia</MenuItem>
                    <MenuItem>Dodge</MenuItem>
                    <MenuItem>DS</MenuItem>
                    <MenuItem>Ferrari</MenuItem>
                    <MenuItem>Fiat</MenuItem>
                    <MenuItem>Fisker</MenuItem>
                    <MenuItem>Ford</MenuItem>
                    <MenuItem>Ginetta</MenuItem>
                    <MenuItem>GMC</MenuItem>
                    <MenuItem>Holden</MenuItem>
                    <MenuItem>Honda</MenuItem>
                    <MenuItem>Hyundai</MenuItem>
                    <MenuItem>Infiniti</MenuItem>
                    <MenuItem>Isuzu</MenuItem>
                    <MenuItem>Jaguar</MenuItem>
                    <MenuItem>Jeep</MenuItem>
                    <MenuItem>Kia</MenuItem>
                    <MenuItem>Koenigsegg</MenuItem>
                    <MenuItem>Lamborghini</MenuItem>
                    <MenuItem>Lancia</MenuItem>
                    <MenuItem>Land Rover</MenuItem>
                    <MenuItem>Lexus</MenuItem>
                    <MenuItem>Leyland</MenuItem>
                    <MenuItem>Lincoln</MenuItem>
                    <MenuItem>Lotus</MenuItem>
                   <MenuItem> Maserati</MenuItem>
                    <MenuItem>Maybach</MenuItem>
                    <MenuItem>Mazda</MenuItem>
                    <MenuItem>McLaren</MenuItem>
                    <MenuItem>Mercedes-Benz</MenuItem>
                   <MenuItem> MG</MenuItem>
                    <MenuItem>Mini</MenuItem>
                    <MenuItem>Mitsubishi</MenuItem>
                   <MenuItem> Morgan</MenuItem>
                   <MenuItem> Nissan</MenuItem>
                   <MenuItem> Noble</MenuItem>
                   <MenuItem> Opel</MenuItem>
                   <MenuItem> Pagani</MenuItem>
                   <MenuItem> Peugeot</MenuItem>
                   <MenuItem> Polestar</MenuItem>
                   <MenuItem> Pontiac</MenuItem>
                   <MenuItem> Porsche</MenuItem>
                   <MenuItem> Renault</MenuItem>
                   <MenuItem> Rimac</MenuItem>
                   <MenuItem> Rivian</MenuItem>
                   <MenuItem> ROVER</MenuItem>
                   <MenuItem> Rolls Royce</MenuItem>
                   <MenuItem> RUF</MenuItem>
                   <MenuItem> Saab</MenuItem>
                    <MenuItem>SEAT</MenuItem>
                   <MenuItem> Skoda</MenuItem>
                    <MenuItem>Smart</MenuItem>
                    <MenuItem>Ssangyong</MenuItem>
                    <MenuItem>Subaru</MenuItem>
                    <MenuItem>Suzuki</MenuItem>
                    <MenuItem>Tata</MenuItem>
                    <MenuItem>Tesla</MenuItem>
                    <MenuItem>Toyota</MenuItem>
                    <MenuItem>Triumph</MenuItem>
                    <MenuItem>TVR</MenuItem>
                    <MenuItem>Vauxhall</MenuItem>
                   <MenuItem> Volvo</MenuItem>
                   <MenuItem> Volkswagen</MenuItem>
                   <MenuItem> Zenvo</MenuItem>
                  
                </Select>
              </FormControl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// export default Registration;
