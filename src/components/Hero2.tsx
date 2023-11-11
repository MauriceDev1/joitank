import { Component } from "solid-js";

const Hero2:Component = () => {
    return (
        <div class="w-full h-screen py-16" style={{"background-color":'#6098C4'}}>
            <div class="w-11/12 md:w-10/12 m-auto">
                <h1 class="text-white text-4xl text-center">
                    Say goodbye to water shedding and enjoy uninterrupted water supply
                </h1>
                <h2 class="text-white text-2xl text-center py-10">
                    We offer effective back up water systems that you can rely on during water shedding. 
                </h2>
                <div class="w-full flex flex-wrap">
                    <div class="w-1/3">

                    </div>
                    <div class="w-2/3 py-4 flex" style={{"background-color":'#4472C4'}}>
                        <div class="w-1/2 text-white">
                            <h2 class="font-semibold text-xl text-center">Size Options</h2>
                        </div>
                        <div class="w-1/2 text-white">
                            <h2 class="font-semibold text-xl text-center">Your package includes</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero2;