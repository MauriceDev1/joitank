import { Component } from "solid-js";
import Hero from "../components/Hero";
import Hero2 from "../components/Hero2";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home:Component = () => {
    return (
        <>
            <Hero />
            <Hero2 />
            <Contact />
            <Footer />
        </>
    )
}

export default Home;