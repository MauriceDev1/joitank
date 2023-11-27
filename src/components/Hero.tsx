import { Component } from "solid-js";
import Home from "../assets/images/HomePage2.png"

const Hero:Component = () => {
    return (
        <div class="w-full h-screen" style={{"background-image":`url(${Home})`,"background-size":'cover'}}>

        </div>
    )
}

export default Hero;