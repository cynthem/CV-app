import React, { Component } from "react";
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
        return (
            <div>hello</div>
        )
    }
}
  
export default Education;