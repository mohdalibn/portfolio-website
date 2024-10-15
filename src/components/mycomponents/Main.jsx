
import About from "./About";
import Contact from "./Contact";
import Divider from "./Divider";
import Hero from "./Hero";
import Projects from "./Projects";


// This components is the main section of the website and calls the Hero, About, and Projects components
export default function Main(){

    return (

        <main className="container mx-auto px-4 py-8">

            <Hero/>

            <Divider/>

            <About/>

            <Divider/>

            <Projects/>

            <Divider/>

            <Contact/>

        </main>

    )

}