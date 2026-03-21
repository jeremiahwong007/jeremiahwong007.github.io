import ProjectCard from "../ProjectCard";

const uoftruck_desc = "Built a University of Toronto Food truck ordering web application using object-oriented programming. This project also involved creating a rigorous unit testing system and adopting clean architecture principles (SOLID Principles). Utilized Java and React to build the application with a customer and vendor user interface."
const uoftruck_tech_stack = ["React", "Java", "Spring", "JUnit"]
const anime_atlas_desc = "An anime recommendation tool in Python that can utilize four different recommendation algorithms. The project involved pulling data from an API and web-scraping online websites for data collection using BeautifulSoup. It also allows users to log into 3rd party anime review accounts via OAuth2 to make better recommendations."
const anime_atlas_tech_stack = ["Python", "BeautifulSoup", "OAuth2"]
const meat_monitor_desc = "A Python program where users calculate and interact with data on the environmental impact of their diets. It can calculate your carbon footprint from your meat consumption and gives dietary advice from an environmental standpoint."
const meat_monitor_tech_stack = ["Python", "NumPy", "Pandas", "Matplotlib"]
const journaling_desc = "Currently engineering a journaling application using Next.js and Flask, enabling users to record images, audio, and video into their journaling process seamlessly. Integrated the Google AI Speech-to-Text API with streaming audio to introduce live transcription of voice entries and implemented Elasticsearch for advanced full-text search functionality to locate journal entries."
const journaling_desc_tech_stack = ["Next.js", "Flask", "Google Cloud APIs"]
const website_desc = "This website! A website to display my profile and gain more experience in frontend development."
const website_tech_stack = ["React", "Tailwind"]

//just some text you see when the website first loads
const Projects = (props) => {
  return (
    <div className="min-h-screen mt-40 pt-6" id='Projects'>
        <div className="ml-[10%] text-left text-white text-6xl font-normal font-serif mb-8 flex flex-row">
            <h1 onMouseEnter={props.textEnter} onMouseLeave={props.textLeave}>Projects</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-[10%]">
            <ProjectCard textEnter={props.textEnter} textLeave={props.textLeave} name="Journaling AI"
                description={journaling_desc} repo_link="https://github.com/CSC207-UofT/course-project-javajsk"
                tech_stack={journaling_desc_tech_stack}/>
            <ProjectCard textEnter={props.textEnter} textLeave={props.textLeave} name="UofTruck"
                description={uoftruck_desc} repo_link="https://github.com/CSC207-UofT/course-project-javajsk"
                tech_stack={uoftruck_tech_stack} show_link={true}/>
            <ProjectCard textEnter={props.textEnter} textLeave={props.textLeave} name="Anime Atlas"
                description={anime_atlas_desc} repo_link="https://github.com/jeremiahwong007/Anime-Atlas"
                tech_stack={anime_atlas_tech_stack} show_link={true}/>
            <ProjectCard textEnter={props.textEnter} textLeave={props.textLeave} name="Meat Monitor"
                description={meat_monitor_desc} repo_link="https://github.com/jeremiahwong007/Meat-Monitor"
                tech_stack={meat_monitor_tech_stack} show_link={true}/>
            <ProjectCard textEnter={props.textEnter} textLeave={props.textLeave} name="Personal Website"
                description={website_desc} repo_link="https://github.com/CSC207-UofT/course-project-javajsk"
                tech_stack={website_tech_stack}/>
        </div>
    </div>



    );
};

export default Projects;
