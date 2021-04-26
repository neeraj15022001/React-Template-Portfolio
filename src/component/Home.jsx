import React, { useContext } from "react";
import "./Home.css";
import ProjectCard from "./ProjectCard";
import { Context } from "./ContextAPI";
import {lightTheme, darkTheme} from "../colors/colors";
import schoolLogo from "../assets/school.jpeg";
import universityLogo from "../assets/university.jpeg";

function Home() {
  const [toggle] = useContext(Context);
  return (
    <div
      className="home"
      style={{
        backgroundColor: toggle ? darkTheme.backgroundColor : lightTheme.backgroundColor,
        color: toggle ? darkTheme.textColor : lightTheme.textColor,
      }}
    >
      <h1>Education</h1>
      <div className="education">
        <div
          className="education__paper"
          style={{
            backgroundColor: toggle ? darkTheme.cardsColor : lightTheme.cardsColor,
            color: toggle ? darkTheme.textColor : lightTheme.textColor,
          }}
        >
          <img
            src={schoolLogo}
            alt="school"
          />
          <h6>Your School</h6>
        </div>

        <div
          className="education__paper"
          style={{
            backgroundColor: toggle ? darkTheme.cardsColor : lightTheme.cardsColor,
            color: toggle ? darkTheme.textColor : lightTheme.textColor,
          }}
        >
          <img
            src={universityLogo}
            alt="University"
          />
          <h6>Your University</h6>
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
  );
}

export default Home;
