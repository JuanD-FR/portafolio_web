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
                            <div className={ classes.titulo }>
                                <Typography variant="h3"  id={ id }>{ title }</Typography>
                            </div>   
                            <div className={ classes.divcontent }>
                                <Typography variant="h6">  
                                    <List>
                                        <ListItem className={ classes.letras }>
                                            - Outstanding both in individual and team work.
                                        </ListItem>
                                        <ListItem className={ classes.letras }>
                                            - Always open to suggestions in order to improve my results.
                                        </ListItem>
                                        <ListItem className={ classes.letras }>
                                            - English (B2)
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
        height: "100vh",
        position: "relative",
        backgroundColor: "transparent",
    },
    titulo: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "left",
        color: "white",
        textShadow: "0px 0px 8px #5E45E8",
        marginTop: theme.spacing(6),
        fontFamily: "monospace",
        "& h3":{
            [theme.breakpoints.down("lg")]: {
                fontSize: "3rem",
                marginLeft: theme.spacing(5),
            },
            [theme.breakpoints.down("md")]: {
                fontSize: "3rem",
                marginLeft: theme.spacing(5),
            },
            [theme.breakpoints.down("sm")]: {
                fontSize: "2rem",
                display: "flex",
                justifyContent: "center",
                marginLeft: 0
            },
        }
    },
    divcontent: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "black",
        position: "relative",
        paddingTop: theme.spacing(3),
        color: "white",
        textShadow: "0px 0px 8px #5E45E8",
    },
    letras: {
        [theme.breakpoints.down("lg")]: {
            fontSize: "1.5rem"
        },
        [theme.breakpoints.down("md")]: {
            fontSize: "1.3rem"
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: "1rem"
        },
    }
  }))

export default About