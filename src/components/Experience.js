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
            state: '',
            start: '',
            end: '',
            duties: [
                { 
                    dutyId: uniqid(),
                    duty: '' 
                }
            ],
            experience: [
                {
                    id: uniqid(),
                    company: 'Lumon Industries',
                    position: 'Macrodata Refiner',
                    city: 'Kier',
                    state: 'NJ',
                    start: 'Feb 2019',
                    end: 'present',
                    duties: [
                        { 
                            dutyId: uniqid(),
                            duty: 'Sort encrypted numbers into digital bins as part of very important work.' 
                        },
                        { 
                            dutyId: uniqid(),
                            duty: 'Oversee orientation of newly severed employees including a tour of the Perpetuity Wing.' 
                        },
                        { 
                            dutyId: uniqid(),
                            duty: 'Enforce strict separation of departments to prevent another Optics and Design coup.' 
                        },
                        { 
                            dutyId: uniqid(),
                            duty: 'Memorized all works of Kier.' 
                        }
                    ]
                },
                {
                    id: uniqid(),
                    company: 'Company/Organization',
                    position: 'Job title',
                    city: 'City',
                    state: 'ST',
                    start: 'Start date',
                    end: 'End date',
                    duties: [
                        { 
                            dutyId: uniqid(),
                            duty: 'A bulleted list of a description of your responsibilities, achievements, etc.' 
                        },
                        { 
                            dutyId: uniqid(),
                            duty: 'Include 1-4 list items no longer than 1-2 sentences each.' 
                        }
                    ]
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
        this.setState({ state: e.target.value });
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
            state,
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
                            <div className="experience-top">
                                <div className="experience-left">
                                    <form className="company-form">
                                        <FontAwesomeIcon 
                                            icon={solid('pen-to-square')}
                                            className="edit-icon"
                                        />
                                        <input
                                            className="company-input"
                                            type="text"
                                            placeholder={exp.company}
                                        />
                                    </form>
                                    <form className="position-form">
                                        <FontAwesomeIcon 
                                            icon={solid('pen-to-square')}
                                            className="edit-icon"
                                        />
                                        <input
                                            className="position-input"
                                            type="text"
                                            placeholder={exp.position}
                                        />
                                    </form>
                                </div>

                                <div className="experience-right">
                                    <div className="experience-location">
                                        <FontAwesomeIcon 
                                            icon={solid('pen-to-square')}
                                            className="edit-icon"
                                        />
                                        <form className="city-form">
                                            <input
                                                className="city-input"
                                                type="text"
                                                placeholder={exp.city}
                                            />
                                        </form>
                                        <form className="state-form">
                                            <input
                                                className="state-input"
                                                type="text"
                                                placeholder={exp.state}
                                            />
                                        </form>
                                    </div>
                                    <div className="experience-dates">
                                        <FontAwesomeIcon 
                                            icon={solid('pen-to-square')}
                                            className="edit-icon"
                                        />
                                        <form className="start-form">
                                            <input
                                                className="start-input"
                                                type="text"
                                                placeholder={exp.start}
                                            />
                                        </form>
                                        <form className="end-form">
                                            <input
                                                className="end-input"
                                                type="text"
                                                placeholder={exp.end}
                                            />
                                        </form>
                                    </div>
                                </div>
                            </div>

                            {experience.duties.map(item => {
                                return (
                                    <div className="experience-duties">
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
                                            />
                                        </form>
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
                                            />
                                        </form>
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
                                            />
                                        </form>
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
                                            />
                                        </form>
                                        <FontAwesomeIcon 
                                            icon={solid('plus')}
                                            className="add-icon"
                                        />
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}

                <FontAwesomeIcon 
                    icon={solid('plus')}
                    className="big-add-icon"
                />
            </div>
        )
    }
}
  
export default Experience;