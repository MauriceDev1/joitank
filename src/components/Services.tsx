import { Component } from "solid-js";
import CleaningImg from "../assets/images/7.png";
import ConstructionImg from "../assets/images/b3.png";
import InformationImg from "../assets/images/1.png";
import WaterImg from '../assets/images/Watertank.png'
import { Link } from "@solidjs/router";

const Services:Component = () => {
    return (
        <div class="w-full py-16" id="services">
            <div class="w-10/12 m-auto">
                <div class="bg-red-500 w-full flex justify-center rounded">
                    <h1 class="text-center text-4xl py-2 text-white">
                        Services
                    </h1>
                </div>
                <div class="w-full flex flex-wrap sm:flex-nowrap gap-4 pt-10">
                    <div class="w-full sm:w-1/4 border border-red-500 rounded">
                        <div class="w-full h-56 bg-gray-100" style={{"background-image":`url(${CleaningImg})`,"background-size":"cover"}}>

                        </div>
                        <div class="w-full p-2">
                            <h3 class="text-center text-xl font-semibold pb-5">
                                Cleaning Services
                            </h3>
                            <p class="text-center">
                                General Cleaning (private and
                                commercial)
                                Post-construction cleaning
                                Window cleaning
                                Pre-occupation office cleaning
                            </p>
                            <div class="w-full pt-5 pb-2 flex justify-center">
                                <Link href="#cleaning">
                                    <button class="m-auto">
                                        Read more
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div class="w-full sm:w-1/4 border border-red-500 rounded">
                        <div class="w-full h-56 bg-gray-100" style={{"background-image":`url(${ConstructionImg})`,"background-size":"cover"}}>

                        </div>
                        <div class="w-full p-2">
                            <h3 class="text-center text-xl font-semibold pb-5">
                                Construction
                            </h3>
                            <p class="text-center">
                                Demolition, Building
                                Plastering, Painting, Plumbing,
                                Roofing
                                Pool construction and maintenance,
                                Waterproofing
                            </p>
                            <div class="w-full pt-5 pb-2 flex justify-center">
                                <Link href="#construction">
                                    <button class="m-auto">
                                        Read more
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div class="w-full sm:w-1/4 border border-red-500 rounded">
                        <div class="w-full h-56 bg-gray-100" style={{"background-image":`url(${InformationImg})`,"background-size":"cover"}}>

                        </div>
                        <div class="w-full p-2">
                            <h3 class="text-center text-xl font-semibold pb-5">
                                Information Technology
                            </h3>
                            <p class="text-center">
                                Systems Development, IT Support
                                Network Support, Fibre installation, IT
                                maintenance
                            </p>
                            <h3 class="text-center text-xl font-semibold py-3">
                                Training
                            </h3>
                            <p class="text-center">
                                End user computing , Microsoft Office
                                Training, Media and advertising,
                                Systems development
                            </p>
                            <div class="w-full pt-5 pb-2 flex justify-center">
                                <Link href="#information">
                                    <button class="m-auto">
                                        Read more
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div class="w-full sm:w-1/4 border border-red-500 rounded">
                        <div class="w-full h-56 bg-gray-100" style={{"background-image":`url(${WaterImg})`,"background-size":"cover"}}>

                        </div>
                        <div class="w-full p-2">
                            <h3 class="text-center text-xl font-semibold pb-5">
                                Back-up water systems
                            </h3>
                            <p class="text-center">
                                General Cleaning (private and
                                commercial)
                                Post-construction cleaning
                                Window cleaning
                                Pre-occupation office cleaning
                            </p>
                            <div class="w-full pt-5 pb-2 flex justify-center">
                                <button class="m-auto">
                                    Read more
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;