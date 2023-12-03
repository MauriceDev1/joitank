import { Component } from "solid-js";
import Hero from "../components/Hero";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import About from "../components/About";
import Services from "../components/Services";
import Clients from "../components/Clients";
import Cleaning from "../components/Cleaning";
import Information from "../components/Information";
import Construction from "../components/Construction";

const Home:Component = () => {
    return (
        <>
            <Hero />
            <About />
            <Services />
            <Cleaning />
            <Information />
            <Construction />
            <Clients />
            <Contact />
            <Footer />
        </>
    )
}

export default Home;