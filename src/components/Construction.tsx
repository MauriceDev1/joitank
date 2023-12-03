import { Component } from "solid-js";
import ConstructionImg from "../assets/images/b1.png"

const Construction: Component = () => {
    return (
        <div class="w-full py-16">
            <div class="w-10/12 m-auto">
                <div>
                    <h1 class="text-center text-3xl pb-5 font-bold">
                        Construction
                    </h1>
                    <h3 class="text-center text-xl pb-5 font-semibold">
                        We are a Grade 4 CIDB recognized contractor that has provides affordable, high
                        quality construction services.
                    </h3>
                </div>
                <div class="w-full flex flex-wrap">
                    <div class="w-full sm:w-1/2">
                        <div class="sm:ml-40">
                            <h3 class="py-5 text-2xl font-bold">
                                We offer:
                            </h3>
                            <p>
                                Painting
                            </p>
                            <p>
                                Tiling
                            </p>
                            <p>
                                Pavement
                            </p>
                            <p>
                                Plumbing
                            </p>
                            <p>
                                Road works
                            </p>
                            <p>
                                Waterproofing
                            </p>
                            <p>
                                Commercial Construction
                            </p>
                            <p>
                                Plastering
                            </p>
                        </div>
                    </div>
                    <div class="w-full sm:w-1/2">
                        <img src={ConstructionImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Construction;