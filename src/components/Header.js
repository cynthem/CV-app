import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

class Header extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            title: '',
            headerName: '',
            text: ''
        };
    }

    handleNameEdit = e => {
        this.setState({ name: e.target.value });
    }

    handleTitleEdit = e => {
        this.setState({ title: e.target.value });
    }
    
    handleHeaderEdit = e => {
        this.setState({ headerName: e.target.value });
    }
    
    handleTextEdit = e => {
        this.setState({ text: e.target.value });
    }

    render() {
        const { name, title, headerName, text } = this.state;

        return (
            <div id="header">
                <form className="name-form">
                    <input
                    className="name-input"
                    type="text"
                    placeholder={name ? name: "Jane Doe"}
                    onChange={this.handleNameEdit}
                    />
                    <FontAwesomeIcon icon={solid('pen-to-square')} />
                </form>

                <form className="title-form">
                    <input
                    className="title-input"
                    type="text"
                    placeholder={title ? title: "Entrepreneur"}
                    onChange={this.handleTitleEdit}
                    />
                    <FontAwesomeIcon icon={solid('pen-to-square')} />
                </form>

                <form className="header-form">
                    <input
                    className="header-input"
                    type="text"
                    placeholder={headerName ? headerName: "Profile"}
                    onChange={this.handleHeaderEdit}
                    />
                    <FontAwesomeIcon icon={solid('pen-to-square')} />
                </form>

                <form className="profile-form">
                    <input
                    className="profile-input"
                    type="text"
                    placeholder={text ? text: "This section is a great place to provide a brief statement or short summary of your career history and/or career intent in 2-5 sentences. Other titles for this section can include 'objective,' 'professional summary,' etc."}
                    onChange={this.handleHeaderEdit}
                    />
                    <FontAwesomeIcon icon={solid('pen-to-square')} />
                </form>
            </div>
        )
    }
}

export default Header;