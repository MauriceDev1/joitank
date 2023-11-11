import { Component } from "solid-js";

const Contact:Component = () => {
    return (
        <div class="w-full h-screen" style={{"background-color":'#EEDFAF'}}>
            <div class="w-11/12 md:w-10/12 m-auto flex flex-wrap">
                <div class="w-1/2">
                    <label>Name and Surname</label>
                    <input 
                        type="text" 
                        class="w-full h-10 rounded border border-gray-300"
                    />
                </div>
                <div class="w-1/2">
                    <div class="p-5">
                        <p>Mixoni (PTY) Ltd  is 100% women owned enterprise which seeks to provide back up water solution services to commercial, industrial and domestic clients across Gauteng.</p>
                    </div>
                    <div class="w-full">
                        <div class="w-1/2 m-auto">
                            <h1 class="text-2xl py-2 text-center font-semibold">We also do</h1>
                            <p class="text-center">
                                Cleaning Services<br></br>
                                Construction<br></br>
                                Training  
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;