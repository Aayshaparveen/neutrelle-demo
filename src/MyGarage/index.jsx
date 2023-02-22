import React from "react";
import "./style.css";
import "../pages/SignIn";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { FaCarSide } from "react-icons/fa";
import { CgBox } from "react-icons/cg";
import { RiFileListLine } from "react-icons/ri";
import { RiAccountBoxLine } from "react-icons/ri";
import { BiArrowFromRight } from "react-icons/bi";
import { Link } from "react-router-dom";
const MyGarage = () => {
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      "aria-controls": `vertical-tabpanel-${index}`,
    };
  }
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <div className="mygarage-container">
        <div className="Top-box">
          <div className="Heading-contant1">
            <span className="My-Garage">My Garage</span>
            <span className="Details-of-all-of-yo">
              Details of all of your impact and vehicles
            </span>
          </div>
          <div className="Heading-contant2">
            <div className="heading-box">
              <span className="Hey-good-morning">Hey, good morning</span>
              <span className="Eva-Lee">Eva Lee</span>
            </div>
            <div className="image-box">
              <img src="./image/small-img.PNG" />
            </div>
          </div>
        </div>
        <div className="Bottom-box">
          <div className="Tab">
            <Box
              // sx={{
              //   flexGrow: 1,
              //   bgcolor: "background.paper",
              //   display: "flex",
              //   height: 224,
              // }}
            >
              <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: "divider" }}
              >
                <div>
                  <FaCarSide className="car-icon" />
                  <Tab label="My Vehicles" {...a11yProps(0)} />
                </div>
                <div>
                  <CgBox className="car-icon" />
                  <Tab label="Order" {...a11yProps(1)} />
                </div>
                <div>
                  <RiFileListLine className="car-icon" />
                  <Tab label="Subscripitions" {...a11yProps(2)} />
                </div>
                <div>
                  <RiAccountBoxLine className="car-icon" />
                  <Tab label="Account" {...a11yProps(3)} />
                </div>
              </Tabs>
              {/* <TabPanel value={value} index={0}>
                Item One
              </TabPanel>
              <TabPanel value={value} index={1}>
                Item Two
              </TabPanel>
              <TabPanel value={value} index={2}>
                Item Three
              </TabPanel>
              <TabPanel value={value} index={3}>
                Item Four
              </TabPanel> */}
            </Box>
            <div className="Logout">
              <BiArrowFromRight className="right-arrow" />
              <p>
                <Link to="../pages/SignIn" className="Logout-txt">
                  Logout
                </Link>
              </p>
            </div>
          </div>
          <div className="right-tab">
            <div className="vehicles-box">
              <span class="My-Vehicles">My Vehicles</span>
            </div>
            <div className="vehicles-box1">
              <div className="first-box">
                <div className="vehicles-logo">
                  {/* <div className="color-box">
                  
                </div> */}
                  <img src="./image/mercedes_logos.png" />
                </div>
                <div className="deatils-box">
                  <span class="Mercedes-Benz">Mercedes-Benz</span>
                  <span class="-Petrol-A-Cl">2022 • Petrol • A-Class</span>
                </div>
                <div className="SB-box">
                  <span class="SB71-HJN">SB71 HJN</span>
                </div>
                <div className="num-box">
                  <span class="tCO2e">1.607 tCO2e</span>
                  <span class="Trees-Planted">12 Trees Planted</span>
                </div>
              </div>
              <hr />
              <div className="second-box">
                <div className="sb-col-1">
                  <span className="num">40,000</span>
                  <span class="Total-Mileage">Total Mileage</span>
                </div>
                <hr className="Hr-1" />
                <div className="sb-col-2">
                  <span className="num">4,500</span>
                  <span class="No-Impact">No Impact</span>
                </div>
                <hr className="Hr-2" />

                <div className="sb-col-3">
                  <span className="num">35,500</span>
                  <span class="Single-Impact">Single Impact</span>
                </div>
                <hr className="Hr-3" />

                <div className="sb-col-4">
                  <span className="num">35,500</span>
                  <span class="Double-Impact">Double Impact</span>
                </div>
                <hr className="Hr-4" />

                <div className="sb-col-5">
                  <span className="num">35,500</span>
                  <span class="Tripple-Impact">Tripple Impact</span>
                </div>
              </div>
            </div>
            <div className="vehicles-box2">
              <div className="first-box">
                <div className="vehicles-logo">
                  <img src="./image/mercedes_logos.png" />
                </div>
                <div className="deatils-box">
                  <span class="Mercedes-Benz">Mercedes-Benz</span>
                  <span class="-Petrol-A-Cl">2022 • Petrol • A-Class</span>
                </div>
                <div className="SB-box">
                  <span class="SB71-HJN">SB71 HJN</span>
                </div>
                <div className="num-box">
                  <span class="tCO2e">1.607 tCO2e</span>
                  <span class="Trees-Planted">12 Trees Planted</span>
                </div>
              </div>
              <hr />
              <div className="second-box">
                <div className="sb-col-1">
                  <span className="num">40,000</span>
                  <span class="Total-Mileage">Total Mileage</span>
                </div>
                <hr className="Hr-1" />
                <div className="sb-col-2">
                  <span className="num">4,500</span>
                  <span class="No-Impact">No Impact</span>
                </div>
                <hr className="Hr-2" />

                <div className="sb-col-3">
                  <span className="num">35,500</span>
                  <span class="Single-Impact">Single Impact</span>
                </div>
                <hr className="Hr-3" />

                <div className="sb-col-4">
                  <span className="num">35,500</span>
                  <span class="Double-Impact">Double Impact</span>
                </div>
                <hr className="Hr-4" />

                <div className="sb-col-5">
                  <span className="num">35,500</span>
                  <span class="Tripple-Impact">Tripple Impact</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyGarage;
