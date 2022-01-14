import React from 'react'
import { Box, Avatar, Typography, Button } from '@mui/material';
import foto from '../foto.jpeg'
import Typed from 'react-typed'
import { makeStyles } from '@mui/styles';
import resume from '../Resume_Nahas_Estefania.pdf'

function Header () {
    const useStyles = makeStyles({
        foto:{
            width: "240px!important",
            height: "240px!important",
            margin: "40px auto!important",
        },
        title:{
            // color: "#605473",
            color: "#e6ace6"
        },
        subtitle:{
            color: "#D8BFD8",
        },
        typedContainer: {
            // position: "absolute",
            top: "50%",
            left: "50%",
            // transform: "translate(-50%, -50%)",
            // width: "100vw",
            textAlign: "center",
            zIndex: 1
        },
        download:{
            textDecoration: "none",
            color: "#D8BFD8",
            marginTop: "40px"
        }
      });
    
    const classes = useStyles();

    return (
        <div>
            <Box className={classes.typedContainer}>
                
                <Avatar className={classes.foto} src={foto} alt ="Estefanía Nahas"/>
                <Typography className={classes.title} variant="h4">
                    <Typed
                        strings={['Estefanía Nahas']}
                        typeSpeed={40}
                    />
                    <br/>
                </Typography>
                <Typography className={classes.subtitle} variant="h5">
                    <Typed
                    strings={[
                        'Full-Stack Developer',
                        'Economist',
                        'Enthusiastic Dev']}
                        typeSpeed={40}
                        backSpeed={50}
                        loop >
                    </Typed>
                </Typography>
                <Button variant="text">
                    <a href={resume} download="Resume_Nahas_Estefania.pdf" className={classes.download}> Download Resume </a>
                </Button>
            </Box>
            
        </div>
    )
}

export default Header





