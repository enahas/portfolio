import React from 'react'
import { makeStyles } from '@mui/styles';
import './Project.css'

function Project ({img, link, title, description}) {
    const useStyles = makeStyles({
        project:{
            width: "30%",
            height: "40vh",
            margin: "40px",
            borderStyle: "solid",
            border: "3px",
            borderColor: "rgb(243,242,242)!important",
            borderRadius:"10px",
            overflow: "hidden"
        },
        browser:{
            height: "20px",
            backgroundColor: "rgb(243,242,242)",
            display: "flex",
            alignItems: "center"
        },
        circle:{
            width: "6px",
            height: "6px",
            backgroundColor: "white",
            margin:"3px",
            borderRadius:"50%"

        },
        imgProject:{
            height: "30vh",
        },
        titleProject:{
            color: 'black'
        },
        textProject:{
            color: 'black',
            fontSize: '0.83em',
            fontWeight: 'bold'
        },
        browser2:{
            height: "42px",
            backgroundColor: "rgb(243,242,242)",
            display: "flex",
            alignItems: "center"
        },
      });
    
    const classes = useStyles();

    return (
      <div className={classes.project}>
        <div className={classes.browser}>
            <div className={classes.circle}></div>
            <div className={classes.circle}></div>
            <div className={classes.circle}></div>
            <h5 className={classes.titleProject}>{title}</h5>            
        </div>
        <a href={link} target="_blank" rel="noreferrer"> 
            <img src={img} alt="proyecto" className={classes.imgProject}/>
        </a>
        <div className={classes.browser2}>
            <p className={classes.textProject}>Tecnologías utilizadas: {description}</p>       
        </div>
        
      </div>
    )
}

export default Project