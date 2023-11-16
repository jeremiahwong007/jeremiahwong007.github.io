import Timeline from "./Timeline";
import Skills from "./Skills"

const Experience = (props) => {
  return (
    <div className="min-h-screen mt-20 pt-6" id='Experience'>
        <div className="flex ml-[10%] text-white text-6xl font-bold flex mb-8">
            <h1 onMouseEnter={props.textEnter} onMouseLeave={props.textLeave}>Industry Experience</h1>
        </div>
        <div className="mx-[10%] mt-10">
            <Timeline textEnter={props.textEnter} textLeave={props.textLeave}/>
        </div>
        <div className="mx-[10%] mt-10">
            <Skills textEnter={props.textEnter} textLeave={props.textLeave}/>
        </div>
        
    </div>

    
    
    );
};

export default Experience;
