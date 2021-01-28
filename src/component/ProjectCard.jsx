import React,{useContext} from 'react';
import "./ProjectCard.css";
import AdbIcon from '@material-ui/icons/Adb';
import {Context} from "./ContextAPI";

function ProjectCard() {
    const [toggle] = useContext(Context)
    return (
        <div className="projectCard" style={{backgroundColor : toggle ? "white" : "black",color : toggle ? "black" : "white"}}>
            <AdbIcon />
            <h5>Android</h5>
        </div>
    )
}

export default ProjectCard
