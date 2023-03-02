import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useState } from "react";

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
  const [impactlevel, setImpactlevel] = useState(1);
  const handelImpactlevel = (event) => {
    setImpactlevel(event.target.value);
    // console.log(event.target.value);
  };
  return (
    <Box>
      <Slider
        style={
          impactlevel == 1
            ? { color: "rgb(88, 218, 113)" }
            : impactlevel == 2
            ? { color: "rgb(51, 197, 255)" }
            : { color: "rgb(97, 66, 234)" }
        }
        
        onChange={handelImpactlevel}
        aria-label="Custom marks"
        max={3}
        min={1}
        marks={marks}
      />
    </Box>
  );
}
