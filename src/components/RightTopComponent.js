import React, { Component } from "react";
import MyScreen from "./MyScreen";
import ButtonGroup from "./ButtonGroup";
import {connect} from "react-redux";
import { leftButtonClicked, rightButtonClicked} from "../redux/button/buttonAction"
import {generateStateMapper} from "../redux/generateMappers";

class RightTopComponent extends Component {
    render() {
        return (
            <div class="container">
                <div
                    class="col"
                    style={{
                        background: "#5daae0",
                        borderRadius: "5px",
                        margin: "5% 0"
                    }}
                >
                    <div class="row" style={{ padding: "5% 0 0 40%" }}>
                        <MyScreen key={1} tech={this.props.displayText} />
                    </div>
                    <div class="row" style={{ padding: "5% 0 10% 30%" }}>
                        <ButtonGroup
                        clickHandler={this.props.rightButtonClicked}
                        position="TOP"
                            key={2}
                            side="rightTop"
                            technologies={["Button A", "Button B", "Button C"]}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps=generateStateMapper("right","top");

const mapDispatchToProps=(dispatch)=>({
    rightButtonClicked:(pos,text)=>{
        dispatch(rightButtonClicked(pos,text));
        dispatch(leftButtonClicked(pos,text)); //pos-> top, side-> left
        dispatch(leftButtonClicked("down",text)); //pos-> down, side-> left
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(RightTopComponent);
