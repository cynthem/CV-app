import React, { Component } from "react";
import Contact from "./Contact";
import SideSectionA from "./SideSectionA";
import SideSectionB from "./SideSectionB";

class SidePanel extends Component {
    render() {
        return (
            <div id="side-panel">
                <Contact />
                <SideSectionA />
                <SideSectionB />
            </div>
        )
    }
}
  
export default SidePanel;