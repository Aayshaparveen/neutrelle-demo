import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "./CustomButton";
import "./Temstyle.css";
import Carousel from "react-simply-carousel";
const images = [
  "../image/Blog(1).png",
  "../image/Blog(2).png",
  "../image/Blog(3).png",
  "../image/Blog(4).png",
  "../image/Blog(1).png",
  "../image/Blog(2).png",
  "../image/Blog(3).png",
  "../image/Blog(4).png",
];
const Tem = () => {
  const [userId, setUserId] = useState("");
  const [title, setTitle] = useState("");
  const [tableData, setTableData] = useState([]);
  const [body, setBody] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [id, setId] = useState(null);

  const navigate1 = useNavigate();
  const handleChangePage = (_event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const getPostById = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        setId(response.data.id);
        setUserId(response.data.userId);
        setTitle(response.data.title);
        setBody(response.data.body);
      });
  };
  const getAllPostById = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      console.log("Response:AllPostsById = ", response.data);
      setTableData(response.data);
    });
  };
  useEffect(() => {
    getPostById();
    getAllPostById();
  }, []);
  const handleSubmit = () => {
    navigate1("/user-data");
  };

  const navigate2 = useNavigate();
  const handleView = (row) => {
    navigate2("/Userview", { state: row });
  };

  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div className="Data-container">
      <h1>All Posts</h1>
      <CustomButton title="Next" onSubmit={handleSubmit} />
      <div className="user-details">
        <TableContainer sx={{ maxHeight: 500, fontFamily: "Poppins" }}>
          <Table stickyHeader aria-label="simple table">
            <TableHead>
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
            </TableHead>
            <TableBody>
              {tableData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <TableRow key={row.id}>
                    <TableCell
                      sx={{
                        fontFamily: "Poppins",
                        color: "#1078B4",
                        fontWeight: "600",
                        cursor: "pointer",
                      }}
                      onClick={() => handleView(row)}
                    >
                      {row.id}
                    </TableCell>
                    <TableCell
                      sx={{
                        fontFamily: "Poppins",
                      }}
                    >
                      {row.userId}
                    </TableCell>
                    <TableCell
                      sx={{
                        fontFamily: "Poppins",
                      }}
                    >
                      {row.title}
                    </TableCell>
                    <TableCell
                      sx={{
                        fontFamily: "Poppins",
                      }}
                    >
                      {row.body}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={tableData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
      {/* <div>
      <Carousel
        autoplay={true}
        updateOnItemClick
        containerProps={{}}
        activeSlideIndex={activeSlide}
        activeSlideProps={{}}
        onRequestChange={setActiveSlide}
        forwardBtnProps={{
          style: {
            width: 0,
            height: 0,
            minWidth: 0,
            display: "none",
            alignSelf: "center"
          }
        }}
        backwardBtnProps={{
          style: {
            width: 0,
            height: 0,
            minWidth: 0,
            display: "none",
            alignSelf: "center"
          }
        }}
        itemsToShow={2}
        speed={2800}
      >
        {images.map((item, index) => (
          <div
            style={{
              // backgroundImage: `url(${item})`,
              width: 300,
              border: "30px solid white",
              height: 300,
              textAlign: "center",
              lineHeight: "240px",
              boxSizing: "border-box"
            }}
            key={index}
          >
            <img src={item} className="carouselCustomDesign" />
          </div>
        ))}
      </Carousel>
    </div> */}
    </div>
  );
};

export default Tem;
