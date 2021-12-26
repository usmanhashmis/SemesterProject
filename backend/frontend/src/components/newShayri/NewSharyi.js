import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router";
import { TextField, Button, Box } from "@mui/material";
import Sharyi from "../Sharyi/Sharyi";

const NewSharyi = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(id);
  const edit = id ? true : false;

  const [Shayari, setShayari] = useState({
    shar: "",
    writer: "",
  });

  const { shar, writer } = Shayari;
  React.useEffect(() => {
    if (edit) {
      axios
        .get("/shari/" + id)

        .then((res) => {
          setShayari(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  return (
    <div>
      <h1 style={{ color: "black", marginTop: "60px", marginLeft: "60px" }}>
        {props.heading}
      </h1>
      <div className=" mt-3 container">
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "50ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Shar"
            variant="outlined"
            value={shar ? shar : ""}
            row={8}
            onChange={(e) => {
              setShayari({ ...Shayari, shar: e.target.value });
            }}
            placeholder="Enter Shayari"
          />
          <TextField
            id="outlined-basic"
            label="Your Name"
            value={writer ? writer : ""}
            onChange={(e) => {
              setShayari({ ...Shayari, writer: e.target.value });
            }}
            placeholder="Enter Author"
          />
        </Box>
        <Button
          variant="contained"
          onClick={() => {
            if (!edit) {
              axios.post("/shari", Shayari).then((res) => {
                console.log(res.data);
                navigate("/Sharyi");
              });
            } else {
              axios
                .put("/shari/" + id, Shayari)
                .then((res) => {
                  console.log("data has been edited " + res.data.Shari);
                  navigate("/Sharyi");
                })
                .catch((err) => {
                  console.log(err);
                });
              navigate("/Sharyi");
            }
          }}
        >
          {edit ? "Edit" : "Submit Data"}
        </Button>
      </div>
    </div>
  );
};
export default NewSharyi;
