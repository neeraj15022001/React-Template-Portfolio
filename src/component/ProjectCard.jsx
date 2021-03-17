import React,{useContext} from 'react';
import "./ProjectCard.css";
import AdbIcon from '@material-ui/icons/Adb';
import {Context} from "./ContextAPI";
import {lightTheme, darkTheme} from "../colors/colors"

function ProjectCard() {
    const [toggle] = useContext(Context)
    const projectCardColor = {
        backgroundColor : toggle ? darkTheme.cardsColor : lightTheme.cardsColor,
        color : toggle ? darkTheme.textColor : lightTheme.textColor
    }
    return (
        <div className="projectCard" style={projectCardColor}>
            <AdbIcon />
            <h5>Android</h5>
        </div>
    )
}

export default ProjectCard
