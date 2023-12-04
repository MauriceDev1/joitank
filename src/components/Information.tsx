import { Component } from "solid-js";
import InformationImg from '../assets/images/4.png'

const Information: Component = () => {
    return (
        <div class="w-full py-16" id="information">
            <div class="w-10/12 m-auto">
                <div>
                    <h1 class="text-center text-3xl pb-5 font-bold">
                        Information Technology
                    </h1>
                    <h3 class="text-center text-xl pb-5 font-semibold">
                        All our qualifications are aligned with SAQA registration with a minimum 130 credits.
                        Our courses range from NQF 3-5
                    </h3>
                </div>
                <div class="w-full flex flex-wrap sm:flex-nowrap gap-10">
                    <div class="w-full sm:w-1/2">
                        <p>
                            We are MICT-accredited and provide training that
                            brings theory together with practicality to ensure
                            our learners are workplace ready.
                        </p>
                        <p>
                            Our National Certificate in IT: End User
                            Computing at NQF Level 3, is intended for
                            learners already employed or new learners entering
                            the workplace
                        </p>
                        <h3 class="py-5 text-2xl font-bold">
                            We offer:
                        </h3>
                        <p>
                            End user computing
                        </p>
                        <p>
                            Microsoft Office Training
                        </p>
                        <p>
                            Media and advertising
                        </p>
                        <p>
                            Systems development
                        </p>
                    </div>
                    <div class="w-full sm:w-1/2">
                        <img src={InformationImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Information;