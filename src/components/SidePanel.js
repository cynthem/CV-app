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
            titleA: '',
            titleB: '',
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

    handleTitleAEdit = e => {
        this.setState({ titleA: e.target.value });
    }

    handleTitleBEdit = e => {
        this.setState({ titleB: e.target.value });
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
        const { titleA, titleB, sectionA, sectionB } = this.state;

        return (
            <div id="side-panel">
                <Contact />
                <div className="sectionA-container">
                    <input
                        className="titleA-input"
                        type="text"
                        placeholder={titleA ? titleA : "Skills"}
                        onChange={this.handleTitleAEdit}
                    />
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
                    <input
                        className="titleB-input"
                        type="text"
                        placeholder={titleB ? titleB : "Activities"}
                        onChange={this.handleTitleBEdit}
                    />
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