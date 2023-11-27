import { Component } from "solid-js";
import Hero from "../components/Hero";
import Hero2 from "../components/Hero2";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import About from "../components/About";
import Services from "../components/Services";

const Home:Component = () => {
    return (
        <>
            <Hero />
            <About />
            <Services />
            <Hero2 />
            <Contact />
            <Footer />
        </>
    )
}

export default Home;