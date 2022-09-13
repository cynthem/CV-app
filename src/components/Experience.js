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
            stateCountry: '',
            start: '',
            end: '',
            experience: 
            [
                {
                    id: uniqid(),
                    company: '',
                    position: '',
                    city: '',
                    stateCountry: '',
                    start: '',
                    end: ''
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

    handleStateEdit = e => {
        this.setState({ stateCountry: e.target.value });
    }

    handleStartEdit = e => {
        this.setState({ start: e.target.value });
    }

    handleEndEdit = e => {
        this.setState({ end: e.target.value });
    }

    onClickExperience = () => {
        this.setState({
            experience: this.state.experience.concat({
                id: uniqid(),
                company: this.state.company,
                position: this.state.position,
                city: this.state.city,
                stateCountry: this.state.stateCountry,
                start: this.state.start,
                end: this.state.end
            }),
            company: '',
            position: '',
            city: '',
            stateCountry: '',
            start: '',
            end: ''
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
            stateCountry,
            start,
            end,
            experience
        } = this.state;

        return (
            <div id="experience">
                <h2>Experience</h2>

                {experience.map(exp => {
                    return (
                        <div className="experience-item" key={exp.id}>
                            <FontAwesomeIcon 
                                icon={solid('trash-can')}
                                className="big-trash-icon"
                                onClick={this.handleRemoveExperience(exp.id)}
                            />
                            <div className="experience-top">
                                <div className="experience-left">
                                    <input
                                        className="company-input"
                                        type="text"
                                        placeholder={company ? company : "Company/Organization"}
                                        onChange={this.handleCompanyEdit}
                                    />
                                    <input
                                        className="position-input"
                                        type="text"
                                        placeholder={position ? position: "Job Title"}
                                        onChange={this.handlePositionEdit}
                                    />
                                </div>
                                <div className="experience-right">
                                    <div className="experience-location">
                                        <input
                                            className="city-input"
                                            type="text"
                                            placeholder={city ? city: "City"}
                                            onChange={this.handleCityEdit}
                                        />
                                        <p className="city-comma">, </p>
                                        <input
                                            className="state-input"
                                            type="text"
                                            placeholder={stateCountry ? stateCountry: "ST"}
                                            onChange={this.handleStateEdit}
                                        />
                                    </div>
                                    <div className="experience-dates">
                                        <input
                                            className="start-input"
                                            type="text"
                                            placeholder={start ? start : "Start date"}
                                            onChange={this.handleStartEdit}
                                        />
                                        <p className="date-divider"> - </p>
                                        <input
                                            className="end-input"
                                            type="text"
                                            placeholder={end ? end : "End date"}
                                            onChange={this.handleEndEdit}
                                        />
                                    </div>
                                </div>
                            </div>
                            <Duties />
                        </div>
                    )
                })}
                <FontAwesomeIcon 
                    icon={solid('plus')}
                    className="big-add-icon"
                    onClick={this.onClickExperience}
                />
            </div>
        )
    }
}
  
export default Experience;