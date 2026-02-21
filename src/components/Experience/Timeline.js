import financeit from './financeit.jpg'
import avanir from './avanir.jpeg'
import astri from './astri.jpeg'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './styles.css'

const Timeline = (props) => {
    const [activeCompany, setActiveCompany] = useState("Financeit")

    return (
        <div className='sm:grid flex flex-col sm:grid-cols-[30%_70%] sm:grid-rows-1'>
            <div className='w-full'>
                <div className="divide-y divide-gray-600 bg-white/5 backdrop-blur-md rounded-lg shadow-md mb-4 sm:mb-0">
                    <button className={`topTimeline flex justify-between gap-x-6 py-5 w-full px-5 ${activeCompany === "Financeit" ? 'bg-white/10 border-l-2 border-purple-500' : ''}`} onClick={() => setActiveCompany("Financeit")} onMouseEnter={props.textEnter} onMouseLeave={props.textLeave}>
                        <div className="flex min-w-0 gap-x-4">
                            <img className="h-16 w-16 flex-none rounded-lg object-cover" src={financeit} alt=""/>
                            <div className="min-w-0 text-left">
                                <p className='text-white font-semibold'>
                                    Software Developer Co-op
                                </p>
                                <p className="text-sm font-semibold leading-6 text-white">Financeit</p>
                                <p className="mt-1 break-words text-xs leading-5 text-gray-400">Toronto, ON, Canada</p>
                            </div>
                        </div>
                    </button>

                    <button className={`flex justify-between w-full gap-x-6 py-5 px-5 ${activeCompany === "Avanir" ? 'bg-white/10 border-l-2 border-purple-500' : ''}`} onClick={() => setActiveCompany("Avanir")} onMouseEnter={props.textEnter} onMouseLeave={props.textLeave}>
                        <div className="flex min-w-0 gap-x-4">
                            <img className="h-16 w-16 flex-none rounded-lg object-cover" src={avanir} alt=""/>
                            <div className="min-w-0 text-left">
                                <p className='text-white font-semibold'>
                                    Information Technology Intern
                                </p>
                                <p className="text-sm break-words font-semibold leading-6 text-white">Avanir Pharmaceuticals</p>
                                <p className="mt-1 break-words text-xs leading-5 text-gray-400">Aliso Viejo, CA, USA</p>
                            </div>
                        </div>
                    </button>

                    <button className={`bottomTimeline flex justify-between gap-x-6 w-full py-5 px-5 ${activeCompany === "Astri" ? 'bg-white/10 border-l-2 border-purple-500' : ''}`} onClick={() => setActiveCompany("Astri")} onMouseEnter={props.textEnter} onMouseLeave={props.textLeave}>
                        <div className="flex min-w-0 gap-x-4">
                            <img className="h-16 w-16 flex-none rounded-lg object-cover" src={astri} alt=""/>
                            <div className="min-w-0 text-left">
                                <p className='text-white font-semibold'>
                                    Software Engineer Intern
                                </p>
                                <p className="text-sm font-semibold leading-6 text-white">ASTRI</p>
                                <p className="mt-1 break-words text-xs leading-5 text-gray-400">Hong Kong SAR, China</p>
                            </div>
                        </div>
                    </button>
                </div>
            </div>
            <div className='sm:ml-5 rounded-lg bg-white/5 backdrop-blur-md text-white px-8 py-8'>
                <div onMouseEnter={props.textEnter} onMouseLeave={props.textLeave}>
                    <AnimatePresence mode="wait">
                        {activeCompany === "Financeit" && (
                            <motion.div
                                key="Financeit"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                            >
                                <div className='grid grid-cols-2 mb-4 font-bold'>
                                    <p>Software Developer Co-op</p>
                                    <p className='text-right'>May 2023 - Aug 2024</p>
                                </div>
                                <ul className='list-disc pl-4'>
                                    <li className='mb-2'>Developed and enhanced multi-tenant application features using Ruby on Rails and Ember.js in an agile team, improving usability and reducing $500k+ in loan fraud losses.</li>
                                    <li className='mb-2'>Optimized Financeit's product code base by utilizing Rollbar and Datadog to fix 15+ long-standing production bugs and delete 10,000+ lines of code, significantly reducing tech debt.</li>
                                    <li className='mb-2'>Restructured Financeit's product with senior developers to use a new third-party API for credit score and loan fraud checks, projected to save $1M+ in loan funding losses.</li>
                                    <li className='mb-2'>Resolved 25+ urgent bugs and issues during 2 months of live support, ensuring uninterrupted and seamless user experience.</li>
                                    <li className='mb-4'>Engineered a new profit-generating feature in the Financeit application with senior developers, estimated to generate at least $1M+ in gross revenue in the first year.</li>
                                </ul>
                                <p className='font-bold mb-2'>Tech Stack & Tools:</p>
                                <div className='flex flex-wrap gap-2'>
                                    {["Ruby on Rails", "Ember.js", "Datadog", "Rollbar", "Looker", "Gitlab", "Github"].map((tech) => (
                                        <span key={tech} className="px-3 py-1 text-sm rounded-full bg-white/10 border border-white/10 backdrop-blur-sm">{tech}</span>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                        {activeCompany === "Avanir" && (
                            <motion.div
                                key="Avanir"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                            >
                                <div className='grid grid-cols-2 mb-4 font-bold'>
                                    <p>Information Technology Intern</p>
                                    <p className='text-right'>June 2022 - August 2022</p>
                                </div>
                                <ul className='list-disc pl-4'>
                                    <li className='mb-2'>Developed a real-time application using Power BI to calculate statistics and refine the process of identifying 500+ company devices in need of service.</li>
                                    <li className='mb-2'>Incorporated vulnerability detection and malware prevention into the application, collaborating with the cybersecurity division, and enabled the reporting of 1100+ vulnerabilities.</li>
                                    <li className='mb-4'>Integrated the Power BI application into the reporting process for executive leadership and action list item generation for IT employees, saving 8 person-hours bi-weekly.</li>
                                </ul>
                                <p className='font-bold mb-2'>Tech Stack & Tools:</p>
                                <div className='flex flex-wrap gap-2'>
                                    {["Power BI", "Excel", "Power Automate", "Rapid7"].map((tech) => (
                                        <span key={tech} className="px-3 py-1 text-sm rounded-full bg-white/10 border border-white/10 backdrop-blur-sm">{tech}</span>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                        {activeCompany === "Astri" && (
                            <motion.div
                                key="Astri"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                            >
                                <div className='grid grid-cols-2 mb-4 font-bold'>
                                    <p>Software Engineer Intern</p>
                                    <p className='text-right'>August 2019 - June 2020</p>
                                </div>
                                <ul className='list-disc pl-4'>
                                    <li className='mb-2'>Designed a platformer video game using C# and Unity, collaborating with a team of interns and 4 software engineers.</li>
                                    <li className='mb-2'>Created the character objects with 15+ animations and scripted the movements for 5+ in-game enemies.</li>
                                    <li className='mb-4'>Presented the game to the program director and is used as content and examples for the research institute and its blockchain system.</li>
                                </ul>
                                <p className='font-bold mb-2'>Tech Stack & Tools:</p>
                                <div className='flex flex-wrap gap-2'>
                                    {["C#", "Unity"].map((tech) => (
                                        <span key={tech} className="px-3 py-1 text-sm rounded-full bg-white/10 border border-white/10 backdrop-blur-sm">{tech}</span>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}

export default Timeline;
