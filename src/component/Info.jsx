import React,{useContext} from 'react';
import "./Info.css";
import Avatar from "@material-ui/core/Avatar";
import {Context} from "./ContextAPI";

function Info() {
    const [toggle, toggler] = useContext(Context)
    return (
        <div className="info" style={{backgroundColor : toggle ? "black" : "white",color : toggle ? "white" : "black"}}>
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
