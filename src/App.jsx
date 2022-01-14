import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Particles from 'react-tsparticles';
import { makeStyles } from '@mui/styles';
import ProjectList from './components/ProjectList'

function App() {

  const useStyles = makeStyles({
    particlesCanva:{
        position:"absolute!important",
        // width: "100%",
        zIndex: -1,
        opacity: "0.3"
    }
  });

  const classes = useStyles();

  return (
    <>
      {/* <Nav /> */}

      <Particles 
        options={{
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.6,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 4,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.1,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true}}
        canvasClassName={classes.particlesCanva}
      />
      <div>
        <Header />
        <ProjectList />
      </div>




    </>
  );
}

export default App;
