import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { FaCarSide } from "react-icons/fa";
import { CgBox } from "react-icons/cg";
import { RiFileListLine } from "react-icons/ri";
import { RiAccountBoxLine } from "react-icons/ri";
import { BiArrowFromRight } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
function scrollWin() {
  window.scrollTo(200, 0);
}
function TabPanel(props) {
  const { children, value, index, name, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
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

export default function VerticalTabs() {
  const location = useLocation();
  console.log("uselocation", location.state);

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: 727,
        borderRadius: "0px 35px",
      }}
    >
      <div className="Left-div">
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{
            borderRight: 1,
            borderColor: "divider",
            paddingTop: "25px",
            width: "15vw",
          }}
        >
          <Tab icon={<FaCarSide />} label="My Vehicles" {...a11yProps(0)} />
          <Tab icon={<CgBox />} label="Order" {...a11yProps(1)} />
          <Tab
            icon={<RiFileListLine />}
            label="Subscripitions"
            {...a11yProps(2)}
          />
          <Tab icon={<RiAccountBoxLine />} label="Account" {...a11yProps(3)} />
        </Tabs>
        <div className="Logout">
          <BiArrowFromRight className="right-arrow" />

          <Link to="../pages/SignIn" className="Logout-txt"onclick="scrollWin()">
            Logout
          </Link>
        </div>
      </div>
      <TabPanel value={value} index={0}>
        <div className="right-tab">
          <div className="vehicles-box">
            <span className="My-Vehicles">My Vehicles</span>
          </div>
          <div className="vehicles-box1">
            <div className="first-box">
              <div className="vehicles-logo">
                <img src="./image/mercedes_logos.png" />
              </div>
              <div className="deatils-box">
                <span className="Mercedes-Benz"> {location.state.value}</span>
                <span className="-Petrol-A-Cl">{location.state.name}</span>
              </div>
              <div className="SB-box">
                <span className="SB71-HJN">{location.state.num}</span>
              </div>
              <div className="num-box">
                <span className="tCO2e">1.607 tCO2e</span>
                <span className="Trees-Planted">12 Trees Planted</span>
              </div>
            </div>
            <hr />
            <div className="second-box">
              <div className="sb-col-1">
                <span className="Total-Mileage">Total Mileage</span>
                <span className="num"> {location.state.id} </span>
              </div>
              <hr className="Hr-1" />

              <div className="sb-col-2">
                <span className="num"></span>
                <span className="Single-Impact">Single Impact</span>
              </div>
              <hr className="Hr-2" />

              <div className="sb-col-3">
                <span className="num"></span>
                <span className="Double-Impact">Double Impact</span>
              </div>
              <hr className="Hr-3" />
              <div className="sb-col-4">
                <span className="num"></span>
                <span className="Tripple-Impact">Tripple Impact</span>
              </div>
            </div>
          </div>
        
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Order
      </TabPanel>
      <TabPanel value={value} index={2}>
        Subscripitions
      </TabPanel>
      <TabPanel value={value} index={3}>
        Account
      </TabPanel>
    </Box>
  );
}
