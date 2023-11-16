

const Skills = (props) => {
    
    return (
        <div className="text-white w-full mt-20">
            <div className="flex mt-8 w-full justify-between">
                <div className="mr-2 w-[30%]">
                    <p className="font-bold text-lg" onMouseEnter={props.textEnter} onMouseLeave={props.textLeave}>
                        Languages
                    </p>
                    <div className="grid sm:grid-cols-2 mt-2">
                        <ul className="break-words mr-2" onMouseEnter={props.textEnter} onMouseLeave={props.textLeave}>
                            <li className="mb-1">
                                Python
                            </li>
                            <li className="mb-1">
                                Java
                            </li>
                            <li className="mb-1">
                                C
                            </li>
                            <li className="mb-1">
                                JavaScript
                            </li>
                            <li className="mb-1">
                                Ruby
                            </li>
                            <li className="mb-1">
                                SQL
                            </li>
                        </ul>
                        <ul onMouseEnter={props.textEnter} onMouseLeave={props.textLeave}>
                            <li className="mb-1">
                                C#
                            </li>
                            <li className="mb-1">
                                HTML/CSS
                            </li>
                            <li className="mb-1">
                                R
                            </li>
                            <li className="mb-1">
                                MIPS Assembly
                            </li>
                            <li>
                                VBA
                            </li>
                        </ul>
                    </div>
                    
                </div>
                
                <div className="mx-2 w-1/3">
                    <p className="font-bold text-lg" onMouseEnter={props.textEnter} onMouseLeave={props.textLeave}>
                        Frameworks & Tools
                    </p>
                    <div className="grid sm:grid-cols-[50%_30%] mt-2">
                        <ul className="mr-2 break-words" onMouseEnter={props.textEnter} onMouseLeave={props.textLeave}>
                            <li className="mb-1">
                                Django
                            </li>
                            <li className="mb-1">
                                Ruby on Rails
                            </li>
                            <li className="mb-1">
                                Ember.js
                            </li>
                            <li className="mb-1">
                                Git
                            </li>
                            <li className="mb-1">
                                PostgreSQL
                            </li>
                            <li>
                                Firebase
                            </li>
                        </ul>
                        <ul onMouseEnter={props.textEnter} onMouseLeave={props.textLeave}>
                            <li className="mb-1">
                                Express.js
                            </li>
                            <li className="mb-1">
                                Datadog
                            </li>
                            <li className="mb-1">
                                Rollbar
                            </li>
                            <li className="mb-1">
                                Gitlab
                            </li>
                            <li className="mb-1">
                                Power BI
                            </li>
                            <li>
                                Unity
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div className="ml-2">
                    <p className="font-bold text-lg" onMouseEnter={props.textEnter} onMouseLeave={props.textLeave}>
                        Libraries
                    </p>
                    <ul className="mt-2" onMouseEnter={props.textEnter} onMouseLeave={props.textLeave}>
                        <li className="mb-1">
                            React
                        </li>
                        <li className="mb-1">
                            NumPy
                        </li>
                        <li className="mb-1">
                            Matplotlib
                        </li>
                        <li className="mb-1">
                            Pandas
                        </li>
                        <li className="mb-1">
                            BeautifulSoup
                        </li>
                        <li>
                            Tkinter
                        </li>
                    </ul>
                </div>
                
            </div>
        </div>
    );

}

export default Skills;