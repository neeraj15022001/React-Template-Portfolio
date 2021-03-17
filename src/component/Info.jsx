import React,{useContext} from 'react';
import "./Info.css";
import Avatar from "@material-ui/core/Avatar";
import {Context} from "./ContextAPI";
import {lightTheme, darkTheme} from "../colors/colors";

function Info() {
    const [toggle] = useContext(Context)
    const pageTheme = {
        backgroundColor: toggle ? darkTheme.backgroundColor : lightTheme.backgroundColor,
        color: toggle ? darkTheme.textColor : lightTheme.textColor
    }
    return (
        <div className="info" style={pageTheme}>
            <div className="name">
                <p>Enter Your Name</p>
            </div>
            <div className="avatar">
                <Avatar className="mui-avatar" />
            </div>
            <div className="description">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit ab eius voluptatem id necessitatibus saepe perferendis debitis, sit distinctio sunt nisi recusandae natus temporibus asperiores nam veritatis autem dicta qui.Cum modi aliquid repudiandae adipisci hic illo magni libero totam. Debitis doloremque vitae vel quibusdam hic ad neque dolor voluptate molestias, explicabo impedit adipisci. Corporis nulla saepe veniam inventore aspernatur.</p>
            </div>
        </div>
    )
}

export default Info
