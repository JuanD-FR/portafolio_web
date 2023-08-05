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
                                    startDelay={ 100 }
                                    cursorColor="black"
                                    typeSpeed={ 50 }
                                />
                                <TypeWriterEffect                             
                                    text="Front End Developer"
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
        Height: "100%",
        width: "auto", 
    },
    sectiondark: {
        background: "black",
    },
    card1: {
        height: "90vh",
        display: "flex",
        justifyContent: "center",
        position: "relative",
        backgroundColor: "transparent",
    },
    cardcontent: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },   
    divcontent1: {
        backgroundColor: "transparent",
        textShadow: "0px 0px 8px #5E45E8",
        fontSize: "1.5rem",
        color: "white",
        fontFamily: "monospace",
        [theme.breakpoints.down("md")]: {
            fontSize: "1.2rem", 
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: "0.8rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
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
    },
    backgroundImage: {
        width: "auto"
    }
  }))

export default Initial