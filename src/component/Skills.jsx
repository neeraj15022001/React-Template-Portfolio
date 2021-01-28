import React, {useContext} from 'react';
import "./Skills.css";
import SkillCard from './SkillCard';
import {Context} from "./ContextAPI";

function Skills() {
    const [toggle] = useContext(Context)
    return ( 
        <div className="skills" style={{backgroundColor : toggle ? "black" : "white",color : toggle ? "white" : "black"}}>
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
