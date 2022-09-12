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
                <form className="user-name">
                    <input
                    className="user-name-input"
                    type="text"
                    placeholder="Jane Doe"
                    onChange={this.handleNameEdit}
                    />
                    <FontAwesomeIcon icon={solid('pen-to-square')} />
                </form>
                <div className="user-title">
                    <h2>{title ? title: 'Entrepreneur'}</h2>
                </div>
                <div className="user-header">
                    <h3>{headerName ? headerName: 'Profile'}</h3>
                </div>
                <div className="user-profile"></div>
            </div>
        )
    }
}

export default Header;