import React, { Component } from "react";
import SidePanel from './SidePanel';
import Header from './Header';
import Experience from './Experience';
import Education from './Education';
import uniqid from 'uniqid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

class Resume extends Component {
    constructor(props) {
        super(props);
        this.state = {
            experiences: [
                {
                    id: uniqid()
                }
            ],
            education: [
                {
                    id: uniqid()
                }
            ]
        }
    }

    renderExperience = () => {
        this.setState({ experiences: [...this.state.experiences, { id: uniqid() }]});
    }

    removeExperience = key => {
        const jobs = this.state.experiences.filter(job => job.id !== key);
        this.setState({ experiences: jobs });
    }

    renderEducation = () => {
        this.setState({ education: [...this.state.education, { id: uniqid() }]});
    }

    removeEducation = key => {
        const schools = this.state.education.filter(school => school.id !== key);
        this.setState({ education: schools });
    }

    render() {
        const { experiences, education } = this.state;

        return (
            <div id="resume">
                <SidePanel />
                <main>
                    <Header />
                    <div id="experience">
                        <h2>Experience</h2>
                        {[...experiences].map(exp => {
                            return (
                                <div className="experience-item" key={exp.id}>
                                    <FontAwesomeIcon 
                                        icon={solid('trash-can')}
                                        className="big-trash-icon"
                                        onClick={() => this.removeExperience(exp.id)}
                                    />
                                    <Experience key={exp.id} expId={exp.id} />
                                </div>
                            )
                        })}
                        <FontAwesomeIcon 
                            icon={solid('plus')}
                            className="big-add-icon"
                            onClick={this.renderExperience}
                        />
                    </div>
                    <div id="education">
                        <h2>Education</h2>
                        {[...education].map(edu => {
                            return (
                                <div className="education-item">
                                    <FontAwesomeIcon 
                                        icon={solid('trash-can')}
                                        className="big-trash-icon"
                                        onClick={() => this.removeEducation(edu.id)}
                                    />
                                    <Education key={edu.id} eduId={edu.id} />
                                </div>
                            )
                        })}
                        <FontAwesomeIcon 
                            icon={solid('plus')}
                            className="big-add-icon"
                            onClick={this.renderEducation}
                        />
                    </div>
                </main>
            </div>
        )
    }
}

export default Resume;