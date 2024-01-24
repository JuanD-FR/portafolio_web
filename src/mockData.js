
import calc from "./imagenes/calculadora.png"
import lista from "./imagenes/listatareas.png"
import click from "./imagenes/click.png"
import busca from "./imagenes/buscador.png"
import musica from "./imagenes/musica.png"
import supersmash from "./imagenes/ssb.png"
import afa from "./imagenes/AFApp.png"
import form1 from "./imagenes/form1.png"
import bbq from "./imagenes/bbq.png"
import gtr from "./imagenes/gtr.png"

const mockData = [
    {
        title: "Calculator App",
        image: calc,
        link: "https://juand-fr.github.io/Calculadora/",
        description: "App featuring a basic calculator. Coded with ReactJS...",
        description1: "App featuring a basic calculator with adding, subtracting, multiplying, dividing and clearing functions."
    },
    {
        title: "To-Do List App",
        image: lista,
        link: "https://juand-fr.github.io/lista_tareas/",
        description: "Write, scratch and delete tasks. Coded with ReactJS...",
        description1: "App featuring a To do List. Contains functions reggarding writing a specific task, adding the task to the list, scratching a completed task and deleting tasks."
    },
    {
        title: "Click Counter App",
        image: click ,
        link: "https://juand-fr.github.io/contador_clicks/",
        description: "You click, it counts. App featuring a click counter. Coded with ReactJS...",
        description1: "App featuring a click counter containing a reset button."
    },
    {
        title: "GIF finder App",
        image: busca,
        link: "https://juand-fr.github.io/react-udemy-gifexpert/",
        description: "Find your favorite GIF. Coded with ReactJS...",
        description1: "App featuring a GIF finder. The particular thing about this app is that it has a costumed hook called useFetchgifs for fetching the API of gifs."
    },
    {
        title: "OYE - Web Page",
        image: musica,
        link: "https://juand-fr.github.io/OYE/",
        description: "Music listening web page. Coded only using HTML, CSS and JS...",
        description1: "My first web development project. Web page that provides its users listening to music. Contains a Home Page, a Contact Info modal, a Sign In section and a registration form. Also, it contains a section just for searching songs and listening."
    },
    {
        title: "Information Cards",
        image: supersmash,
        link: "https://juand-fr.github.io/personajes_smash_bros/",
        description: "Cards containing images and texts. Coded with ReactJS...",
        description1: "My first React App, featuring information cards about Super Smash Bros. videogame character details."
    },
    {
        title: "Fetch API",
        image: bbq,
        link: "https://juand-fr.github.io/breaking_bad_quotes/",
        description: "API fetching to get random quotes. Coded with ReactJS...",
        description1: "App featuring a fetch API fucntion to get random quotes from Breaking Bad."
    },
    {
        title: "Formulario",
        image: form1,
        link: "https://juand-fr.github.io/formulario_1/",
        description: "Simple form with three inputs. Coded also with ReactJS...",
        description1: "App featuring a simple form with three inputs: username, e-mail and password, and a delete button to erase the information."
    },
    {
        title: "Addition Function App",
        image: afa,
        link: "https://juand-fr.github.io/addition_function_app/",
        description: "Variant of the Click Counter App. Coded with ReactJS...",
        description1: "Much like the Click Counter App, but in this case, you add to the counter the number that you want the counter to go up. It adds up each number you click, so at the end you'll have as a result the sum of each click number you executed."
    },
    {
        title: "Guitar Brochure App",
        image: gtr,
        link: "https://guitar-brochure.netlify.app",
        description: "Guitar Brochure. Coded with ReactJS...",
        description1: "App that allows login and navigation throughout diferent pages containing diferent guitar brand information."
    },
]

export default mockData;