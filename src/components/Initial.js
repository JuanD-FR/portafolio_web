import { Button, Card, CardActions, CardContent, CardMedia, List, ListItem, Typography, makeStyles } from '@material-ui/core';
import React from 'react'
import TypeWriterEffect from 'react-typewriter-effect'
import pdf from '../imagenes/CVjdf.pdf'
import fondo from '../imagenes/fondo.PNG'
import "../App.css"

const Initial = ({ title, id, dark }) => {

    const classes = useStyles();       
    return (
        <>
            <div className={ `${classes.section} ${ dark && classes.sectiondark }` }>
                <div className={classes.backgroundImage} style={{ backgroundImage: `url(${fondo})` }}>                 
                    <Card className={ classes.card1 }> 
                        <CardContent className={ classes.cardcontent }>
                            <div className={ classes.divcontent1 }>
                                <TypeWriterEffect 
                                    text="Hi, I'm Juan David"
                                    textStyle= { {fontSize: "3rem", fontWeight: "700px", color: "white", fontFamily: "Monospace"} }
                                    startDelay={ 100 }
                                    cursorColor="black"
                                    typeSpeed={ 50 }
                                />
                                <TypeWriterEffect                             
                                    text="Front End Developer..."
                                    textStyle= { {fontSize: "3rem", fontWeight: "500px", color:"white", fontFamily: "Monospace"} }
                                    startDelay={ 1200 }
                                    cursorColor="black"
                                    typeSpeed={ 50 }
                                />
                            </div>    
                        </CardContent>  
                        <CardActions>
                            <Button variant="contained" className={ classes.pdfbutton}>
                                <a href={ pdf } download>
                                    Download CV
                                </a>
                            </Button>
                        </CardActions>
                    </Card>  
                </div>     
            </div>
        </>    
  )
}

const useStyles = makeStyles((theme) => ({
    section: {
        minHeight: "100vh",
        width: "auto", 
    },
    sectiondark: {
        background: "black",
    },
    card1: {
        height: "90vh",
        display: "flex",
        position: "relative",
        backgroundColor: "transparent",
    },
    cardcontent: {
        marginTop: theme.spacing(10),
        marginRight: theme.spacing(2),
        paddingBottom: theme.spacing(10),
    },   
    divcontent1: {
        marginLeft: theme.spacing(55),
        marginTop: theme.spacing(5),
        backgroundColor: "transparent",
        textShadow: "0px 0px 8px #5E45E8",
        [theme.breakpoints.down("lg")]: {
            padding: theme.spacing(10),
            marginLeft: theme.spacing(45),
        },
        [theme.breakpoints.down("md")]: {
            padding: theme.spacing(10),
            marginLeft: theme.spacing(20),
        },
        [theme.breakpoints.down("sm")]: {
            padding: theme.spacing(10),
            marginLeft: theme.spacing(5),
        },
    },
    pdfbutton: {
        position: "absolute",
        bottom: "2rem",
        right: "4rem",
        border: "2px solid white",
        backgroundColor: "#000023",
        padding: theme.spacing(1,3,1,3),
        "&:hover": {
            backgroundColor: "#446eff",
        },
        "& a": {
            color: "#fff",
            textDecoration: "none",
            fontWeight: 900,
        },
        "& a:hover": {
            color: "#fff"
        },
        [theme.breakpoints.down("md")]: {
            bottom: "2rem",
            right: "4rem",
        },
        [theme.breakpoints.down("sm")]: {
            bottom: "2rem",
            right: "4rem",
        },
        
    },
    backgroundImage: {
        width: "auto"
    }
  }))

export default Initial