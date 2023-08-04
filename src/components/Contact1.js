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
        <Typography variant="h3" className={ classes.titulo }>{ title }</Typography>
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
            [theme.breakpoints.down("sm")]: {
                display: "none",
            },
        },
        fontFamily: "monospace",
        paddingLeft: theme.spacing(3),
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
        fontFamily: "monospace",
        marginLeft: theme.spacing(9),
        paddingTop: theme.spacing(4),
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
      height: "30%",
      width: "80%",
      display: "flex",
      flexDirection: "row", 
      paddingTop: theme.spacing(1),
      margin: "auto",
      backgroundColor: "#2a44b74a",
      border: "1px solid #446eff",
      alignItems: "center",
      color: "white"
    },
    correo:{
      height: 25,
      width: 25,
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      marginBottom: theme.spacing(1),
      color: "white"
    },
    contenido: {
      fontSize: "1.2rem",
    },
    card1: {
      height: "30%",
      width: "80%",
      display: "flex",
      flexDirection: "row",
      marginTop: theme.spacing(3), 
      paddingTop: theme.spacing(1),
      margin: "auto",
      backgroundColor: "#2a44b74a",
      border: "1px solid #446eff",
      alignItems: "center",
      color: "white"
    },
    image: {
      width: 35,
      height: 35,
      marginLeft: theme.spacing(0.5),
      marginRight: theme.spacing(1),
      marginBottom: theme.spacing(1)
    },
    image1: {
      width: 100,
      height: 100,
      marginLeft: theme.spacing(1),
    },
  }))

export default Contact1