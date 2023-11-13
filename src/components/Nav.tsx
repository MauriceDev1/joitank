import { Link } from "@solidjs/router";
import { Component, createSignal } from "solid-js";
import Logo from "../assets/images/logo.png"
import { IoMenuSharp } from 'solid-icons/io'

const Nav:Component = () => {
    const [triggerMenu, setTriggerMenu] = createSignal(false);
    return (
        <>
            <nav class="w-full py-2 sticky top-0" style={{"background-color":'#EEDFAF'}}>
                <div class="w-11/12 md:w-10/12 m-auto flex justify-between items-center">
                    <div class="flex justify-center">
                        <Link href="#">
                            <img src={Logo} class="h-10 m-auto"/>
                            <p class="text-lg">MIXONI PROJECTS</p>
                        </Link>
                    </div>
                    <div class="hidden md:block mr-10 xl:mr-64">
                        <ul class="flex gap-10 text-lg">
                            <Link href="#">
                                <li>Home</li>
                            </Link>
                                <li>|</li>
                            <Link href="#product">
                                <li>Products</li>
                            </Link>
                                <li>|</li>
                            <Link href="#contact">
                                <li>Contact Us</li>
                            </Link>
                        </ul>
                    </div>
                    <div 
                        class="block md:hidden"
                        onClick={() => setTriggerMenu(!triggerMenu())}
                    >
                        <IoMenuSharp class="text-2xl"/>
                    </div>
                </div>
            </nav>
            {triggerMenu() && 
                <div class="w-full h-screen fixed bg-black bg-opacity-50 z-50 top-0">

                </div>
            }
        </>
    )
}

export default Nav;