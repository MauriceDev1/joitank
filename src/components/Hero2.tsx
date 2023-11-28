import { Component } from "solid-js";
import VerticalTank from "../assets/images/Water.png"
import { TiTick } from 'solid-icons/ti'

const Hero2:Component = () => {
    return (
        <div class="w-full py-16" id="product">
            <div class="w-11/12 md:w-10/12 m-auto">
                <h1 class=" font-semibold text-4xl text-center">
                    Say goodbye to water shedding and enjoy uninterrupted water supply
                </h1>
                <h2 class=" text-2xl text-center py-10">
                    We offer effective back up water systems that you can rely on during water shedding. 
                </h2>
                <div class="w-full flex flex-wrap">
                    <div class="w-full sm:w-1/3">
                        <img src={VerticalTank} />
                    </div>
                    <div class="w-full sm:w-2/3 py-4 flex flex-wrap">
                        <div class="w-full py-4 flex flex-wrap">
                            <div class="w-full md:w-1/2">
                                <h2 class="font-semibold text-xl text-center">Size Options</h2>
                                <div class="w-full flex pt-5">
                                    <ul class=" m-auto">
                                        <li class="text-lg py-2">800L from R13 500*</li>
                                        <li class="text-lg py-2">1000L from R14 000*</li>
                                        <li class="text-lg py-2">2000L from R15 000*</li>
                                        <li class="text-lg py-2">2500L from R 16 000*</li>
                                        <li class="text-lg py-2">5000L from R17 000*</li>
                                        <li class="text-lg py-2">10 000L from R 38 000*</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="w-full md:w-1/2 mt-10 md:mt-0">
                                <h2 class="font-semibold text-xl text-center">Your package includes</h2>
                                <div class="w-full flex pt-5">
                                    <ul class=" m-auto">
                                        <li class="text-lg py-2 text-center">
                                            <p class="flex m-auto items-center gap-3">
                                                <TiTick />
                                                Installation 
                                            </p>
                                        </li>
                                        <li class="text-lg py-2 text-center">
                                            <p class="flex m-auto items-center gap-3">
                                                <TiTick />
                                                Water connection to main building/house
                                            </p>
                                        </li>
                                        <li class="text-lg py-2 text-center">
                                            <p class="flex m-auto items-center gap-3">
                                                <TiTick />
                                                0.75 Speed drive water pump 
                                            </p>
                                        </li>
                                        <li class="text-lg py-2 text-center">
                                            <p class="flex m-auto items-center gap-3">
                                                <TiTick />
                                                Pump cover
                                            </p>
                                        </li>
                                        <li class="text-lg py-2 text-center">
                                            <p class="flex m-auto items-center gap-3">
                                                <TiTick />
                                                25mm suction hop kit
                                            </p>
                                        </li>
                                        <li class="text-lg py-2 text-center">
                                            <p class="flex m-auto items-center gap-3">
                                                <TiTick />
                                                Municipal water feed connection
                                            </p>
                                        </li>
                                        <li class="text-lg py-2 text-center">
                                            <p class="flex m-auto items-center gap-3">
                                                <TiTick />
                                                10-year tank warranty
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero2;