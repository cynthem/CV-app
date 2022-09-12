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

    render() {
        return (
            <div id="header">

            </div>
        )
    }
}

export default Header;