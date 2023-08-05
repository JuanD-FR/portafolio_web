import { MuiThemeProvider, createTheme, makeStyles } from "@material-ui/core";
import NavBar from "./components/NavBar";
import Inital from "./components/Initial";
import About from "./components/About";
import Skills from "./components/Skills";
import MyWork from "./components/MyWork";
import Contact1 from "./components/Contact1";
import MatrixRain from './components/MatrixRain'
import "./App.css"


const theme = createTheme({
  palette: {
    primary: { main: "#000023" },
    secondary: { main: "#313591" }
  }
})

function App() {
  
  return (
    <>
        <MuiThemeProvider theme= { theme }>
        <NavBar/>
          <div>
            <Inital title="Initial" id="about" dark={true}/>
            <About title="About me" id="about" dark={true} />
            <Skills title="My skills" id="skills" dark={true} />
            <MyWork title="My work" id="work" dark={true} />
            <Contact1 title="Contact" id="contact" dark={true} />
          </div>
        </MuiThemeProvider>
    </>
  );
};
  
const useStyles = makeStyles((theme) => ({
  root: {
  },
}))

export default App;