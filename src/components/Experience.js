import React, { Component } from "react";
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
            duty: '',
            experience:
            {
                id: uniqid(),
                company: this.state.company,
                position: this.state.position,
                city: this.state.city,
                stateCountry: this.state.stateCountry,
                start: this.state.start,
                end: this.state.end,
                duties: 
                {
                    dutyId: uniqid(),
                    duty: this.state.duty 
                }
            }
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

    handleDutyEdit = e => {
        this.setState({ duty: e.target.value });
    }

    onClickExperience = () => {
        this.setState({
            company: '',
            position: '',
            city: '',
            stateCountry: '',
            start: '',
            end: '',
            duty: '',
            experience: this.state.experience.concat({
                id: uniqid(),
                company: this.state.company,
                position: this.state.position,
                city: this.state.city,
                stateCountry: this.state.stateCountry,
                start: this.state.start,
                end: this.state.end,
                duties: this.state.experience.duties.concat({
                    dutyId: uniqid(),
                    duty: this.state.duty
                }),
            })
        });
    }

    onClickDuty = () => {
        this.setState({
            duty: '',
            duties: this.state.experience.duties.concat({
                dutyId: uniqid(),
                duty: this.state.duty
            })
        });
    }

    handleRemoveExperience = key => {
        const removedExp = this.state.experience.filter(exp => exp.id !== key);
        this.setState({ experience: removedExp });
    }

    handleRemoveDuty = key => {
        const removedDuty = this.state.duties.filter(item => item.dutyId !== key);
        this.setState({ duty: removedDuty });
    }

    render() {
        const {
            company,
            position,
            city,
            stateCountry,
            start,
            end,
            duties,
            duty,
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
                                onClick={this.handleRemoveExperience}
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
                            <div className="experience-bottom">
                                {duties.map(item => {
                                    return (
                                        <form className="duty-form" key={item.dutyId}>
                                            <FontAwesomeIcon 
                                                icon={solid('circle')}
                                                className="circle-icon"
                                            />
                                            <textarea
                                                className="duty-input"
                                                onChange={this.handleDutyEdit}
                                            >
                                                {duty ? duty : "Add descriptions of your job responsibilities, achievements, etc., here. It's recommended to include 2-4 bullet points of 1-2 sentences each."}
                                            </textarea>
                                            <FontAwesomeIcon 
                                                icon={solid('trash-can')}
                                                className="trash-icon"
                                                onClick={this.handleRemoveDuty}
                                            />
                                        </form>
                                    )
                                })}
                                <FontAwesomeIcon 
                                    icon={solid('plus')}
                                    className="add-icon"
                                    onClick={this.onClickDuty}
                                />
                            </div>
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