import React, { Component } from "react";
import uniqid from 'uniqid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

class Duties extends Component {
    constructor() {
        super();
        this.state = {
            duty: '',
            duties: 
            {
                dutyId: uniqid(),
                duty: ''
            }
        }
    }

    handleDutyEdit = e => {
        this.setState({ duty: e.target.value });
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

    handleRemoveDuty = key => {
        const removedDuty = this.state.duties.filter(item => item.dutyId !== key);
        this.setState({ duty: removedDuty });
    }

    <div className="experience-bottom">
                                {duties?.map(item => {
                                    return (
                                        <div className="duty-form" key={item.dutyId}>
                                            <FontAwesomeIcon 
                                                icon={solid('circle')}
                                                className="circle-icon"
                                            />
                                            <textarea
                                                className="duty-input"
                                                value={duty ? duty : "Add descriptions of your job responsibilities, achievements, etc., here. It's recommended to include 2-4 bullet points of 1-2 sentences each."}
                                                onChange={this.handleDutyEdit}
                                            >
                                            </textarea>
                                            <FontAwesomeIcon 
                                                icon={solid('trash-can')}
                                                className="trash-icon"
                                                onClick={this.handleRemoveDuty(item.dutyId)}
                                            />
                                        </div>
                                    )
                                })}
                                <FontAwesomeIcon 
                                    icon={solid('plus')}
                                    className="add-icon"
                                    onClick={this.onClickDuty}
                                />
                            </div>
}

export default Duties;