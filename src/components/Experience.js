import React, { Component } from "react";
import Duties from './Duties';
import uniqid from 'uniqid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

class Experience extends Component {
    constructor(props) {
        super(props);
        this.state = {
            company: '',
            position: '',
            city: '',
            location: '',
            dates: '',
            renderedDuties: [
                {
                    id: uniqid()
                }
            ]
        };
    }

    handleCompanyEdit = e => {
        this.setState({ company: e.target.value });
    }

    handlePositionEdit = e => {
        this.setState({ position: e.target.value });
    }

    handleCityEdit = e => {
        this.setState({ city: e.target.value });
    }

    handleLocationEdit = e => {
        this.setState({ location: e.target.value });
    }

    handleDatesEdit = e => {
        this.setState({ dates: e.target.value });
    }

    renderDuty = () => {
        this.setState({ renderedDuties: [...this.state.renderedDuties, { id: uniqid() }]});
    }

    removeDuty = () => {
        const removedDuty = this.state.renderedDuties[-1];
        const duties = this.state.renderedDuties.filter(duty => duty !== removedDuty);
        this.setState({ renderedDuties: duties });
    }

    render() {
        const {
            company,
            position,
            city,
            location,
            dates,
            renderedDuties
        } = this.state;

        return (
            <div id="experience">
                <h2>Experience</h2>
                <div className="experience-container">
                    <div className="experience-top">
                        <input
                            className="company-input"
                            type="text"
                            maxLength="28"
                            placeholder={company ? company : "Company/Organization"}
                            onChange={this.handleCompanyEdit}
                        />
                        <div className="experience-location">
                            <input
                                className="city-input"
                                type="text"
                                maxLength="18"
                                placeholder={city ? city : "City,"}
                                onChange={this.handleCityEdit}
                            />
                            <input
                                className="state-input"
                                type="text"
                                maxLength="2"
                                placeholder={location ? location : "ST"}
                                onChange={this.handleLocationEdit}
                            />
                        </div>
                    </div>
                    <div className="experience-middle">
                        <input
                            className="position-input"
                            type="text"
                            maxLength="40"
                            placeholder={position ? position : "Job Title"}
                            onChange={this.handlePositionEdit}
                        />   
                        <input
                            className="dates-input"
                            type="text"
                            maxLength="10"
                            placeholder={dates ? dates : "Start date - End date"}
                            onChange={this.handleDatesEdit}
                        />
                    </div>
                    <div className="experience-bottom">
                        {[...renderedDuties].map(item => {
                            return (
                                <Duties key={item.id} dutyId={item.id} />
                            )
                        })}
                        <div className="duties-edit">
                            <FontAwesomeIcon 
                                icon={solid('plus')}
                                className="add-icon"
                                onClick={() => this.renderDuty()}
                            />
                            <FontAwesomeIcon 
                                icon={solid('trash-can')}
                                className="trash-icon"
                                onClick={() => this.removeDuty()}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Experience;