import React, { Component } from "react";
import BulletPoints from "./BulletPoints";
import uniqid from 'uniqid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

class Education extends Component {
    constructor(props) {
        super(props);
        this.state = {
            school: '',
            degree: '',
            city: '',
            location: '',
            date: '',
            bullets: [
                {
                    id: uniqid()
                }
            ]
        }
    }

    handleSchoolEdit = e => {
        this.setState({ school: e.target.value });
    }

    handleDegreeEdit = e => {
        this.setState({ degree: e.target.value });
    }

    handleCityEdit = e => {
        this.setState({ city: e.target.value });
    }

    handleLocationEdit = e => {
        this.setState({ location: e.target.value });
    }

    handleDateEdit = e => {
        this.setState({ date: e.target.value });
    }

    renderBullet = () => {
        this.setState({ bullets: [...this.state.bullets, { id: uniqid() }]});
    }

    removeBullet = key => {
        const bulletPoints = this.state.bullets.filter(point => point.id !== key);
        this.setState({ bullets: bulletPoints });
    }

    render() {
        const {
            school,
            degree,
            city,
            location,
            date,
            bullets
        } = this.state;

        return (
            <div className="education-container" key={this.props.eduId}>
                <div className="education-top">
                    <input
                        className="school-input"
                        type="text"
                        maxLength="28"
                        placeholder={school ? school : "College University School"}
                        onChange={this.handleSchoolEdit}
                    />
                    <div className="education-location">
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
                <div className="education-middle">
                    <input
                        className="degree-input"
                        type="text"
                        maxLength="40"
                        placeholder={degree ? degree : "Bachelor of Arts in Degree"}
                        onChange={this.handleDegreeEdit}
                    />   
                    <input
                        className="date-input"
                        type="text"
                        maxLength="22"
                        placeholder={date ? date : "Graduation date"}
                        onChange={this.handleDateEdit}
                    />
                </div>
                <div className="education-bottom">
                    {[...bullets].map(item => {
                        return (
                            <div className="bullet-render" key={item.id}>
                                <BulletPoints key={item.id} bulletId={item.id} />
                                <FontAwesomeIcon 
                                    icon={solid('trash-can')}
                                    className="trash-icon"
                                    onClick={() => this.removeBullet(item.id)}
                                />
                            </div>
                        )
                    })}
                    <div className="bullet-edit">
                        <FontAwesomeIcon 
                            icon={solid('plus')}
                            className="add-icon"
                            onClick={() => this.renderBullet()}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
  
export default Education;