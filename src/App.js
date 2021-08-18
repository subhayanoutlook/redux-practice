import React, { Component } from "react";
import "./App.css";
import LeftTopComponent from "./components/LeftTopComponent";
import LeftDownComponent from "./components/LeftDownComponent";
import RightTopComponent from "./components/RightTopComponent";
import RightDownComponent from "./components/RightDownComponent";

import {Provider} from "react-redux";
import store from "./redux/store";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
            <div
                style={{
                    display: "flex",
                    background: "#435368",
                    width: "100vw",
                    height: "100vh"
                }}
            >
                <div style={{ width: "50%" }}>
                    <LeftTopComponent />
                    <LeftDownComponent />
                </div>
                <div style={{ width: "50%" }}>
                    <RightTopComponent />
                    <RightDownComponent />
                </div>
            </div>
            </Provider>
        );
    }
}

export default App;
