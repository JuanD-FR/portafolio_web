import React from 'react';
import RainStream from './RainStream';
import { makeStyles } from '@material-ui/core';

const MatrixRain = () => {
  const classes = useStyles();

  return (
    <div className={classes.matrixrain}>
      <RainStream />
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  matrixrain: {
    position: "absolute",
    overflow: "hidden",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    background: "transparent",
    display: "flex", 
    justifyContent: "center", 
    alignItems: "center", 
    zIndex: 1000,
  },
}));

export default MatrixRain;
