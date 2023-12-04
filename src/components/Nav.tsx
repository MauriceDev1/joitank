import { Link, useNavigate } from "@solidjs/router";
import { Component, createSignal } from "solid-js";
import Logo from "../assets/images/Mixoni Logo (2).png"
import { IoCloseOutline, IoMenuSharp } from 'solid-icons/io'

const Nav:Component = () => {
    const [toggleMobileMenu,setToggleMobileMenu] = createSignal(false);
    const navigate = useNavigate();

    const handleMobileLink = (e:any) => {
        navigate(`#${e}`)
        setToggleMobileMenu(false);
    }

    return (
        <>
            <nav class="w-full py-2 sticky top-0 bg-white">
                <div class="w-11/12 md:w-10/12 m-auto flex justify-between items-center">
                    <div class="flex justify-center">
                        <Link href="#">
                            <img src={Logo} class="h-12 m-auto"/>
                        </Link>
                    </div>
                    <div class="hidden md:block mr-10 xl:mr-64">
                        <ul class="flex gap-10 text-lg">
                            <Link href="#">
                                <li>Home</li>
                            </Link>
                                <li>|</li>
                            <Link href="#about">
                                <li>About Us</li>
                            </Link>
                                <li>|</li>
                            <Link href="#services">
                                <li>Services</li>
                            </Link>
                                <li>|</li>
                            <Link href="#contact">
                                <li>Contact Us</li>
                            </Link>
                        </ul>
                    </div>
                    <div 
                        class="block md:hidden"
                        onClick={() => setToggleMobileMenu(!toggleMobileMenu())}
                    >
                        <IoMenuSharp class="text-2xl"/>
                    </div>
                </div>
            </nav>
            <div class={`${toggleMobileMenu() ? 'w-full' : 'w-0'} fixed top-0 left-0 h-screen overflow-hidden bg-opacity-70 bg-black z-50`}>
                <button
                    onClick={() => setToggleMobileMenu(false)} 
                    class="z-50 text-white mt-5 ml-5">
                    <IoCloseOutline class="text-3xl menuClose" 
                    />
                </button>
                <div class={`fixed ${toggleMobileMenu() ? 'w-[300px]' : 'w-0'} h-screen flex overflow-hidden duration-300 ease-in-out z-30 top-0 right-0 2xl:hidden`} style={{"background-color":"#E63435"}}>
                    <div class="w-10/12 relative mx-auto text-white">
                        <ul class="">
                            <button
                                onClick={() => handleMobileLink('home')}
                                class="w-full"
                            >
                                <li class="w-full py-4 border-b">Home</li>
                            </button>
                            <button
                                onClick={() => handleMobileLink('about')}
                                class="w-full"
                            >
                                <li class="w-full py-4 border-b">About us</li>
                            </button>
                            <button
                                onClick={() => handleMobileLink('services')}
                                class="w-full"
                            >
                                <li class="w-full py-4 border-b">Services</li>
                            </button>
                            <button
                                onClick={() => handleMobileLink('contact')}
                                class="w-full"
                            >
                                <li class="w-full py-4">Contact us</li>
                            </button>
                        </ul>
                        {/* <div class="w-full absolute flex flex-wrap bottom-5 gap-y-4">
                            <button 
                                onclick={() => handleMobileLink('/register')}
                                class="text-white h-10 rounded-sm border w-full bg-lue-400"
                                style={{"background-color":"#E63435","border-color":"#E63435"}}
                            >
                                Login
                            </button>
                            <button 
                                onclick={() => handleMobileLink('/register')}
                                class="text-white h-10 rounded-sm bg-black border border-black hover:bg-gray-900 w-full bg-lue-400"
                            >
                                Register
                            </button>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nav;