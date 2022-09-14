import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

class Duties extends Component {
    constructor(props) {
        super(props);
        this.state = { duty: '' };
    }

    handleDutyEdit = e => {
        this.setState({ duty: e.target.value });
    }

    render() {
        const { duty } = this.state;

        return (
            <div className="duty-item" key={this.props.dutyId}>
                <FontAwesomeIcon 
                    icon={solid('circle')}
                    className="circle-icon"
                />
                <textarea
                    className="duty-input"
                    maxLength="180"
                    value={duty ? duty : "Add descriptions of your job responsibilities, achievements, etc., here. It's recommended to include 2-4 bullet points of 1-2 sentences each."}
                    onChange={this.handleDutyEdit}
                >
                </textarea>
            </div>
        )
    }
}

export default Duties;