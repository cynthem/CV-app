import React, { Component } from "react";

class Header extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            title: '',
            headerName: '',
            text: '',
            edit: false
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
    
    toggleEdit = e => {
        this.setState(prevState => ({
            edit: !prevState.edit
        }));
    }

    render() {
        const { name, title, headerName, text, edit } = this.state;

        return (
            <div id="header">
                <div className="user-name">
                    <h1>{name ? name: 'Jane Doe'}</h1>
                </div>
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