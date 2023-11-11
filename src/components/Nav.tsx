import { Link } from "@solidjs/router";
import { Component } from "solid-js";

const Nav:Component = () => {
    return (
        <nav class="w-full py-2 sticky top-0" style={{"background-color":'#EEDFAF'}}>
            <div class="w-11/12 md:w-10/12 m-auto flex gap-96">
                <div>
                    <Link href="/">
                    Logo
                    </Link>
                </div>
                <div>
                   <ul class="flex gap-10">
                    <Link href="/">
                        <li>Home</li>
                    </Link>
                        <li>|</li>
                    <Link href="/services">
                        <li>Services</li>
                    </Link>
                        <li>|</li>
                    <Link href="/products">
                        <li>Products</li>
                    </Link>
                        <li>|</li>
                    <Link href="/contact">
                        <li>Contact Us</li>
                    </Link>
                   </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav;