import React, {useContext} from 'react';
import "./BottomNav.css";
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import SettingsIcon from '@material-ui/icons/Settings';
import CodeIcon from '@material-ui/icons/Code';
import {NavLink} from 'react-router-dom';
import {Context} from "./ContextAPI";
import {lightTheme, darkTheme} from "../colors/colors";

function BottomNav() {
    const [toggle] = useContext(Context)
    const iconColors = {
        color: toggle ? darkTheme.navigationBarIconColor : lightTheme.navigationBarIconColor
    }
    const activeClasses = toggle ? "active activeDark" : "active activeLight"
    return (
        <div className="bottomNav" style={{backgroundColor : toggle ? darkTheme.naviagtionBarColor: lightTheme.naviagtionBarColor}}>
            <NavLink exact={true} to="/" activeClassName={activeClasses}><HomeIcon style={iconColors} className="icons" /></NavLink>
            <NavLink to="/skills" activeClassName={activeClasses}><CodeIcon style={iconColors} className="icons" /></NavLink>
            <NavLink to="/info" activeClassName={activeClasses}><InfoIcon style={iconColors} className="icons" /></NavLink>
            <NavLink to="/settings" activeClassName={activeClasses}><SettingsIcon style={iconColors} className="icons" /></NavLink>
        </div>
    )
}

export default BottomNav
