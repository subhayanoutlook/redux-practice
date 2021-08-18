import React, { Component } from "react";
import MyScreen from "./MyScreen";
import ButtonGroup from "./ButtonGroup";
import {connect} from "react-redux";
import { rightButtonClicked,leftButtonClicked } from "../redux/button/buttonAction";
import {generateStateMapper} from "../redux/generateMappers";

class RightDownComponent extends Component {
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
                        clickHandler={this.props.rightButtonClicked}
                        position="DOWN"
                            key={2}
                            side="rightDown"
                            technologies={["Button A", "Button B", "Button C"]}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps=generateStateMapper("right","down");

const mapDispatchToProps=(dispatch)=>({
    rightButtonClicked:(pos,text)=>{
        dispatch(rightButtonClicked(pos,text));//pos-> down, side-> right
        dispatch(rightButtonClicked("top",text)); //pos-> top, side-> right
        dispatch(leftButtonClicked("top",text)); //pos-> top, side-> left
        dispatch(leftButtonClicked(pos,text)); //pos-> down, side-> left
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(RightDownComponent);
