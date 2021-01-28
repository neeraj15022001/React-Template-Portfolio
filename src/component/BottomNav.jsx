import React, {useContext} from 'react';
import "./BottomNav.css";
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import SettingsIcon from '@material-ui/icons/Settings';
import CodeIcon from '@material-ui/icons/Code';
import {NavLink} from 'react-router-dom';
import {Context} from "./ContextAPI";
function BottomNav() {
    const [toggle, toggler] = useContext(Context)
    return (
        <div className="bottomNav" style={{backgroundColor : toggle ? "white" : "black"}}>
            <NavLink exact={true} to="/" activeClassName="active"><HomeIcon className="icons" /></NavLink>
            <NavLink to="/skills" activeClassName="active"><CodeIcon className="icons" /></NavLink>
            <NavLink to="/info" activeClassName="active"><InfoIcon className="icons" /></NavLink>
            <NavLink to="/settings" activeClassName="active"><SettingsIcon className="icons" /></NavLink>
        </div>
    )
}

export default BottomNav
