import { Card, CardContent, Typography, makeStyles } from '@material-ui/core'
import React from 'react'
import Technologies from './Technologies';


const Skills = ({ title, id, dark }) => {
const classes = useStyles();
  return (
    <div className={ `${classes.section} ${ dark && classes.sectiondark }` }>
      <div className={ classes.sectioncontent } id={ id }>
        <Card className={classes.card }>
          <Typography variant="h3" className={ classes.letra }>{ title }</Typography>
          <Technologies />
        </Card>
      </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
    section: {
        minHeight: "100vh",
        width: "auto",   
    },
    sectiondark: {
        background: "#131b63",
        color: "white",
        fontFamily: "monospace",  
    },
  letra: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "left",
    color: "white",
    textShadow: "0px 0px 8px #5E45E8",
    backgroundColor: "#131b63",
    fontFamily: "monospace",
    paddingLeft: theme.spacing(7),
    paddingTop: theme.spacing(7),
    "& h3":{
        [theme.breakpoints.down("md")]: {
            fontSize: "2.5rem"
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: "1.5rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        },
    }
},
  }))

export default Skills