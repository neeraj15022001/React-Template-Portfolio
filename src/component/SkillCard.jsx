import React, {useContext} from 'react';
import "./SkillCard.css";
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {Context} from "./ContextAPI";

function SkillCard() {
    const [value, setValue] = React.useState(2);
    const [toggle] = useContext(Context);
    return (
        <div className="skillCard">
            <div className="skill" style={{backgroundColor : toggle ? "white" : "black",color : toggle ? "black" : "white"}}>
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
