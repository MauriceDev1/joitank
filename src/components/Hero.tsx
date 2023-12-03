import { Component } from "solid-js";
import Home from "../assets/images/5.png"

const Hero:Component = () => {
    return (
        <div class="w-full bg-red-600">
            <div class="w-10/12 m-auto">
                <img src={Home} />
            </div>
        </div>
    )
}

export default Hero;