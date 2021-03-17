import React, {useContext} from 'react';
import "./Skills.css";
import SkillCard from './SkillCard';
import {Context} from "./ContextAPI";
import {lightTheme, darkTheme} from "../colors/colors";

function Skills() {
    const [toggle] = useContext(Context)
    const pageTheme = {
        backgroundColor : toggle ? darkTheme.backgroundColor : lightTheme.backgroundColor,
        color : toggle ? darkTheme.textColor : lightTheme.textColor
    }
    return ( 
        <div className="skills" style={pageTheme}>
            <h1>Skills</h1>
            <SkillCard />
            <SkillCard />
            <SkillCard />
            <SkillCard />
            <SkillCard />
            <SkillCard />
            <SkillCard />
        </div>
    )
}

export default Skills
