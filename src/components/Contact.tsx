import { Component } from "solid-js";

const Contact:Component = () => {
    return (
        <div class="w-full sm:h-screen py-16" style={{"background-color":'#EEDFAF'}}>
            <div class="w-11/12 md:w-10/12 m-auto flex flex-wrap">
                <div class="w-full sm:w-1/2 flex flex-col gap-3">
                    <label>Name and Surname</label>
                    <input 
                        type="text" 
                        name="names"
                        placeholder="Enter name and surname"
                        class="w-full h-10 rounded border border-gray-300 px-2"
                    />
                    <label>Address of Installation</label>
                    <textarea 
                        name="address"
                        id="" 
                        cols="30" 
                        rows="4"
                        placeholder="Enter address here"
                        class="w-full resize-none rounded border border-gray-300 p-2"
                    >
                    </textarea>
                    <label>Email Address</label>
                    <input 
                        type="email" 
                        placeholder="Enter email address"
                        class="w-full h-10 rounded border border-gray-300 px-2"
                    />
                    <label>Contact Number</label>
                    <input 
                        type="tel"
                        placeholder="Enter telephone number" 
                        class="w-full h-10 rounded border border-gray-300 px-2"
                    />
                    <label>Which Tank do you need?</label>
                    <div class="w-full flex flex-wrap">
                        <div class="w-1/3 flex gap-4">
                            <input type="radio" value={800}/>
                            <p>800L</p>
                        </div>
                        <div class="w-1/3 flex gap-4">
                            <input type="radio" value={1000} />
                            <p>1000L</p>
                        </div>
                        <div class="w-1/3 flex gap-4">
                            <input type="radio" value={2000} />
                            <p>2000L</p>
                        </div>
                        <div class="w-1/3 flex gap-4">
                            <input type="radio" value={2500} />
                            <p>2500L</p>
                        </div>
                        <div class="w-1/3 flex gap-4">
                            <input type="radio" value={5000} />
                            <p>5000L</p>
                        </div>
                        <div class="w-1/3 flex gap-4">
                            <input type="radio" value={10000} />
                            <p>10000L</p>
                        </div>
                    </div>
                    <button class="bg-black text-white h-10 rounded w-full mt-4">Submit</button>
                </div>
                <div class="w-full sm:w-1/2">
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
                            <h1 class="text-2xl py-3 text-center font-semibold">Get intouch</h1>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;