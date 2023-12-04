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
        <div class="w-full sm:h-screen py-16" id="contact">
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
                        class="w-full h-10 rounded border border-red-500 px-2"
                    />
                    <label>Email Address</label>
                    <input 
                        type="email" 
                        name="email"
                        value={formData().address ? formData().email : ''}
                        onChange={(e) => setFormData((prv) => ({...prv,email: e.currentTarget.value}))}
                        onInput={() => setFormDataError((prv) => ({...prv,email:''}))}
                        placeholder={formDataError().email ? formDataError().email :"Enter Email"}
                        class="w-full h-10 rounded border border-red-500 px-2"
                    />
                    <label>Contact Number</label>
                    <input 
                        type="tel"
                        name="contact"
                        value={formData().contact ? formData().contact : ''}
                        onChange={(e) => setFormData((prv) => ({...prv,contact: e.currentTarget.value}))}
                        onInput={() => setFormDataError((prv) => ({...prv,contact:''}))}
                        placeholder={formDataError().contact ? formDataError().contact :"Enter contact number"}
                        class="w-full h-10 rounded border px-2 border-red-500"
                    />
                    <label>Service Query</label>
                    <select>
                        <option value="">Select</option>
                        <option value="">Select</option>
                        <option value="">Select</option>
                        <option value="">Select</option>
                    </select>
                    <input 
                        type="tel"
                        name="contact"
                        value={formData().contact ? formData().contact : ''}
                        onChange={(e) => setFormData((prv) => ({...prv,contact: e.currentTarget.value}))}
                        onInput={() => setFormDataError((prv) => ({...prv,contact:''}))}
                        placeholder={formDataError().contact ? formDataError().contact :"Enter contact number"}
                        class="w-full h-10 rounded border px-2 border-red-500"
                    />
                    <label>Tell us what you need</label>
                    <textarea 
                        name="address"
                        id="" 
                        cols="30" 
                        rows="4"
                        value={formData().address ? formData().address : ''}
                        onChange={(e) => setFormData((prv) => ({...prv,address: e.currentTarget.value}))}
                        onInput={() => setFormDataError((prv) => ({...prv,address:''}))}
                        placeholder={formDataError().address ? formDataError().address :"Enter message"}
                        class="w-full resize-none rounded border border-red-500 p-2"
                    >
                    </textarea>
                    <button
                        onClick={submitData} 
                        class="bg-red-500 text-white h-10 rounded w-full mt-4"
                    >
                        Submit
                    </button>
                </div>
                <div class="w-full sm:w-1/2">
                    <div class="w-full">
                        <div class="w-1/2 m-auto">
                            <h1 class="text-4xl pb-10 text-center font-semibold">Get intouch</h1>
                            <div class="flex flex-col gap-10 text-center">
                                <p class="text-xl flex items-center gap-5 m-auto"><FaSolidPhone />010 634 4027</p>
                                <p class="text-xl flex items-center gap-5 m-auto"><FaSolidPhone />078 129 2862</p>
                                <p class="text-xl flex items-center gap-5 m-auto"><FaSolidEnvelope />bookings@mixoni.org</p>
                                <p class="text-xl flex items-center gap-5 m-auto"><FaSolidLocationDot />68 Monument Drive,<br></br>Monavoni, Centurion</p>
                                <p class="text-xl flex items-center gap-5 m-auto"><FaSolidLocationDot />112 Krombek Street,<br></br>Birch Acres,<br></br>Kempton Park</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;