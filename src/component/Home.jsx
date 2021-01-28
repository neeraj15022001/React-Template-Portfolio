import React, { useContext } from 'react';
import "./Home.css";
import ProjectCard from "./ProjectCard";
import { Context } from "./ContextAPI";

function Home() {
    const [toggle] = useContext(Context);
    return (
        <div className="home" style={{ backgroundColor: toggle ? "black" : "white", color: toggle ? "white" : "black" }}>
            <h1>Education</h1>
            <div className="education">
                <div className="education__paper" style={{ backgroundColor: toggle ? "white" : "black", color: toggle ? "black" : "white" }}>
                    <img src="https://lh3.googleusercontent.com/proxy/Zy8yz88rugKzb5-kjbypTo4ylNtjRiVMFF8a2oB8anXI2XkCNy6UKGss8htqsHcJ9ZWvT4ZC5b-PW1OAZJUFeyxfYY0YWmZp" alt="school" />
                    <h6>Lord Rama School</h6>
                </div>

                <div className="education__paper" style={{ backgroundColor: toggle ? "white" : "black", color: toggle ? "black" : "white" }}>
                    <img src="https://www.chitkara.edu.in/wp-content/themes/chitkara/images/CU_logo.png" alt="University" />
                    <h6>Chitkara University</h6>
                </div>
            </div>

            <div className="projects">
                <h1>Projects</h1>
                <div className="projectsSection">
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />

                </div>
            </div>
        </div>
    )
}

export default Home
