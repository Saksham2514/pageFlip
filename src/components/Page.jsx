import { Grid, Typography } from "@mui/material";
import React from "react";
import "./Page.css";

const Page = (props) => {
  return (
    <Grid
      container
      id="pageContainer"
      style={{
        
      }}
      spacing={5}
    >
      <Grid
        item
        xs={6}
        style={{
          position:"relative",
          alignItems:"center" 
        }}

      >

        <img src={props.image} alt="" id="pageImg" />
      </Grid>
      <Grid item xs={6} >
        <Typography style={{ textAlign: "center"}} variant="title">
          {props.title}
        </Typography>
        <div
          style={{
            padding: "1rem",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography variant="h6">{props.children}</Typography>
        </div>
      </Grid>
    </Grid>
  );
};

export default Page;
