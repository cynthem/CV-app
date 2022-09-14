import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

class SideSectionB extends Component {
    constructor(props) {
        super(props);
        this.state = { item: '' };
    }

    handleItemEdit = e => {
        this.setState({ item: e.target.value });
    }

    render() {
        const { item } = this.state;

        return (
            <div className="sectionB-item" key={this.props.bKey}>
                <FontAwesomeIcon 
                    icon={solid('circle')}
                    className="side-circle-icon"
                />
                <input
                    className="sectionB-input"
                    type="text"
                    placeholder={item ? item : "Ideas: volunteering, awards"}
                    onChange={this.handleItemEdit}
                />
            </div>
        )
    }
}

export default SideSectionB;