import { defaultConfig } from "next/dist/server/config-shared"
import Image from "next/image"

const Hero = () => {
    return (
        <section className="py-14">
            <div className="max-w-screen-xl mx-auto md:px-8">
                <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
                    <div className="flex-1 sm:hidden lg:block">
                        <img src="https://gdchandwara.edu.in/images/Principal_dilruba.PNG" className="md:max-w-lg sm:rounded-lg"  alt="Principal Image" />
                    </div>
                    <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
                        <h3 className="text-indigo-600 font-semibold">
                        Govt Degree College Handwara <span className="text-red-600"> NAAC </span>Accredited <span className="text-red-600">Grade B</span>
                        </h3>
                        <hr/>
                        <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Principal&apos;s Message
                        </p>
                        <p className="mt-3 text-gray-600">
                        <i>&quot;Education is the most powerful weapon which you can use to change the world &quot; <span className="text-blue-600">__Nelson Mandela</span></i>
                        <br/>I welcome you all to this great institution of learning which has molded the destiny of thousands of students over the last few decades, for a better tomorrow. As we step into new academic session 2020-21, filled with hope and dreams of touching new heights.
                        </p>
                        <a href="javascript:void(0)" className="inline-flex gap-x-1 items-center text-indigo-600 hover:text-indigo-500 duration-150 font-medium">
                        Read full message
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero