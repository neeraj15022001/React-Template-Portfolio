import React,{createContext, useState} from "react";

export const Context = createContext();

export const ContextProvider = (props) => {
    const [toggle, setToggle] = useState(false)
    return (
        <Context.Provider value={[toggle, setToggle]}>
            {props.children}
        </Context.Provider>
    )
}