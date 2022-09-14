import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

class BulletPoints extends Component {
    constructor(props) {
        super(props);
        this.state = { bulletPoint: '' };
    }

    handleBulletEdit = e => {
        this.setState({ bulletPoint: e.target.value });
    }

    render() {
        const { bulletPoint } = this.state;

        return (
            <div className="bullet-point" key={this.props.bulletId}>
                <FontAwesomeIcon 
                    icon={solid('circle')}
                    className="circle-icon"
                />
                <input
                    className="duty-input"
                    type="text"
                    maxLength="100"
                    value={bulletPoint ? bulletPoint : "Include optional information about your studies, accomplishments, grades, etc."}
                    onChange={this.handleBulletEdit}
                />
            </div>
        )
    }
}

export default BulletPoints;