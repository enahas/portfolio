import React from 'react'
import { makeStyles } from '@mui/styles';
import Project from './Project'
import {projects} from "../data" 

function ProjectList () {
    const useStyles = makeStyles({
        pl:{
            padding: "50px 100px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center"
        },
        plText:{
            color: "#e6ace6",
        },
        plImg:{
            width: "100%",
            display: "flex",
            flexWrap:"wrap",
            justifyContent: 'center'
        },
      });
    
    const classes = useStyles();


    return (
        <div className={classes.pl}>
            <div className={classes.plText}>
                <h1>My Projects</h1>
            </div>
            <div className={classes.plImg}>
                {projects.map((item) => (
                    <Project key={item.id} img={item.img} link={item.link} title={item.title}/>
                ))}
            </div>
        </div>
    )
}

export default ProjectList