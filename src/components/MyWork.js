import { Box, Button, Card, CardContent, CardMedia, Grid, Link, Modal, Typography, makeStyles } from '@material-ui/core';
import React, { useState } from 'react'
import mockData from "../mockData"

const MyWork = ({ title, id, dark }) => {
    const classes = useStyles();
    const [modalOpen, setModalOpen] = useState(false);
    const [modalData, setModalData] = useState(null);
  
    const handleModalOpen = (data) => {
      setModalData(data);
      setModalOpen(true);
    };
  
    const handleModalClose = () => {
      setModalOpen(false);
    };

    const handleButtonClick = (link) => {
      window.open(link, '_blank'); // Opens the link in a new tab
    };

  return (
    <div className={ `${classes.section} ${ dark && classes.sectiondark }` }>
      <div className={ classes.sectioncontent } id={ id }>
        <Typography variant="h3" className={ classes.titulo }>{ title }</Typography>
        <Grid container className={ classes.grid }>
          {
            mockData.map(({ title, image, link, description, description1}, index) => (
              <Grid item key={ index } xs={ 12 } sm={ 6 } md={ 4 }>
                <Card className={ classes.card }>
                  <CardMedia image={ image } className={ classes.caratula } titulo="caratula"/>
                  <CardContent>
                    <Typography variant="h6" className={ classes.titulo2 }>
                      { title }
                    </Typography>
                    <Typography className={classes.descripcion}>
                      {`${description}`}
                    </Typography>
                    <Typography>
                      <Link onClick={(e) => handleModalOpen({ title, description1, link }, e)} className={classes.link2}>
                        Read more
                      </Link>
                    </Typography>
                    <Button onClick={() => handleButtonClick(link)} className={classes.button}>
                      See project
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))
          }
        </Grid>
      </div>
      <Modal open={modalOpen} onClose={handleModalClose}>
        {modalData && (
          <Box className={classes.modal}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {modalData.title}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {modalData.description1}
            </Typography>
            <div className={ classes.container }>
            {modalData.link && (
              <Link onClick={() => handleButtonClick(modalData.link)} className={classes.link3}>
                See project
              </Link>
            )}
            </div>
          </Box>
        )}
      </Modal>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
    section: {
        minHeight: "100vh",
        width: "auto",
    },
    sectioncontent: {
      maxWidth: "90vw",
      margin: "0 auto",
      padding: theme.spacing(2),
    },
    sectiondark: {
        background: "black",
        color: "white",
    },
    grid: {
      marginTop: theme.spacing(10),
      paddingBottom: theme.spacing(6)
    },
    card: {
      maxWidth: 345,
      minHeight: 275,
      margin: theme.spacing(3),
      border: "1px solid #446eff",
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center", 
      flexDirection: "column", 
      backgroundColor: "#000023",
      paddingTop: theme.spacing(3),
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
    },
    caratula: {
      width: "50%",
      height: "100%",
      paddingTop: '50%',
      marginTop: theme.spacing(1),
      borderRadius: "50%",
      backgroundColor: "white"
    },
    link: {
      margin: theme.spacing(1),
      display: "flex",
      justifyContent: "center",
      color: "#00665f",
      fontSize: "0.8rem"
    },
    link2: {
      color: "#446eff",
      fontSize: "1rem",
     
    },
    link3: {
      color: "#446eff",
      fontSize: "1rem",
    },
    container: {
      textAlign: "center"
    },
    titulo: {
      color: "white",
      textShadow: "0px 0px 8px #5E45E8",
      textAlign: "left",
      fontFamily: "monospace",
      marginLeft: theme.spacing(5),
      marginTop: theme.spacing(6),
    },
    titulo2: {
      display: "flex",
      justifyContent: "center",
      textAlign: "left",
      textJustify: "inter-word",
      textLastAlign: "left",
      color: "white",
      fontWeight: "bold"
      
    },
    descripcion: {
      display: "flex",
      justifyContent: "left",
      textAlign: "left",
      textJustify: "inter-word",
      textLastAlign: "left",
      color: "white"
    },
    modal: {
      position: "absolute",
      width: 400,
      backgroundColor: "#000023",
      border: "2px solid #446eff",
      borderRadius: "12px",
      padding: theme.spacing(2,4,3),
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      color: "white",
    },
    button: {
      border: "2px solid white",
      color: "white",
      marginTop: theme.spacing(2),
      marginLeft: theme.spacing(12),
      display: "flex",
      justifyContent: "center",
      textAlign: "center",
      textLastAlign: "center",
      "&:hover": {
        backgroundColor: "#446eff",
      }
    },
  }))

export default MyWork