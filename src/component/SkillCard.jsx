import React, {useContext} from 'react';
import "./SkillCard.css";
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {Context} from "./ContextAPI";
import {lightTheme, darkTheme} from "../colors/colors";

function SkillCard() {
    const [value, setValue] = React.useState(2);
    const [toggle] = useContext(Context);
    const skillCardColor = {
        backgroundColor : toggle ? darkTheme.cardsColor : lightTheme.cardsColor,
        color : toggle ? darkTheme.textColor : lightTheme.textColor
    }
    return (
        <div className="skillCard">
            <div className="skill" style={skillCardColor}>
                <div className="iconPlaceholder">

                </div>
                <div className="rating">
                    <Box component="fieldset" mb={3} borderColor="transparent">
                        <Typography component="legend">Skill Name</Typography>
                        <Rating
                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                        />
                    </Box>
                </div>
            </div>

        </div>
    )
}

export default SkillCard
