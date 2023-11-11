import { Component } from "solid-js";
import VerticalTank from "../assets/images/vertical.png"

const Hero2:Component = () => {
    return (
        <div class="w-full sm:h-screen py-16" style={{"background-color":'#6098C4'}}>
            <div class="w-11/12 md:w-10/12 m-auto">
                <h1 class="text-white text-4xl text-center">
                    Say goodbye to water shedding and enjoy uninterrupted water supply
                </h1>
                <h2 class="text-white text-2xl text-center py-10">
                    We offer effective back up water systems that you can rely on during water shedding. 
                </h2>
                <div class="w-full flex flex-wrap">
                    <div class="w-full sm:w-1/3">
                        <img src={VerticalTank} />
                    </div>
                    <div class="w-full sm:w-2/3 py-4 flex flex-wrap">
                        <div class="w-full py-4 flex" style={{"background-color":'#4472C4'}}>
                        <div class="w-1/2 text-white">
                            <h2 class="font-semibold text-xl text-center">Size Options</h2>
                            <div class="w-full flex pt-5">
                                <ul class="text-white m-auto">
                                    <li class="text-lg py-2">800L from R13 500*</li>
                                    <li class="text-lg py-2">1000L from R14 000*</li>
                                    <li class="text-lg py-2">2000L from R15 000*</li>
                                    <li class="text-lg py-2">2500L from R 16 000*</li>
                                    <li class="text-lg py-2">5000L from R17 000*</li>
                                    <li class="text-lg py-2">10 000L from R 38 000*</li>
                                </ul>
                            </div>
                        </div>
                        <div class="w-1/2 text-white">
                            <h2 class="font-semibold text-xl text-center">Your package includes</h2>
                            <div class="w-full flex pt-5">
                                <ul class="text-white m-auto">
                                    <li class="text-lg py-2">Installation </li>
                                    <li class="text-lg py-2">Water connection to main building/house</li>
                                    <li class="text-lg py-2">0.75 Speed drive water pump </li>
                                    <li class="text-lg py-2">Pump cover</li>
                                    <li class="text-lg py-2">25mm suction hop kit</li>
                                    <li class="text-lg py-2">Municipal water feed connection</li>
                                    <li class="text-lg py-2">10-year tank warranty</li>
                                </ul>
                            </div>
                        </div>
                        </div>
                        <button class="h-10 mt-5 w-full text-white rounded" style={{"background-color":'#02497D'}}>Get a Quote</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero2;