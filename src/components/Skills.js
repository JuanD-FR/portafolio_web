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
        color: "white",
        textShadow: "0px 0px 8px #5E45E8",
        fontFamily: "monospace", 
        backgroundColor: "#131b63",
        paddingLeft: theme.spacing(13),
        paddingTop: theme.spacing(9),
  },
  }))

export default Skills