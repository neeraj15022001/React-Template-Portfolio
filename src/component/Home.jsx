import React from 'react';
import "./Home.css";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import ProjectCard from "./ProjectCard";

function Home() {
    return (
        <div className="home">
            <h1>Education</h1>
            <div className="education">
                <Grid container spacing={3} className="grid">
                    <Grid items xs={5} sm={5}>
                        <Paper className="education__paper">
                            <img src="https://lh3.googleusercontent.com/proxy/Zy8yz88rugKzb5-kjbypTo4ylNtjRiVMFF8a2oB8anXI2XkCNy6UKGss8htqsHcJ9ZWvT4ZC5b-PW1OAZJUFeyxfYY0YWmZp" alt="school" />
                            <h6>Lord Rama School</h6>
                        </Paper>
                    </Grid>
                    <Grid items xs={5} sm={5}>
                        <Paper className="education__paper">
                            <img src="https://www.chitkara.edu.in/wp-content/themes/chitkara/images/CU_logo.png" alt="University" />
                            <h6>Chitkara University</h6>
                        </Paper>
                    </Grid>
                </Grid>
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
