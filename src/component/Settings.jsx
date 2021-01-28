import React,{useContext} from 'react';
import "./Settings.css";
import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import {Context} from "./ContextAPI";

function Settings() {
    const IOSSwitch = withStyles((theme) => ({
        root: {
            width: 42,
            height: 26,
            padding: 0,
            margin: theme.spacing(1),
        },
        switchBase: {
            padding: 1,
            '&$checked': {
                transform: 'translateX(16px)',
                color: theme.palette.common.white,
                '& + $track': {
                    backgroundColor: '#52d869',
                    opacity: 1,
                    border: 'none',
                },
            },
            '&$focusVisible $thumb': {
                color: '#52d869',
                border: '6px solid #fff',
            },
        },
        thumb: {
            width: 24,
            height: 24,
        },
        track: {
            borderRadius: 26 / 2,
            border: `1px solid ${theme.palette.grey[400]}`,
            backgroundColor: theme.palette.grey[50],
            opacity: 1,
            transition: theme.transitions.create(['background-color', 'border']),
        },
        checked: {},
        focusVisible: {},
    }))(({ classes, ...props }) => {
        return (
            <Switch
                focusVisibleClassName={classes.focusVisible}
                disableRipple
                classes={{
                    root: classes.root,
                    switchBase: classes.switchBase,
                    thumb: classes.thumb,
                    track: classes.track,
                    checked: classes.checked,
                }}
                {...props}
            />
        );
    });


    const handleChange = (event) => {
        toggler(event.target.checked);
    };
    const [toggle, toggler] = useContext(Context)
    return (
        <div className="settings" style={{backgroundColor : toggle ? "black" : "white",color : toggle ? "white" : "black"}}>
        {console.log(toggle)}
            <h1>Settings</h1>
            <div className="darkModeToggler">
                <div className="iosButton" style={{backgroundColor : toggle ? "white" : "black",color : toggle ? "black" : "white"}}>
                    <div className="label">
                        <h6>Toggle Dark Mode</h6>
                    </div>
                    <div className="button">
                        <FormControlLabel
                            control={<IOSSwitch checked={toggle} onChange={handleChange} name="checked" />}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings