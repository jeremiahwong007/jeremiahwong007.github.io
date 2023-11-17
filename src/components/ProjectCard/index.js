
const ProjectCard = (props) => {

    const techStack = props.tech_stack.map((tech) =>
        <li className="inline-block pr-3">{tech}</li>
    );

    return (
        <div className={`max-w-sm border shadow-md bg-black border-gray-900 rounded-lg bg-opacity-60 ${props.spacing}`} onMouseEnter={props.textEnter} onMouseLeave={props.textLeave}>
            <div className="p-5">
                <h5 className="mb-4 text-2xl font-bold tracking-tight text-white">{props.name}</h5>
                <ul className="list-none text-gray-400 mb-3"> {techStack} </ul>
                <p className="mb-6 font-normal text-white">{props.description}</p>
                {
                    props.show_link &&
                    <a href={props.repo_link} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        View repository
                        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                }
                
            </div>
        </div>
    );
}

export default ProjectCard;
