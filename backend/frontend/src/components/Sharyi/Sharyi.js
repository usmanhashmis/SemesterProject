import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  CircularProgress,
  Stack,
  Grid,
  Button,
  Pagination,
} from "@mui/material";
const Sharyi = () => {
  const [person, setPerson] = useState([]);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    axios.get("/shari").then((res) => {
      setLoading(false);
      setPerson(res.data);
      setTotal(res.data.total);
    });
  }, []);

  ///
  const deleteSh = (id) => {
    axios.delete(`http://localhost:3000/shari/de/${id}`).then((err) => {
      alert("Data Deleted");
      console.log(err);
    });
  };

  return (
    <div
      style={{ marginTop: "100px", marginLeft: "110px", marginRight: "110px" }}
    >
      <Grid lg={12} container spacing={2}>
        {person.map((curEle) => (
          <Grid
            item
            lg={6}
            spacing={10}
            style={{ background: "white", borderRadius: "30px" }}
          >
            <p
              style={{
                fontFamily: "Times New Roman",
                fontStyle: "italic",
                paddingBottom: " 0.1em",
              }}
            >
              {curEle.shar}
            </p>
            <p>{curEle.writer}</p>
            <Link align="left" variant="text" to={"/Sharyi/edit/" + curEle._id}>
              Edit
            </Link>
            <Button onClick={() => deleteSh(curEle._id)}>Delete</Button>
          </Grid>
        ))}
      </Grid>
      {loading && (
        <Stack
          sx={{ color: "grey.500", display: "flex", alignItems: "center" }}
          spacing={2}
          direction="row"
        >
          <CircularProgress color="warning" />
        </Stack>
      )}
      <Grid
        spacing={2}
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "30px",
          marginBottom: "30px",
        }}
      >
        <Pagination count={Math.ceil(total / 10)} color="secondary" />
        total:{""}
        {total}
      </Grid>
    </div>
  );
};
export default Sharyi;
