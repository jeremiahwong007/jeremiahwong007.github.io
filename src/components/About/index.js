import ContactIcons from "../ContactIcons";
import vinyl from "./toppng.com-color-vinyl-png-clear-vinyl-record-transparent-500x500.png"
import profile from "./Screenshot 2023-09-12 at 11.16.59 PM.png"
import MusicPlayer from '../MusicPlayer'
import { ImLocation, ImOffice} from 'react-icons/im'
import { MdSchool } from 'react-icons/md'
import "./styles.scss"

const About = (props) => {
  return (
    <div className='h-full overflow-hidden pt-20 sm:pt-14 mb-40 sm:flex sm:flex-end min-h-screen' id='About'>
        <div className="flex items-center sm:w-[60%] mb-10 sm:mb-0">
            <div className="text-left ml-[10%] mr-[10%] my-auto text-white">
                <h1 className="text-6xl font-bold inline-block mb-8" onMouseEnter={props.textEnter} onMouseLeave={props.textLeave}>Jeremy Wong</h1>
                <br></br>
                <br></br>
                <div>
                    <div className="flex flex-row" >
                        <p onMouseEnter={props.textEnter} onMouseLeave={props.textLeave}>
                            Software Developer
                        </p>
                    </div>
                    <br></br>
                    <div className="flex flex-row">
                        <p onMouseEnter={props.textEnter} onMouseLeave={props.textLeave}>
                            BSc. Computer Science Student at the University of Toronto
                        </p>
                    </div>                
                    <br></br>
                    <br></br>
                    <p onMouseEnter={props.textEnter} onMouseLeave={props.textLeave}>
                        Skilled developer with a proven track record in various sectors, including higher education, finance, and personal projects. Proficient in programming languages such as Python, Ruby, JavaScript, and Java, and always eager to explore and adapt to emerging technologies.
                    </p>
                    <br></br>
                    <ContactIcons textEnter={props.textEnter} textLeave={props.textLeave}/>
                </div>
            </div>
        </div>
        <div className="flex items-center sm:px-5 sm:pl-0 sm:w-[40%] ml-[10%] mr-[10%] sm:mx-0">
            <div className="text-center rounded-xl bg-black bg-opacity-40 shadow-md px-4 py-4 w-full sm:w-[90%]">
                <div className="block sm:mb-8 flex flex-row justify-center">
                    <img onMouseEnter={props.textEnter} onMouseLeave={props.textLeave} className="profile mr-3 shadow-xl" src={profile} alt="profile"></img>
                    <div className="flex flex-col">
                        <div className="text-left p-1 text-white text-sm focus:outline-none flex">
                            <ImOffice className="h-4 w-4 mr-2" aria-hidden="true" onMouseEnter={props.textEnter} onMouseLeave={props.textLeave}/>
                            <p onMouseEnter={props.textEnter} onMouseLeave={props.textLeave}>
                                Financeit
                            </p>
                        </div>
                        <div className="text-left p-1 text-white text-sm focus:outline-none flex">
                            <MdSchool className="h-5 w-5 mr-1" aria-hidden="true" onMouseEnter={props.textEnter} onMouseLeave={props.textLeave}/>
                            <p onMouseEnter={props.textEnter} onMouseLeave={props.textLeave}>
                                University of Toronto
                            </p>
                        </div>
                        <div className="text-left p-1 text-white text-sm focus:outline-none flex">
                            <ImLocation className="h-5 w-5 mr-1" aria-hidden="true" onMouseEnter={props.textEnter} onMouseLeave={props.textLeave}/>
                            <p onMouseEnter={props.textEnter} onMouseLeave={props.textLeave}>
                                Toronto, ON
                            </p>
                        </div>
                    </div>
                </div>
                <img onMouseEnter={props.textEnter} onMouseLeave={props.textLeave} id="rainbowVinyl" className="vinyl mt-5 mx-auto" src={vinyl} alt="vinyl"></img>
                <MusicPlayer textEnter={props.textEnter} textLeave={props.textLeave}/>
            </div>
        </div>
    </div>
    
    
    );
};

export default About;
