import React from "react";
import "./style.css";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { FaCarSide } from "react-icons/fa";

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
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              sx={{ borderRight: 1, borderColor: "divider" }}
            >
                <div>

              <FaCarSide />
              <Tab label="My Vehicles" {...a11yProps(0)} />
                </div>
              <Tab label="Order" {...a11yProps(1)} />
              <Tab label="Subscripitions" {...a11yProps(2)} />
              <Tab label="Account" {...a11yProps(3)} />
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
          </div>
        </div>
      </div>
    </>
  );
};

export default MyGarage;
