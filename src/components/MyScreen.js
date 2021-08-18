import React, { Component } from "react";

class MyScreen extends Component {
    render() {
        return (
            <div
                style={{
                    fontSize: "30px",
                    color: "#ffffff",
                    fontWeight: "900"
                }}
            >
                {this.props.tech}
            </div>
        );
    }
}

export default MyScreen;
