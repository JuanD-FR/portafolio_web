import { Button, Paper, Radio, TextField, Typography, makeStyles } from '@material-ui/core';
import React from 'react'
import { useState } from 'react';


const Contact = ({ title, id, dark }) => {
    const classes = useStyles();
    const [value, setValue] = useState("Hi");
    const handleChange = (e) => { 
      setValue(e.target.value)
    };

  return (
    <div className={ `${classes.section} ${ dark && classes.sectiondark }` }>
      <div className={ classes.sectioncontent } id={ id }>
        <Typography variant="h3" className={ classes.titulo }>{ title }</Typography>
        <Paper className={ classes.root }>
          <div className={ classes.titleandchoices }>
            <Typography variant="h5">
              CONTACT ME
            </Typography>
            <div className={ classes.choices }>
              <span>
                Hi
              </span>
              <Radio 
                className={ classes.radiobutton }
                color= "primary"
                value="Hi"
                checked={ value === "Hi"}
                onChange={handleChange}
              />
              <span>
                Get a quote
              </span>
              <Radio 
                className={ classes.radiobutton }
                color= "primary"
                value="Get a quote"
                checked={ value === "Get a quote"}
                onChange={handleChange}
              />
            </div>
          </div>
          <form className={ classes.form } noValidate autoComplete="off">
            <TextField label="Your name"/>
            <TextField label="Your e-mail"/>
            {
              value === "Get a quote" ? (
                <>
                  <TextField label="Needed services"/>
                  <TextField label="Estimated budget"/>
                </>
              ) : null
            }
            <TextField label="Message"/>
          </form>
          <Button variant="contained" className={ classes.button }>
            Submit
          </Button>
        </Paper>
      </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
    section: {
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
    },
    sectiondark: {
      background: "#000023",
      color: "white",
      fontFamily: "monospace",
    },
    root: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
      marginLeft: theme.spacing(50),
      marginRight: theme.spacing(50),
      border: "3px solid white",
      background: "#00665f",
      color: "#fff",
      fontSize: "1.2rem",
      maxWidth: "500px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: theme.spacing(4),
      "& button": {
        backgroundColor: "#000023",
        color: "white",
        border: "2px solid white",
        fontWeight: 900,
        fontSize: "1.2rem",
        marginTop: theme.spacing(4),
      },
      "& button:hover": {
        backgroundColor: "#313591",
        color: "#fff",
      }
    },
    sectioncontent: {
      color: "white",
        "& h3": {
          marginTop: theme.spacing(6),
            [theme.breakpoints.down("sm")]: {
                display: "none",
            },
        },
        fontFamily: "monospace",
        paddingLeft: theme.spacing(3),
    },
    titleandchoices: {
      "& h5": {
        marginTop: theme.spacing(4),
      }
    },
    form: {
      display: "flex",
      flexDirection: "column",
      color: "white",
      "& input": {
        marginBottom: theme.spacing(1),
        color: "black",
      }
    },
    titulo: {
      color: "white",
        textShadow: "0px 0px 8px #5E45E8",
        textAlign: "left",
        "& h3": {
          marginTop: theme.spacing(6),
            [theme.breakpoints.down("sm")]: {
                display: "none",
            },
        },
        fontFamily: "monospace",
        marginLeft: theme.spacing(5),
    },
    radiobutton: {
      color: "white"
    }
  }))

export default Contact