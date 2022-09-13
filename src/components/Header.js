import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

class Header extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            title: '',
            text: ''
        };
    }

    handleNameEdit = e => {
        this.setState({ name: e.target.value });
    }

    handleTitleEdit = e => {
        this.setState({ title: e.target.value });
    }
    
    handleTextEdit = e => {
        this.setState({ text: e.target.value });
    }

    render() {
        const { name, title, text } = this.state;

        return (
            <div id="header">
                <form className="name-form">
                    <FontAwesomeIcon 
                        icon={solid('pen-to-square')}
                        className="edit-icon"
                    />
                    <input
                    className="name-input"
                    type="text"
                    maxLength="22"
                    placeholder={name ? name: "Jane Doe"}
                    onChange={this.handleNameEdit}
                    />
                </form>

                <form className="title-form">
                    <FontAwesomeIcon 
                        icon={solid('pen-to-square')}
                        className="edit-icon"
                    />
                    <input
                    className="title-input"
                    type="text"
                    maxLength="70"
                    placeholder={title ? title: "Entrepreneur"}
                    onChange={this.handleTitleEdit}
                    />
                </form>

                <form className="profile-form">
                    <FontAwesomeIcon 
                        icon={solid('pen-to-square')}
                        className="edit-icon"
                    />
                    <textarea
                        className="profile-input"
                        maxLength="480"
                        onChange={this.handleTextEdit}
                    >
                        {text ? text: "This section is a great place to provide a short summary of your career history or a brief statement of your career objective in 2-5 sentences. Other titles for this section can include 'objective,' 'professional summary,' etc."}
                    </textarea>
                </form>
            </div>
        )
    }
}

export default Header;