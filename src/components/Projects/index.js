import ProjectCard from "../ProjectCard";

const uoftruck_desc = "Built a University of Toronto Food truck ordering web application using object-oriented programming. This project also involved creating a rigorous unit testing system and adopting clean architecture principles (SOLID Principles). Utilized Java and React to build the application with a customer and vendor user interface."
const uoftruck_tech_stack = ["React", "Java", "Spring", "JUnit"]
const anime_atlas_desc = "An anime recommendation tool in Python that can utilize four different recommendation algorithms. The project involved pulling data from an API and web-scraping online websites for data collection using BeautifulSoup. It also allows users to log into 3rd party anime review accounts via OAuth2 to make better recommendations."
const anime_atlas_tech_stack = ["Python", "BeautifulSoup", "OAuth2"]
const meat_monitor_desc = "A Python program where users calculate and interact with data on the environmental impact of their diets. It can calculate your carbon footprint from your meat consumption and gives dietary advice from an environmental standpoint."
const meat_monitor_tech_stack = ["Python", "NumPy", "Pandas", "Matplotlib"]
const mood_detector_desc = "A program that utilizes machine learning to detect a user's facial expression. This was created using TensorFlow and existing datasets online."
const mood_detector_tech_stack = ["TensorFlow"]
const website_desc = "This website! A website to display my profile and gain more experience in frontend development."
const website_tech_stack = ["React", "Tailwind"]

//just some text you see when the website first loads
const Projects = (props) => {
  return (
    <div className="min-h-screen mt-40 pt-6" id='Projects'>
        <div className="ml-[10%] text-left text-white text-6xl font-bold mb-8 flex flex-row">
            <h1 onMouseEnter={props.textEnter} onMouseLeave={props.textLeave}>Projects</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-[10%]">
            <ProjectCard textEnter={props.textEnter} textLeave={props.textLeave} name="UofTruck" 
                description={uoftruck_desc} repo_link="https://github.com/CSC207-UofT/course-project-javajsk"
                tech_stack={uoftruck_tech_stack} spacing="sm:mr-3 mb-3" show_link={true}/>
            <ProjectCard textEnter={props.textEnter} textLeave={props.textLeave} name="Anime Atlas" 
                description={anime_atlas_desc} repo_link="https://github.com/jeremiahwong007/Anime-Atlas"
                tech_stack={anime_atlas_tech_stack} spacing="sm:mr-3 sm:ml-3 mb-3 mt-3 sm:mt-0" show_link={true}/>
            <ProjectCard textEnter={props.textEnter} textLeave={props.textLeave} name="Meat Monitor" 
                description={meat_monitor_desc} repo_link="https://github.com/jeremiahwong007/Meat-Monitor"
                tech_stack={meat_monitor_tech_stack} spacing="mb-3 md:ml-3 sm:mr-3 sm:mt-3 md:mt-0 md:mr-0 mt-3" show_link={true}/>
            <ProjectCard textEnter={props.textEnter} textLeave={props.textLeave} name="Mood detector" 
                description={mood_detector_desc} repo_link="https://github.com/seungjae02/Mood-Detection-Song-Recommender"
                tech_stack={mood_detector_tech_stack} spacing="sm:mr-3 sm:ml-3 md:ml-0 mt-3 mb-3" show_link={true}/>
            <ProjectCard textEnter={props.textEnter} textLeave={props.textLeave} name="Personal Website" 
                description={website_desc} repo_link="https://github.com/CSC207-UofT/course-project-javajsk"
                tech_stack={website_tech_stack} spacing="mt-3 md:ml-3 sm:mr-3 mb-3"/>
        </div>
    </div>

    
    
    );
};

export default Projects;
