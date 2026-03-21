const ProjectCard = (props) => {

    const techStack = props.tech_stack.map((tech) =>
        <li className="inline-block pr-3">{tech}</li>
    );

    return (
        <div
            className="border shadow-md border-white/10 rounded-lg bg-white/5 backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:border-white/25 hover:shadow-lg hover:bg-white/10"
            onMouseEnter={props.textEnter}
            onMouseLeave={props.textLeave}
        >
            <div className="p-5">
                <h5 className="mb-4 text-2xl font-bold tracking-tight text-white">{props.name}</h5>
                <ul className="list-none text-gray-400 mb-3"> {techStack} </ul>
                <p className="mb-6 font-normal text-white">{props.description}</p>
                {
                    props.show_link &&
                    <a href={props.repo_link} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white border border-white/30 rounded-lg hover:bg-white/10 transition-colors">
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
