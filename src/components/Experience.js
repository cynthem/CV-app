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
            duties:
            { 
                dutyId: uniqid(),
                duty: '' 
            },
            experience:
            {
                id: uniqid(),
                company: this.state.company,
                position: this.state.position,
                city: this.state.city,
                stateCountry: this.state.stateCountry,
                start: this.state.start,
                end: this.state.end,
                duties: this.state.duties
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

    handleDutiesEdit = e => {
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
                                        placeholder={company ? }
                                    />
                                    <input
                                        className="position-input"
                                        type="text"
                                        placeholder={exp.position}
                                    />
                                </div>
                                <div className="experience-right">
                                    <div className="experience-location">
                                        <input
                                            className="city-input"
                                            type="text"
                                            placeholder={exp.city}
                                        />
                                        <input
                                            className="state-input"
                                            type="text"
                                            placeholder={exp.stateCountry}
                                        />
                                    </div>
                                    <div className="experience-dates">
                                        <input
                                            className="start-input"
                                            type="text"
                                            placeholder={exp.start}
                                        />
                                        <input
                                            className="end-input"
                                            type="text"
                                            placeholder={exp.end}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="experience-bottom">
                                {experience.duties.map(item => {
                                    return (
                                        <form className="duty-form" key={item.dutyId}>
                                            <FontAwesomeIcon 
                                                icon={solid('circle')}
                                                className="circle-icon"
                                            />
                                            <input
                                                className="duty-item"
                                                type="text"
                                                placeholder={duties.duty}
                                            />
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