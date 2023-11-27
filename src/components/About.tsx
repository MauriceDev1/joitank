import { Component } from "solid-js";

const About:Component = () => {
    return (
        <div class="w-full py-16">
            <div class="w-10/12 m-auto">
                <div class="bg-red-500 w-full flex justify-center rounded">
                    <h1 class="text-center text-4xl py-2 text-white">
                        About us
                    </h1>
                </div>
                <div>
                    <h3 class="text-center text-3xl py-10 font-bold">Vision</h3>
                </div>
                <div class="text-center text-lg px-12">
                    We aim to influence the world by being a game-changing women led organization. We will do so by prioritizing the
                    advancement and empowerment of the youth and underprivileged groups in South African
                </div>
                <div>
                    <h3 class="text-center text-3xl py-10 font-bold">Mission</h3>
                </div>
                <div class="text-center text-lg px-12">
                    To be a leading service provider with a solid footprint built on trust, quality and reliability
                </div>
                <div>
                    <h3 class="text-center text-3xl py-10 font-bold">Brief Bio</h3>
                </div>
                <div class="text-center text-lg px-12">
                    Mixoni projects is a well established company that specializes in: Cleaning services, Training and Construction services.
                </div>
                <div class="text-center">
                    We are a 100% black women owned company established in 2013 with the aim to empower the youth and develop
                    underprivileged groups. Our offices are based in Gauteng but we operate country wide
                </div>
            </div>
        </div>
    )
}

export default About;