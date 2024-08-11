import Timeline from "./Timeline";
import Skills from "./Skills"
import ShowOnScroll from "../ShowOnScroll";

const Experience = (props) => {
  return (
    <div className="min-h-screen mt-20 pt-6" id='Experience'>
        <ShowOnScroll>
            <div className="flex ml-[10%] text-white text-6xl font-bold flex mb-8">
                <h1 onMouseEnter={props.textEnter} onMouseLeave={props.textLeave}>Industry Experience</h1>
            </div>
            <div className="mx-[10%] mt-10">
                <Timeline textEnter={props.textEnter} textLeave={props.textLeave}/>
            </div>
        </ShowOnScroll>
        <div className="mx-[10%] mt-10">
            <ShowOnScroll>
                <Skills textEnter={props.textEnter} textLeave={props.textLeave}/>
            </ShowOnScroll>
        </div>
    </div>

    
    
    );
};

export default Experience;
