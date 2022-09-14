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

    handleEmailEdit = e => {
        this.setState({ email: e.target.value });
    }

    handleAddressEdit = e => {
        this.setState({ address: e.target.value });
    }

    handleWebsiteEdit = e => {
        this.setState({ website: e.target.value });
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
                                type="tel"
                                placeholder={phone ? phone : "555-555-5555"}
                                onChange={this.handlePhoneEdit}
                            />
                        </div>
                        <div className="email">
                            <FontAwesomeIcon 
                                icon={solid('envelope')}
                                className="email-icon"
                            />
                            <input
                                className="email-input"
                                type="email"
                                placeholder={email ? email : "email@gmail.com"}
                                onChange={this.handleEmailEdit}
                            />
                        </div>
                        <div className="address">
                            <FontAwesomeIcon 
                                icon={solid('location-dot')}
                                className="address-icon"
                            />
                            <textarea
                                className="address-input"
                                value={address ? address : "123 Your Address St. City, ST 90210"}
                                onChange={this.handleAddressEdit}
                            ></textarea>
                        </div>
                        <div className="website">
                            <FontAwesomeIcon 
                                icon={solid('globe')}
                                className="website-icon"
                            />
                            <textarea
                                className="website-input"
                                value={website ? website : "www.website.com linkedin.com/in/name "}
                                onChange={this.handleWebsiteEdit}
                            ></textarea>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;