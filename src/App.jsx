import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";

import birthday from "./static/images/birthday.jpeg";
import birthday2 from "./static/images/birthday2.jpeg";
import heart from "./static/images/heart.jpg";

const useStyles = makeStyles((theme) => ({
  image: {
    width: 500,
    height: 350,
    borderRadius: ".5rem",
    transition: "all 0.3s",
    "&:hover": {
      transform: "translateY(-1rem)"
    }
  },
  title: {
    fontSize: 46,
    textAlign: "center",
    color: "#E486A2"
  },
  text: {
    fontSize: 32,
    textAlign: "center",
    color: "#F9B1ED"
  }
}));

const App = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid
        style={{ height: 500 }}
        container
        justify="center"
        alignItems="center"
      >
        <Grid item>
          <img src={birthday} className={classes.image} alt="" />
        </Grid>
        <Grid xs={2}></Grid>
        <Grid item xs={3}>
          <div className={classes.title} style={{ marginBottom: "1rem" }}>
            Happy Birthday Baby
          </div>
          <div className={classes.text}>
            There is nothing more I want for you on this special day than for
            you to be the happiest. Your joy is my joy. Happiest birthday to the
            love of my life.
          </div>
        </Grid>
      </Grid>
      <Grid
        style={{ height: 500 }}
        container
        justify="center"
        alignItems="center"
      >
        <Grid item xs={3}>
          <div className={classes.text} style={{ color: "#8C7ADC" }}>
            You make every morning colorful, every night passionate, and ever
            day worth remembering. I love you!
          </div>
        </Grid>
        <Grid xs={2}></Grid>
        <Grid item>
          <img src={birthday2} className={classes.image} alt="" />
        </Grid>
      </Grid>
      <Grid
        style={{ height: 500 }}
        container
        justify="center"
        alignItems="center"
      >
        <Grid item>
          <img src={heart} className={classes.image} alt="" />
        </Grid>
        <Grid xs={2}></Grid>
        <Grid item xs={3}>
          <div className={classes.text} style={{ color: "#F94587" }}>
            No matter what happen I will always be with you my black pig ka lay
            xD
          </div>
        </Grid>
      </Grid>
      <Grid
        style={{ height: 500 }}
        container
        justify="center"
        alignItems="center"
      >
        <Grid item xs={3}>
          <div className={classes.title} style={{ color: "black" }}>
            RBwar RBwar RBwar very very very big love u from your ko ko!
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
