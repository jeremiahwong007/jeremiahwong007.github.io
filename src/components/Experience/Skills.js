

const Skills = (props) => {

    return (
        <div className="text-white w-full mt-20">
            <div className="flex flex-col gap-8 mt-8">
                <div>
                    <p className="font-bold text-lg" onMouseEnter={props.textEnter} onMouseLeave={props.textLeave}>
                        Languages
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3" onMouseEnter={props.textEnter} onMouseLeave={props.textLeave}>
                        <span className="px-3 py-1 text-sm rounded-full bg-white/10 border border-white/10 backdrop-blur-sm">Python</span>
                        <span className="px-3 py-1 text-sm rounded-full bg-white/10 border border-white/10 backdrop-blur-sm">Java</span>
                        <span className="px-3 py-1 text-sm rounded-full bg-white/10 border border-white/10 backdrop-blur-sm">C</span>
                        <span className="px-3 py-1 text-sm rounded-full bg-white/10 border border-white/10 backdrop-blur-sm">JavaScript</span>
                        <span className="px-3 py-1 text-sm rounded-full bg-white/10 border border-white/10 backdrop-blur-sm">Ruby</span>
                        <span className="px-3 py-1 text-sm rounded-full bg-white/10 border border-white/10 backdrop-blur-sm">SQL</span>
                        <span className="px-3 py-1 text-sm rounded-full bg-white/10 border border-white/10 backdrop-blur-sm">C#</span>
                        <span className="px-3 py-1 text-sm rounded-full bg-white/10 border border-white/10 backdrop-blur-sm">HTML/CSS</span>
                        <span className="px-3 py-1 text-sm rounded-full bg-white/10 border border-white/10 backdrop-blur-sm">R</span>
                        <span className="px-3 py-1 text-sm rounded-full bg-white/10 border border-white/10 backdrop-blur-sm">MIPS Assembly</span>
                        <span className="px-3 py-1 text-sm rounded-full bg-white/10 border border-white/10 backdrop-blur-sm">VBA</span>
                    </div>
                </div>

                <div>
                    <p className="font-bold text-lg" onMouseEnter={props.textEnter} onMouseLeave={props.textLeave}>
                        Frameworks & Tools
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3" onMouseEnter={props.textEnter} onMouseLeave={props.textLeave}>
                        <span className="px-3 py-1 text-sm rounded-full bg-white/10 border border-white/10 backdrop-blur-sm">Django</span>
                        <span className="px-3 py-1 text-sm rounded-full bg-white/10 border border-white/10 backdrop-blur-sm">Ruby on Rails</span>
                        <span className="px-3 py-1 text-sm rounded-full bg-white/10 border border-white/10 backdrop-blur-sm">Ember.js</span>
                        <span className="px-3 py-1 text-sm rounded-full bg-white/10 border border-white/10 backdrop-blur-sm">Git</span>
                        <span className="px-3 py-1 text-sm rounded-full bg-white/10 border border-white/10 backdrop-blur-sm">PostgreSQL</span>
                        <span className="px-3 py-1 text-sm rounded-full bg-white/10 border border-white/10 backdrop-blur-sm">Firebase</span>
                        <span className="px-3 py-1 text-sm rounded-full bg-white/10 border border-white/10 backdrop-blur-sm">Express.js</span>
                        <span className="px-3 py-1 text-sm rounded-full bg-white/10 border border-white/10 backdrop-blur-sm">Datadog</span>
                        <span className="px-3 py-1 text-sm rounded-full bg-white/10 border border-white/10 backdrop-blur-sm">Rollbar</span>
                        <span className="px-3 py-1 text-sm rounded-full bg-white/10 border border-white/10 backdrop-blur-sm">Gitlab</span>
                        <span className="px-3 py-1 text-sm rounded-full bg-white/10 border border-white/10 backdrop-blur-sm">Power BI</span>
                        <span className="px-3 py-1 text-sm rounded-full bg-white/10 border border-white/10 backdrop-blur-sm">Unity</span>
                    </div>
                </div>

                <div>
                    <p className="font-bold text-lg" onMouseEnter={props.textEnter} onMouseLeave={props.textLeave}>
                        Libraries
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3" onMouseEnter={props.textEnter} onMouseLeave={props.textLeave}>
                        <span className="px-3 py-1 text-sm rounded-full bg-white/10 border border-white/10 backdrop-blur-sm">React</span>
                        <span className="px-3 py-1 text-sm rounded-full bg-white/10 border border-white/10 backdrop-blur-sm">NumPy</span>
                        <span className="px-3 py-1 text-sm rounded-full bg-white/10 border border-white/10 backdrop-blur-sm">Matplotlib</span>
                        <span className="px-3 py-1 text-sm rounded-full bg-white/10 border border-white/10 backdrop-blur-sm">Pandas</span>
                        <span className="px-3 py-1 text-sm rounded-full bg-white/10 border border-white/10 backdrop-blur-sm">BeautifulSoup</span>
                        <span className="px-3 py-1 text-sm rounded-full bg-white/10 border border-white/10 backdrop-blur-sm">Tkinter</span>
                    </div>
                </div>

            </div>
        </div>
    );

}

export default Skills;
