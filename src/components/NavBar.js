import { AppBar, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, makeStyles, Menu, Toolbar } from '@material-ui/core'
import React, { useState } from 'react'
import logo from "../imagenes/logo.jpeg"
import { Link, animateScroll as scroll } from "react-scroll"
import InfoIcon from '@material-ui/icons/Info';
import ListAltIcon from '@material-ui/icons/ListAlt';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import MenuIcon from '@material-ui/icons/Menu';
import CancelIcon from '@material-ui/icons/Cancel'
import HomeIcon from '@material-ui/icons/Home';

const NavBar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const links = [
    {
      id:"about",
      text: "About me",
      icon: <InfoIcon fontSize="large"/>
    },
    {
      id:"skills",
      text: "Skills",
      icon: <ListAltIcon fontSize="large"/>
    },
    {
      id:"work",
      text: "My Work",
      icon: <AccountTreeIcon fontSize="large"/>
    },
    {
      id:"contact",
      text: "Get in touch",
      icon: <ContactMailIcon fontSize="large"/>
    }
  ]
  
  const scrollToTop  = () => {
    scroll.scrollToTop();
  }

  return (
    <>
      <AppBar position='sticky' className={ classes.root }>
        <Toolbar className={ classes.toolbar }>
        <div className={ classes.home }><HomeIcon fontSize="large" onClick={scrollToTop} /></div>
          <List className={ classes.menu }>
            {
              links.map(({ id, text }, index)=>(
                <Link key={ index } 
                      to={ id } 
                      spy={ true } 
                      activeClass='active' 
                      smooth={ true } 
                      duration={ 500 } 
                      offset={ -70 }> 
                  { text } 
                </Link>
              ))
            }
          </List>
          <IconButton edge="end" 
                      className= { classes.menubutton }
                      onClick={ ()=>setOpen(!open) }
                      >
            <MenuIcon fontSize="large"/>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={ open } onClose={ ()=>setOpen(false) }>
        <IconButton onClick={ ()=>setOpen(false) }>
          <CancelIcon className={ classes.cancelicon} fontSize="large"/>
        </IconButton>

        <Divider/>
        {
          links.map(({ id, text, icon }, index)=>(
            <Link key={ index }
                  className={ classes.sidebar }
                  to={ id } 
                  spy={ true } 
                  activeClass='active' 
                  smooth={ true } 
                  duration={ 500 } 
                  offset={ -70 }
                  > 
                  <ListItem component="h5">
                    <span>
                      <ListItemIcon>
                        { icon }
                      </ListItemIcon>
                    </span>
                    { text }
                  </ListItem> 
            </Link>
          ))
        }
        
      </Drawer>
    </>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "black",
    color: "white",
    top: 0,
    left: 0,
    rigth: 0,
    zIndex: 999,
  },
  toolbar: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  logo: {
    height: "3.5rem",
    objectFit: "contain",
    "&:hover": {
      cursor: "pointer"
    }
  },
  menu: {
    [theme.breakpoints.down("sm")]: {
      display: "none"
    },
    "& a": {
      color: "#fff",
      fontSize: "1.4rem",
      fontWeight: "bold",
      marginLeft: theme.spacing(3)
    },
    "& a:hover": {
      cursor: "pointer",
      color: "#446eff",
      borderBottom: "2px solid #446eff"
    }
  },
  menubutton: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      color: "white",
      position: "absolute",
      top: 0,
      right: 10,
    }
  },
  cancelicon: {
    color: "#233BA1",
    position: "absolute",
    top: 0,
    right: 10
  },
  sidebar: {
    width: "40vw",
    [theme.breakpoints.down("sm")]: {
      width: "60vw",
    },
    "& h5": {
      margin: theme.spacing(10, 0, 0, 4),
      fontSize: "1.4rem",
      color: "#333",
      fontWeight: "bold",
    },
    "& h5:hover": {
      color: "#233BA1",
      cursor: "pointer",
      borderBottom: "3px solid #233BA1"
    }
  },
  home: {
    "& div:hover": {
      color: "#313591",
      cursor: "pointer",
    }
  }
}))

export default NavBar