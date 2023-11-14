import { Component, createSignal } from "solid-js";
import { FaSolidEnvelope, FaSolidLocationDot, FaSolidPhone } from 'solid-icons/fa'

const Contact:Component = () => {
    const [formData, setFormData] = createSignal({
        names: '',
        address: '',
        email: '',
        contact: '',
        size: ''
    });
    const [formDataError, setFormDataError] = createSignal({
        names: '',
        address: '',
        email: '',
        contact: '',
        size: ''
    });

    const submitData = () => {
        alert(JSON.stringify(formData()));
    };

    return (
        <div class="w-full sm:h-screen py-16" id="contact" style={{"background-color":'#EEDFAF'}}>
            <div class="w-11/12 md:w-10/12 m-auto flex flex-wrap">
                <div class="w-full sm:w-1/2 flex flex-col gap-3">
                    <div>

                    </div>
                    <label>Name and Surname</label>
                    <input 
                        type="text" 
                        name="names"
                        value={formData().names ? formData().names : ''}
                        onChange={(e) => setFormData((prv) => ({...prv,names: e.currentTarget.value}))}
                        onInput={() => setFormDataError((prv) => ({...prv,names:''}))}
                        placeholder={formDataError().names ? formDataError().names :"Enter Name and Surname"}
                        class="w-full h-10 rounded border border-gray-300 px-2"
                    />
                    <label>Address of Installation</label>
                    <textarea 
                        name="address"
                        id="" 
                        cols="30" 
                        rows="4"
                        value={formData().address ? formData().address : ''}
                        onChange={(e) => setFormData((prv) => ({...prv,address: e.currentTarget.value}))}
                        onInput={() => setFormDataError((prv) => ({...prv,address:''}))}
                        placeholder={formDataError().address ? formDataError().address :"Enter Address"}
                        class="w-full resize-none rounded border border-gray-300 p-2"
                    >
                    </textarea>
                    <label>Email Address</label>
                    <input 
                        type="email" 
                        name="email"
                        value={formData().address ? formData().email : ''}
                        onChange={(e) => setFormData((prv) => ({...prv,email: e.currentTarget.value}))}
                        onInput={() => setFormDataError((prv) => ({...prv,email:''}))}
                        placeholder={formDataError().email ? formDataError().email :"Enter Email"}
                        class="w-full h-10 rounded border border-gray-300 px-2"
                    />
                    <label>Contact Number</label>
                    <input 
                        type="tel"
                        name="contact"
                        value={formData().contact ? formData().contact : ''}
                        onChange={(e) => setFormData((prv) => ({...prv,contact: e.currentTarget.value}))}
                        onInput={() => setFormDataError((prv) => ({...prv,contact:''}))}
                        placeholder={formDataError().contact ? formDataError().contact :"Enter contact number"}
                        class="w-full h-10 rounded border border-gray-300 px-2"
                    />
                    <label>Which Tank do you need?</label>
                    <div class="w-full flex flex-wrap">
                        <div class="w-1/3 flex gap-4">
                            <input
                                name="size" 
                                type="radio" 
                                value={800}
                                class="h-5 w-5"
                            />
                            <p>800L</p>
                        </div>
                        <div class="w-1/3 flex gap-4">
                            <input
                                name="size" 
                                type="radio" 
                                value={1000}
                                class="h-5 w-5" 
                            />
                            <p>1000L</p>
                        </div>
                        <div class="w-1/3 flex gap-4">
                            <input
                                name="size" 
                                type="radio" 
                                value={2000}
                                class="h-5 w-5" 
                            />
                            <p>2000L</p>
                        </div>
                        <div class="w-1/3 flex gap-4">
                            <input
                                name="size" 
                                type="radio" 
                                value={2500}
                                class="h-5 w-5" 
                            />
                            <p>2500L</p>
                        </div>
                        <div class="w-1/3 flex gap-4">
                            <input
                                name="size" 
                                type="radio" 
                                value={5000}
                                class="h-5 w-5" 
                            />
                            <p>5000L</p>
                        </div>
                        <div class="w-1/3 flex gap-4">
                            <input
                                name="size" 
                                type="radio" 
                                value={10000}
                                class="h-5 w-5"
                             />
                            <p>10000L</p>
                        </div>
                    </div>
                    <button
                        onClick={submitData} 
                        class="bg-black text-white h-10 rounded w-full mt-4"
                    >
                        Submit
                    </button>
                </div>
                <div class="w-full sm:w-1/2">
                    <div class="p-5">
                        <p class="text-xl">Mixoni (PTY) Ltd  is 100% women owned enterprise which seeks to provide back up water solution services to commercial, industrial and domestic clients across Gauteng.</p>
                    </div>
                    <div class="w-full">
                        <div class="w-1/2 m-auto">
                            <h1 class="text-3xl py-4 text-center font-semibold">We also do</h1>
                            <p class="text-center text-xl">
                                Cleaning Services<br></br>
                                Construction<br></br>
                                Training  
                            </p>
                            <h1 class="text-3xl pt-5 pb-3 text-center mb-5 font-semibold">Get intouch</h1>
                            <div class="flex flex-col gap-6 text-center">
                                <p class="text-xl flex items-center gap-5 m-auto"><FaSolidPhone />078 129 2862</p>
                                <p class="text-xl flex items-center gap-5 m-auto"><FaSolidEnvelope />bookings@mixoni.org</p>
                                <p class="text-xl flex items-center gap-5 m-auto"><FaSolidLocationDot />68 Monument Drive,<br></br>Monavoni, Centurion</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;