import React, { Component } from "react";
import MyScreen from "./MyScreen";
import ButtonGroup from "./ButtonGroup";
import {connect} from "react-redux";
import {leftButtonClicked} from "../redux/button/buttonAction"
import {generateStateMapper} from "../redux/generateMappers";

class LeftDownComponent extends Component {
    render() {
        return (
            <div class="container">
                <div
                    class="col"
                    style={{
                        background: "#fc7500",
                        borderRadius: "5px",
                        margin: "5% 0"
                    }}
                >
                    <div class="row" style={{ padding: "5% 0 0 40%" }}>
                        <MyScreen key={1} tech={this.props.displayText} />
                    </div>
                    <div class="row" style={{ padding: "5% 0 10% 30%" }}>
                        <ButtonGroup
                           clickHandler={this.props.leftButtonClicked}
                           position="DOWN"
                            key={2}
                            side="leftDown"
                            technologies={["Button A", "Button B", "Button C"]}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps=generateStateMapper("left","down");

const mapDispatchToProps=(dispatch)=>({
    leftButtonClicked:(pos,text)=>{
        dispatch(leftButtonClicked(pos,text));
        dispatch(leftButtonClicked("top",text));
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(LeftDownComponent);
