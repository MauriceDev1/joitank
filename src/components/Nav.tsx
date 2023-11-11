import { Link } from "@solidjs/router";
import { Component } from "solid-js";
import Logo from "../assets/images/logo.png"
import { IoMenuSharp } from 'solid-icons/io'

const Nav:Component = () => {
    return (
        <nav class="w-full py-2 sticky top-0" style={{"background-color":'#EEDFAF'}}>
            <div class="w-11/12 md:w-10/12 m-auto flex md:gap-96 items-center justify-between md:justify-start">
                <div>
                    <Link href="#">
                    <img src={Logo} class="h-10"/>
                    <p>MIXONI PROJECTS</p>
                    </Link>
                </div>
                <div class="hidden md:block">
                   <ul class="flex gap-10">
                    <Link href="#">
                        <li>Home</li>
                    </Link>
                        <li>|</li>
                    <Link href="#">
                        <li>Services</li>
                    </Link>
                        <li>|</li>
                    <Link href="#">
                        <li>Products</li>
                    </Link>
                        <li>|</li>
                    <Link href="#">
                        <li>Contact Us</li>
                    </Link>
                   </ul>
                </div>
                <div class="block md:hidden">
                    <IoMenuSharp class="text-2xl"/>
                </div>
            </div>
        </nav>
    )
}

export default Nav;