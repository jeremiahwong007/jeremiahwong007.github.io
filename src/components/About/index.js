import ContactIcons from "../ContactIcons";
import profile from "./Screenshot 2023-09-12 at 11.16.59 PM.png"
import "./styles.scss"

const About = (props) => {
  return (
    <div className='h-full overflow-hidden pt-4 sm:pt-0 pb-16 mb-0 sm:flex sm:flex-end min-h-screen' id='About'>
        <div className="flex items-center sm:w-[60%] mb-10 sm:mb-0">
            <div className="text-left ml-[10%] mr-[10%] my-auto text-white">
                <h1 className="text-6xl font-normal font-serif inline-block mb-8" onMouseEnter={props.textEnter} onMouseLeave={props.textLeave}>Jeremy Wong</h1>
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
        <div className="hidden sm:flex items-center justify-center sm:w-[40%] sm:mx-0 sm:pr-[5%]">
            <div className="w-full max-w-xs">
                <img onMouseEnter={props.textEnter} onMouseLeave={props.textLeave} className="w-full aspect-square object-cover rounded-lg shadow-2xl" src={profile} alt="profile"></img>
            </div>
        </div>
    </div>
    
    
    );
};

export default About;
