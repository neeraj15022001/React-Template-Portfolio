import React,{createContext, useState} from "react";

export const Context = createContext();

export const ContextProvider = (props) => {
    let localValue = localStorage.getItem("dark-toggler")
    localValue = localValue === "true" ? true : false;
    const [toggle, setToggle] = useState(localValue);
    localStorage.setItem("dark-toggler",toggle)
    return (
        <Context.Provider value={[toggle, setToggle]}>
            {props.children}
        </Context.Provider>
    )
}