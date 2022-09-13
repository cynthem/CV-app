import React, { Component } from "react";
import SidePanel from './SidePanel';
import Header from './Header';

import Education from './Education';

class Resume extends Component {
    render() {
        return (
            <div id="resume">
                <SidePanel />
                <main>
                    <Header />
                    
                    <Education />
                </main>
            </div>
        )
    }
}

export default Resume;