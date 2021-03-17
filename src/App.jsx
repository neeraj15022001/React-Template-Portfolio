import React from 'react';
import "./App.css";
import BottomNav from "./component/BottomNav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./component/Home";
import Info from "./component/Info";
import Settings from "./component/Settings";
import Skills from "./component/Skills";
import { ContextProvider } from "./component/ContextAPI";

function App() {
    if(localStorage.getItem("dark-toggler") == null) {
        localStorage.setItem("dark-toggler", false);
        console.log(`value in locaStorage = ${localStorage.getItem("dark-toggler")}`)
    }
    return (
        <div>
            <Router>
                <ContextProvider>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/info">
                            <Info />
                        </Route>
                        <Route path="/settings">
                            <Settings />
                        </Route>
                        <Route path="/skills">
                            <Skills />
                        </Route>
                    </Switch>
                    <BottomNav />
                </ContextProvider>
            </Router>
        </div>
    )
}

export default App
