import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const marks = [
  {
    value: 1,
    label: "Single",
  },
  {
    value: 2,
    label: "Double",
  },
  {
    value: 3,
    label: "Tripple",
  },
];

export default function DiscreteSliderMarks() {
  return (
    <Box>
      <Slider
       sx={{ 
             
        }}
      className="slider"
        aria-label="Custom marks"
        // defaultValue={20}
        // getAriaValueText={valuetext}
        // step={20}
        // valueLabelDisplay="auto"
        max={3}
        min={1}
        marks={marks}
      />
    </Box>
  );
}
