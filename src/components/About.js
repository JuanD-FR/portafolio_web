import { Card, CardContent, CardMedia, List, ListItem, Typography, makeStyles } from '@material-ui/core';
import React from 'react'
import "../App.css"
import { Helmet } from 'react-helmet';


const About = ({ title, id, dark }) => {
    const classes = useStyles(); 
    return (
        <>
            <div className={ `${classes.section} ${ dark && classes.sectiondark }` }>
                    <Card className={ classes.card }>
                        <CardContent className={ classes.cardcontent1 }>
                            <div className={ classes.titulodiv }>
                            <Typography variant="h3" className={ classes.titulo } id={ id }>{ title }</Typography>
                            </div>
                            <div className={ classes.divcontent }>
                                <Typography variant="h6">  
                                    <List>
                                        <ListItem className={ classes.letras }>
                                            - Outstanding both in individual and team work.
                                        </ListItem>
                                        <ListItem className={ classes.letras }>
                                            - Always open suggestions in order to improve my results.
                                        </ListItem>
                                        <ListItem className={ classes.letras }>
                                            - Itermediate english level.
                                        </ListItem>
                                        <ListItem className={ classes.letras }>
                                            - Since 2021, studying and learning programming for web development.
                                        </ListItem>
                                        <ListItem className={ classes.letras }>
                                            - Basic/intermediate knowledge in HTML, CSS, JavaScript.
                                        </ListItem>
                                        <ListItem className={ classes.letras }>
                                            - Basic knowledge in GitHub, Python and ReactJS.
                                        </ListItem>
                                        <ListItem className={ classes.letras }>
                                            - At the moment, still learning ReactJS. 
                                        </ListItem>
                                        <ListItem className={ classes.letras }>
                                            - Next courses: React Native, Java, as well as back end technologies.
                                        </ListItem>
                                    </List>                                                                      
                                </Typography>
                            </div> 
                        </CardContent>
                    </Card>        
            </div>
            <Helmet>
                <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+Makasar&display=swap" rel="stylesheet"/>
            </Helmet>
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
    card: {
        height: "90vh",
        display: "flex",
        position: "relative",
        backgroundColor: "transparent",
    },
    cardcontent1: {
        marginTop: theme.spacing(5),
        marginRight: theme.spacing(2),
        paddingBottom: theme.spacing(2),
    },
    titulodiv: {
        alignContent: "center"
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
    divcontent: {
        marginTop: theme.spacing(0),
        background: "black",
        position: "relative",
        color: "white",
        textShadow: "0px 0px 8px #5E45E8",
        [theme.breakpoints.down("xl")]: {
            marginLeft: theme.spacing(40),
            marginRight: theme.spacing(50),
        },
        [theme.breakpoints.down("lg")]: {
            marginLeft: theme.spacing(40),
            marginRight: theme.spacing(40),
        },
        [theme.breakpoints.down("md")]: {
            marginLeft: theme.spacing(10),
            marginRight: theme.spacing(10),
        },
        [theme.breakpoints.down("sm")]: {
            marginLeft: theme.spacing(3),
            marginRight: theme.spacing(0),
            maxWidth: "100%",
        },
    },
    letras: {
        [theme.breakpoints.down("sm")]: {
            fontSize: "1rem"
        },
    }
  }))

export default About