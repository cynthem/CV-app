import React, { Component } from "react";
import Contact from "./Contact";
import SideSectionA from "./SideSectionA";
import SideSectionB from "./SideSectionB";
import uniqid from 'uniqid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

class SidePanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sectionA: [
                {
                    id: uniqid()
                }
            ],
            sectionB: [
                {
                    id: uniqid()
                }
            ]
        };
    }

    renderSectionA = () => {
        this.setState({ sectionA: [...this.state.sectionA, { id: uniqid() }]});
    }

    removeSectionA = key => {
        const points = this.state.sectionA.filter(point => point.id !== key);
        this.setState({ sectionA: points });
    }

    renderSectionB = () => {
        this.setState({ sectionB: [...this.state.sectionB, { id: uniqid() }]});
    }

    removeSectionB = key => {
        const points = this.state.sectionB.filter(point => point.id !== key);
        this.setState({ sectionB: points });
    }

    render() {
        const { sectionA, sectionB } = this.state;

        return (
            <div id="side-panel">
                <Contact />
                <div className="sectionA-container">
                    <h3>Skills</h3>
                    {[...sectionA].map(sec => {
                        return (
                            <div className="a-item" key={sec.id}>
                                <SideSectionA key={sec.id} aKey={sec.id} />
                                <FontAwesomeIcon 
                                    icon={solid('trash-can')}
                                    className="side-trash-icon"
                                    onClick={() => this.removeSectionA(sec.id)}
                                />
                            </div>
                        )
                    })}
                    <FontAwesomeIcon 
                        icon={solid('plus')}
                        className="add-icon"
                        onClick={this.renderSectionA}
                    />
                </div>
                <div className="sectionB-container">
                    <h3>Activities</h3>
                    {[...sectionB].map(item => {
                        return (
                            <div className="b-item" key={item.id}>
                                <SideSectionB key={item.id} bKey={item.id}  />
                                <FontAwesomeIcon 
                                    icon={solid('trash-can')}
                                    className="side-trash-icon"
                                    onClick={() => this.removeSectionB(item.id)}
                                />
                            </div>
                        )
                    })}
                    <FontAwesomeIcon 
                        icon={solid('plus')}
                        className="add-icon"
                        onClick={this.renderSectionB}
                    />
                </div>
            </div>
        )
    }
}
  
export default SidePanel;