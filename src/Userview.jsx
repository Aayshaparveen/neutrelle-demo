import { TableBody, TableCell, TableRow } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";
const Userview = () => {
  const location = useLocation();
  console.log("uselocation", location.state);
  return (
    <>
      <div className="user-container">
        <h1>Posts</h1>
     
      <TableRow>
                <TableCell
                  sx={{
                    fontFamily: "Manrope",
                    fontWeight: "600",
                    fontSize: "16px",
                  }}
                >
                  Id
                </TableCell>
                <TableCell
                  sx={{
                    fontFamily: "Manrope",
                    fontWeight: "600",
                    fontSize: "16px",
                  }}
                >
                  User Id
                </TableCell>
                <TableCell
                  sx={{
                    fontFamily: "Manrope",
                    fontWeight: "600",
                    fontSize: "16px",
                  }}
                >
                  Title
                </TableCell>
                <TableCell
                  sx={{
                    fontFamily: "Manrope",
                    fontWeight: "600",
                    fontSize: "16px",
                  }}
                >
                  Body
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  sx={{
                    // fontFamily: "Manrope",
                    // fontWeight: "600",
                    fontSize: "16px",
                  }}
                >
                  {location.state.id}
                </TableCell>
                <TableCell
                  sx={{
                    // fontFamily: "Manrope",
                    // fontWeight: "600",
                    fontSize: "16px",
                  }}
                >
                  {location.state.userId}
                </TableCell>
                <TableCell
                  sx={{
                    // fontFamily: "Manrope",
                    // fontWeight: "600",
                    fontSize: "16px",
                  }}
                >
                  {location.state.title}
                </TableCell>
                <TableCell
                  sx={{
                    // fontFamily: "Manrope",
                    // fontWeight: "600",
                    fontSize: "16px",
                  }}
                >
                  {location.state.body}
                </TableCell>
              </TableRow>
              </div>
    </>
  );
};

export default Userview;
