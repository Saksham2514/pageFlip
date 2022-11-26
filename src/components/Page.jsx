import { Grid, Typography } from "@mui/material";
import React from "react";
import "./Page.css";

const Page = (props) => {
  
  return (
    <Grid container id="pageContainer">
      <Grid
        item
        xs={6}
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={props.image} alt="" id="pageImg" />
      </Grid>
      <Grid item xs={6} sx={{ paddingLeft: "1rem" }}>
        <Grid container>
          <Grid item xs={12} sx={{padding:"1rem"}}>
            <Typography style={{ textAlign: "center" }} variant="h4">
              {props.title}
            </Typography>
          </Grid>
          <Grid item xs={12}>
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
      <Typography variant="h6" textAlign="center">Swipe to next page ------></Typography>
      
      </Grid>
    </Grid>
  );
};

export default Page;
