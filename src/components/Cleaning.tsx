import { Component } from "solid-js";
import CleaningImg from '../assets/images/6.png'

const Cleaning: Component = () => {
    return (
        <div class="w-full py-16">
            <div class="w-10/12 m-auto">
                <div>
                    <h1 class="text-center text-3xl pb-5 font-bold">
                        Cleaning Services
                    </h1>
                    <h3 class="text-center text-xl pb-5 font-semibold">
                        We offer superior commercial and private cleaning services
                    </h3>
                </div>
                <div class="w-full flex flex-wrap sm:flex-nowrap sm:gap-10">
                    <div class="w-full sm:w-1/2">
                        <p>
                            Our cleaning services are provided on a
                            contractual or once-off basis
                            and we offer cleaning services for buildings,
                            schools, government
                            facilities, shopping centres and institutions.
                        </p>
                        <h3 class="py-5 text-2xl font-bold">
                            We offer:
                        </h3>
                        <p>
                            Post construction cleaning
                        </p>
                        <p>
                            Pre-occupation and end of tenancy cleaning
                        </p>
                        <p>
                            General cleaning
                        </p>
                        <p>
                            Window cleaning
                        </p>
                        <p>
                            Commercial cleaning services
                        </p>
                    </div>
                    <div class="w-full sm:w-1/2">
                        <img src={CleaningImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cleaning;
