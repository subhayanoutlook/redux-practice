import React, { Component } from "react";
import MyScreen from "./MyScreen";
import ButtonGroup from "./ButtonGroup";

import {connect} from "react-redux";
import {leftButtonClicked} from "../redux/button/buttonAction";
import {generateStateMapper} from "../redux/generateMappers";

class LeftTopComponent extends Component {
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
                            clickHandler={this.props.leftButtonClicked}
                            position="TOP"
                            key={2}
                            side="leftTop"
                            technologies={["Button A", "Button B", "Button C"]}
                        />
                    </div>                    
                </div>
                {/* insert reset here */}
            </div>
        );
    }
}

// const mapStateToProps=(state)=>({
//     displayText:state.leftTop
// });

const mapStateToProps=generateStateMapper("left","top");


const mapDispatchToProps=(dispatch)=>({
    leftButtonClicked:(pos,text)=>dispatch(leftButtonClicked(pos,text))
});

export default connect(mapStateToProps,mapDispatchToProps)(LeftTopComponent);
