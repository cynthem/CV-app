import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

class SideSectionA extends Component {
    constructor(props) {
        super(props);
        this.state = { point: '' };
    }

    handlePointEdit = e => {
        this.setState({ point: e.target.value });
    }

    render() {
        const { point } = this.state;

        return (
            <div className="sectionA-item" key={this.props.aKey}>
                <FontAwesomeIcon 
                    icon={solid('circle')}
                    className="side-circle-icon"
                />
                <input
                    className="sectionA-input"
                    type="text"
                    placeholder={point ? point : "Ideas: certifications, awards"}
                    onChange={this.handlePointEdit}
                />
            </div>
        )
    }

}

export default SideSectionA;