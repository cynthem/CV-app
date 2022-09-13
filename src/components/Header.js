import React, { Component } from "react";

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
                <input
                    className="name-input"
                    type="text"
                    maxLength="22"
                    placeholder={name ? name : "Jane Doe"}
                    onChange={this.handleNameEdit}
                />
                <input
                    className="title-input"
                    type="text"
                    maxLength="70"
                    placeholder={title ? title : "Entrepreneur"}
                    onChange={this.handleTitleEdit}
                />
                <textarea
                    className="profile-input"
                    maxLength="500"
                    value={text ? text : "This section is a great place to provide a short summary of your career history or a brief statement of your career objective in 2-5 sentences. Other titles for this section can include 'objective,' 'professional summary,' etc."}
                    onChange={this.handleTextEdit}
                >
                </textarea>
            </div>
        )
    }
}

export default Header;