import financeit from './financeit.jpg'
import avanir from './avanir.jpeg'
import astri from './astri.jpeg'
import { useState } from 'react'
import './styles.css'

const Timeline = (props) => {
    const [showFinanceit, setShowFinanceit] = useState(true)
    const [showAvanir, setShowAvanir] = useState(false)
    const [showAstri, setShowAstri] = useState(false)

    const clickFinanceit = () => {
        setShowAstri(false)
        setShowAvanir(false)
        setShowFinanceit(true)
    }

    const clickAvanir = () => {
        setShowFinanceit(false)
        setShowAstri(false)
        setShowAvanir(true)
    }

    const clickAstri = () => {
        setShowFinanceit(false)
        setShowAvanir(false)
        setShowAstri(true)
    }

    return (
        <div className='sm:grid flex flex-col sm:grid-cols-[30%_70%] sm:grid-rows-1'>
            <div className='w-full'>
                <div className="divide-y divide-gray-600 bg-black bg-opacity-40 rounded-lg shadow-md mb-4 sm:mb-0">
                    <button className={`topTimeline flex justify-between gap-x-6 py-5 w-full px-5 ${showFinanceit ? 'bg-black' : ''}`} onClick={clickFinanceit} onMouseEnter={props.textEnter} onMouseLeave={props.textLeave}>
                        <div className="flex min-w-0 gap-x-4">
                            <img className="h-16 w-16 flex-none  bg-gray-50" src={financeit} alt=""/>
                            <div className="min-w-0 text-left">
                                <p className='text-white font-semibold'>
                                    Software Developer Co-op
                                </p>
                                <p className="text-sm font-semibold leading-6 text-white">Financeit</p>
                                <p className="mt-1 break-words text-xs leading-5 text-gray-400">Toronto, ON, Canada</p>
                            </div>
                        </div>
                    </button>

                    <button className={`flex justify-between w-full gap-x-6 py-5 px-5 ${showAvanir ? 'bg-black' : ''}`} onClick={clickAvanir} onMouseEnter={props.textEnter} onMouseLeave={props.textLeave}>
                        <div className="flex min-w-0 gap-x-4">
                            <img className="h-16 w-16 flex-none  bg-gray-50" src={avanir} alt=""/>
                            <div className="min-w-0 text-left">
                                <p className='text-white font-semibold'>
                                    Information Technology Intern
                                </p>
                                <p className="text-sm break-words font-semibold leading-6 text-white">Avanir Pharmaceuticals</p>
                                <p className="mt-1 break-words text-xs leading-5 text-gray-400">Aliso Viejo, CA, USA</p>
                            </div>
                        </div>   
                    </button>

                    <button className={`bottomTimeline flex justify-between gap-x-6 w-full py-5 px-5 ${showAstri ? 'bg-black' : ''}`}onClick={clickAstri} onMouseEnter={props.textEnter} onMouseLeave={props.textLeave}>
                        <div className="flex min-w-0 gap-x-4">
                            <img className="h-16 w-16 flex-none  bg-gray-50" src={astri} alt=""/>
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
            <div className='sm:ml-5 rounded-lg bg-black bg-opacity-40 text-white px-8 py-8'>
                <div onMouseEnter={props.textEnter} onMouseLeave={props.textLeave}>
                    <div className={`${showFinanceit ? 'fadeInInfo' : 'fadeOutInfo'}`}>
                        <div className='grid grid-cols-2 mb-4 font-bold'>
                            <p>Software Developer Co-op</p>
                            <p className='text-right'>May 2023 - Present</p>
                        </div>
                        <ul className='list-disc pl-4'>
                            <li className='mb-2'>Developed and refined 10+ new features based on consumer/merchant requests using Ruby on Rails and Ember.js, reducing $500k+ in loan fraud losses and improving application usability.</li>
                            <li className='mb-2'>Fixed 10+ bugs on production and deleted 7000+ lines of code utilizing Rollbar and Datadog observability tools, cleaning up Financeit’s product code base.</li>
                            <li className='mb-2'>Restructured Financeit’s product with senior developers to use a new Equifax API for credit score and loan fraud checks, potentially saving $1M+ in loan funding losses.</li>
                            <li className='mb-4'>Discussed learnings with the development department each quarter and led backlog grooming sessions.</li>
                        </ul>
                        <p className='font-bold'>Tech Stack & Tools:</p>
                        <p>Ruby on Rails, Ember.js, Datadog, Rollbar, Looker, Gitlab, Github</p>
                    </div>
                    <div className={showAvanir ? 'fadeInInfo' : 'fadeOutInfo'}>
                        <div className='grid grid-cols-2 mb-4 font-bold'>
                            <p>Information Technology Intern</p>
                            <p className='text-right'>June 2022 - August 2022</p>
                        </div>
                        <ul className='list-disc pl-4'>
                            <li className='mb-2'>Developed a real-time application using Power BI to calculate statistics and refine the process of identifying 500+ devices in need of service.</li>
                            <li className='mb-2'>United with the cybersecurity division to link software vulnerability detection and malware prevention software statuses of company computers into the application, enabling 1100+ vulnerabilities to be reported.</li>
                            <li className='mb-4'>Integrated the Power BI application into creating reports for executive leadership and generating action list items for IT employees weekly, saving 8 man-hours weekly.</li>
                        </ul>
                        <p className='font-bold'>Tech Stack & Tools:</p>
                        <p>Power BI, Excel, Power Automate, Rapid7</p>
                    </div>
                    <div className={showAstri ? 'fadeInInfo' : 'fadeOutInfo'}>
                        <div className='grid grid-cols-2 mb-4 font-bold'>
                            <p>Software Engineer Intern</p>
                            <p className='text-right'>August 2019 - June 2020</p>
                        </div>
                        <ul className='list-disc pl-4'>
                            <li className='mb-2'>Designed a platformer video game using C# and Unity, collaborating with a team of interns and 4 software engineers.</li>
                            <li className='mb-2'>Created the character objects with 15+ animations and scripted the movements for 5+ in-game enemies.</li>
                            <li className='mb-4'>Presented the game to the program director and is used as content and examples for the research institute and its blockchain system.</li>
                        </ul>
                        <p className='font-bold'>Tech Stack & Tools:</p>
                        <p>C#, Unity</p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Timeline;