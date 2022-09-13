import React, { Component } from "react";
import Duties from './Duties';
import uniqid from 'uniqid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

class Experience extends Component {
    constructor() {
        super();
        this.state = {
            company: '',
            position: '',
            city: '',
            location: '',
            dates: '',
            experience: [
                {
                    id: uniqid(),
                    company: '',
                    position: '',
                    city: '',
                    location: '',
                    dates: ''
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

    handleAddExperience = () => {
        this.setState({
            experience: this.state.experience.concat({
                id: uniqid(),
                company: this.state.company,
                position: this.state.position,
                city: this.state.city,
                location: this.state.location,
                dates: this.state.dates
            })
        });
    }

    handleRemoveExperience = key => {
        const removedExp = this.state.experience.filter(exp => exp.id !== key);
        this.setState({ experience: removedExp });
    }

    render() {
        const {
            company,
            position,
            city,
            location,
            dates,
            experience
        } = this.state;

        return (
            <div id="experience">
                <h2>Experience</h2>

                {experience.map(exp => {
                    return (
                        <div className="experience-container" key={exp.id}>
                            <FontAwesomeIcon 
                                icon={solid('trash-can')}
                                className="big-trash-icon"
                                onClick={() => this.handleRemoveExperience(exp.id)}
                            />
                            <div className="experience-details">
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
                                <Duties />
                            </div>
                        </div>
                    )
                })}
                <FontAwesomeIcon 
                    icon={solid('plus')}
                    className="big-add-icon"
                    onClick={this.handleAddExperience}
                />
            </div>
        )
    }
}
  
export default Experience;