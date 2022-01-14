import React from 'react'
import { AppBar, Drawer, Toolbar, Box, ListItem, IconButton, ListItemIcon, ListItemText, Avatar, Divider, List, Typography, ThemeProvider } from '@mui/material';
import {ArrowBack, AssignmentInd, Home, Apps, ContactMail} from "@mui/icons-material"
import foto from '../foto.jpeg'
import { makeStyles } from '@mui/styles';

const menuItems = [
    {
        listIcon: <Home />,
        listText: "Home"
    },
    {
        listIcon: <AssignmentInd />,
        listText: "Resume"
    },
    {
        listIcon: <Apps />,
        listText: "Portfolio"
    },
    {
        listIcon: <ContactMail />,
        listText: "Contact"
    }
]


function Nav () {
    const useStyles = makeStyles({
        menuSliderContainer: {
            width:250,
            background: "#605473",
            height: "100%"
        },
        foto:{
            display:"block",
            margin: "1rem auto",
        },
        listItem:{
            color:"#D8BFD8 !important",
        }
      });
    
    const classes = useStyles();

    const [state, setState] = React.useState({
        right: false
    })

    const toggleSlider = (slider, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [slider]: open });
      };


      const sideList = (slider) => (
        <Box 
        className={classes.menuSliderContainer} 
        component="div"
        onClick={toggleSlider(slider, false)}
        >
            <Avatar className={classes.foto} src={foto} alt ="Estefanía Nahas"/>
            <Divider />
            <List>
                {menuItems.map((item, key) => 
                <ListItem button key={key}>
                    <ListItemIcon className={classes.listItem}>{item.listIcon}</ListItemIcon>
                    <ListItemText className={classes.listItem} primary={item.listText}/>
                </ListItem>
                )}
            </List>
        </Box>
    )

    return (
        <>
            <Box component="nav">
                <AppBar position="static" style={{background: "#605473"}}>
                    <Toolbar>
                        <IconButton onClick={toggleSlider("right", true)}>
                            <ArrowBack style={{color: "#D8BFD8"}}/>
                        </IconButton>
                        <Typography variant="h5" style={{color: "#D8BFD8"}}>Portfolio</Typography>
                        <Drawer 
                        open={state.right} 
                        anchor="right"
                        onClose={toggleSlider("right", false)}
                        >
                            {sideList("right")}
                        </Drawer>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default Nav