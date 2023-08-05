import React from 'react'
import python from '../imagenes/python.png'
import html from '../imagenes/html5.png'
import css from '../imagenes/css3.png'
import js from '../imagenes/js.png'
import boot from '../imagenes/bootstrap.png'
import git from '../imagenes/git.png'
import react from '../imagenes/react.png'
import java from '../imagenes/java.png'
import angular from '../imagenes/angular.png'
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from '@material-ui/lab'
import { Paper, Typography, makeStyles } from '@material-ui/core'
import StarRating from './StarRating'

const Technologies = (dark) => {
    const classes = useStyles();
    const skills = [
        {
            year: "2021",
            src: python,
            title: "Python",
            stars: 3.8
        },
        {
            year: "2021",
            src: html,
            title: "HTML 5",
            stars: 4
        },
        {
            year: "2021",
            src: css,
            title: "CSS 3",
            stars: 4
        },
        {
            year: "2021",
            src: js,
            title: "JavaScript",
            stars: 3.5
        },
        {
            year: "2021",
            src: boot,
            title: "Bootstrap",
            stars: 3.5
        },
        {
            year: "2022",
            src: git,
            title: "GitHub",
            stars: 3
        },
        {
            year: "2022",
            src: react,
            title: "ReactJS / cursando",
            stars: 3
        },
        {
            year: "---",
            src: java,
            title: "Java / por cursar",
            stars: 0
        },
        {
            year: "---",
            src: angular,
            title: "Angular / por cursar",
            stars: 0
        },
    ]
  return (
    <div className={ `${classes.section} ${ dark && classes.sectiondark }` }>
        <div className={ classes.wrap }>
        <Timeline align="left">
            {
                skills.map(({year, src, title, stars}, index)=>(
                    <TimelineItem key={ index }>
                        <TimelineOppositeContent className={ classes.año }>
                            <Typography variant="h6" color="white">
                                { year }
                            </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator className={ classes.separador }>
                            <TimelineDot>
                            <img src={ src } alt={ title } className={ classes.logos }/>
                            </TimelineDot>
                            <TimelineConnector/>
                        </TimelineSeparator>
                        <TimelineContent className={ classes.timeline }>
                            <Paper elevation={3} className={ classes.paper }>
                            <Typography variant='h6' component="h1">
                                    { title }
                            </Typography>
                            <StarRating stars={ stars }/>  
                            </Paper>
                        </TimelineContent>  
                    </TimelineItem>
                ))
            }
        </Timeline>
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
    },
    logos: {
        width: "50px",
    },
    timeline: {
        padding: "6px 16px",
        maxWidth: "60%",
    },
    paper: {
        backgroundColor: "#2a44b74a",
        border: "1px solid #446eff",
        color: "white",
    },
    wrap: {
        display: "flex",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: theme.spacing(5),
        paddingRight: theme.spacing(5),
        paddingBottom: theme.spacing(8),
        [theme.breakpoints.down("md")]: {
            paddingTop: theme.spacing(5),
            paddingRight: theme.spacing(5),
            paddingBottom: theme.spacing(8),
        },
        [theme.breakpoints.down("sm")]: {
            paddingTop: theme.spacing(5),
            paddingRight: theme.spacing(5),
            paddingBottom: theme.spacing(8),
        },
    },
    año: {
        maxWidth: "20%",
        marginRight: "5%",
        color: "white",
        textShadow: "0px 0px 8px #5E45E8",
    },
    separador: {
        maxWidth: "20%",
        marginRight: "5%"
    }
  }))

export default Technologies