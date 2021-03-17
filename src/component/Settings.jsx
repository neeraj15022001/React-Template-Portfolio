import React, { useContext } from "react";
import "./Settings.css";
import { withStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import { Context } from "./ContextAPI";
import { lightTheme, darkTheme } from "../colors/colors";

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
      "&$checked": {
        transform: "translateX(16px)",
        // color: theme.palette.common.white,
        color: toggle ? darkTheme.backgroundColor : lightTheme.backgroundColor,
        "& + $track": {
          backgroundColor: toggle
            ? darkTheme.toggleButtonBackgroundColor
            : lightTheme.toggleButtonBackgroundColor,
          opacity: 1,
          border: "none",
        },
      },
      "&$focusVisible $thumb": {
        color: toggle
          ? darkTheme.toggleButtonBackgroundColor
          : lightTheme.toggleButtonBackgroundColor,
        border: "none",
      },
    },
    thumb: {
      width: 24,
      height: 24,
    },
    track: {
      borderRadius: 26 / 2,
      border: "none",
      backgroundColor: toggle
        ? darkTheme.toggleButtonBackgroundColor
        : lightTheme.toggleButtonBackgroundColor,
      opacity: 1,
      transition: theme.transitions.create(["background-color", "border"]),
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
    setToggle(event.target.checked);
  };
  const [toggle, setToggle] = useContext(Context);
  const pageTheme = {
    backgroundColor: toggle
      ? darkTheme.backgroundColor
      : lightTheme.backgroundColor,
    color: toggle ? darkTheme.textColor : lightTheme.textColor,
  };
  const iosTogglerCard = {
    backgroundColor: toggle ? darkTheme.cardsColor : lightTheme.cardsColor,
    color: toggle ? darkTheme.textColor : lightTheme.textColor,
  };
  return (
    <div className="settings" style={pageTheme}>
      <h1>Settings</h1>
      <div className="darkModeToggler">
        <div className="iosButton" style={iosTogglerCard}>
          <div className="label">
            <h6>Toggle Dark Mode</h6>
          </div>
          <div className="button">
            <FormControlLabel
              control={
                <IOSSwitch
                  checked= {toggle}
                  onChange={handleChange}
                  name="checked"
                />
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
