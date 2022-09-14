import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

class Contact extends Component {
    constructor() {
        super();
        this.state = {
            phone: '',
            email: '',
            address: '',
            website: ''
        }
    }

    handlePhoneEdit = e => {
        this.setState({ phone: e.target.value });
    }

    render() {
        const { phone, email, address, website } = this.state;

        return (
            <div className="contact-container">
                <div className="contact">
                    <div className="contact-content">
                        <div className="phone">
                            <FontAwesomeIcon 
                                icon={solid('phone')}
                                className="phone-icon"
                            />
                            <input
                                className="phone-input"
                                type="phone"
                                //placeholder={phone ? phone : "1"}
                                onChange={this.handlePhoneEdit}
                            />
                        </div>
                        <div className="email"></div>
                        <div className="address"></div>
                        <div className="website"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;