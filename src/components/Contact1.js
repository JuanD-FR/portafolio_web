import { Card, CardContent, CardMedia, Grid, Typography, makeStyles } from '@material-ui/core';
import React from 'react'
import qrwa from '../imagenes/qrwa.svg'
import correo from '../imagenes/correo.svg'
import wa from '../imagenes/wa.svg'



const Contact1 = ({ title, id, dark }) => {
    const classes = useStyles();

  return (
    <div className={ `${classes.section} ${ dark && classes.sectiondark }` }>
      <div className={ classes.sectioncontent } id={ id }>
        <div className={ classes.contenedorTitulo }>
          <Typography variant="h3" className={ classes.titulo }>{ title }</Typography>
        </div>       
          <div className={ classes.titleandchoices }>
            <Typography variant="h5">
              GET IN TOUCH!
            </Typography>
          </div>
          <div className={ classes.datos }>
            <Grid container className={ classes.grid }>
              {
                <Grid item xs={ 12 } sm={ 6 } md={ 4 }>
                  <Card className={ classes.card }>
                    <CardMedia image={ correo } className={ classes.correo } titulo="correo"/>
                    <CardContent className={ classes.contenido }>
                      juanda.fero89@gmail.com
                    </CardContent>
                  </Card>
                  <Card className={ classes.card1 }>
                    <CardMedia image={ wa } className={ classes.image } />
                    <CardContent className={ classes.contenido }>
                      (+57)-3208242878
                    </CardContent>
                    {/* <CardMedia image={qrwa} className={classes.image1} /> */}
                  </Card>
                </Grid>
              }
            </Grid>
          </div>
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
      background: "#131b63",
      color: "white",
      fontFamily: "monospace",
    },
    sectioncontent: {
      color: "white",
        "& h3": {
          marginTop: theme.spacing(6),
        },
        fontFamily: "monospace",  
    },
    titleandchoices: {
      marginTop: theme.spacing(10),
      "& h5": {
        fontSize: "2rem",
        fontFamily: "monospace",
        display: "flex",
        padding: theme.spacing(2),
        textAlign: "center",
        justifyContent: "center", 
        alignItems: "center",
      }
    },
    titulo: {
      color: "white",
      textShadow: "0px 0px 8px #5E45E8",
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(-5),
      fontFamily: "monospace",
      [theme.breakpoints.down("lg")]: {
        fontSize: "3rem",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "2rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",   
      },
    },
    contenedorTitulo: {
      "& h3":{
        [theme.breakpoints.down("lg")]: {
          fontSize: "3rem",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "left",
          textAlign: "left",
          marginLeft: theme.spacing(7)
        },
        [theme.breakpoints.down("sm")]: {
          fontSize: "2rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: theme.spacing(0)
      },
    }
  },
    datos: {
      marginTop: theme.spacing(3),
      display: "flex",
      justifyContent: "center", 
      alignItems: "center", 
    },
    grid: {
      justifyContent: "center",
    },
    card: {
      backgroundColor: "#2a44b74a",
      border: "1px solid #446eff",
      color: "white",
      [theme.breakpoints.down("lg")]: {
        fontSize: "3rem",
        height: "30%",
        width: "80%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: theme.spacing(1),
        margin: "auto",
      },
      [theme.breakpoints.down("md")]: {
        fontSize: "2rem",
        height: "30%",
        width: "80%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: theme.spacing(1),
        margin: "auto",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "2rem",
        height: "30%",
        width: "80%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: theme.spacing(1),
        margin: "auto",
      },
    },
    correo:{
      [theme.breakpoints.down("lg")]: {
        height: 30,
        width: 30,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "left",
        marginRight: theme.spacing(3),
        marginBottom: theme.spacing(1),
      },
      [theme.breakpoints.down("md")]: {
        height: 30,
        width: 30,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginRight: theme.spacing(1),
        marginBottom: theme.spacing(1),
      },
      [theme.breakpoints.down("sm")]: {
        height: 30,
        width: 30,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "left",
        marginRight: theme.spacing(1),
        marginBottom: theme.spacing(1),
      },
    },
    contenido: {
      fontSize: "1rem",
    },
    card1: {
      backgroundColor: "#2a44b74a",
      border: "1px solid #446eff",
      color: "white",
      paddingTop: theme.spacing(1),
      [theme.breakpoints.down("lg")]: {
        fontSize: "3rem",
        height: "30%",
        width: "80%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: theme.spacing(2),
        paddingTop: theme.spacing(1),
        margin: "auto",
      },
      [theme.breakpoints.down("md")]: {
        fontSize: "2rem",
        height: "30%",
        width: "80%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: theme.spacing(2),
        paddingTop: theme.spacing(1),
        margin: "auto",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "2rem",
        height: "30%",
        width: "80%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: theme.spacing(2),
        paddingTop: theme.spacing(1),
        margin: "auto",
      },
    },
    image: {
      [theme.breakpoints.down("lg")]: {
        height: 40,
        width: 40,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "left",
        marginRight: theme.spacing(10),
        marginBottom: theme.spacing(1),
      },
      [theme.breakpoints.down("md")]: {
        height: 40,
        width: 40,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "left",
        marginRight: theme.spacing(5),
        marginBottom: theme.spacing(1),
      },
      [theme.breakpoints.down("sm")]: {
        height: 40,
        width: 40,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "left",
        marginRight: theme.spacing(8),
        marginBottom: theme.spacing(1),
      },
    },
    image1: {
      width: 100,
      height: 100,
      marginLeft: theme.spacing(1),
    },
  }))

export default Contact1