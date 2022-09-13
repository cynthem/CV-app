import React, { Component } from "react";
import SidePanel from './SidePanel';
import Header from './Header';
import Experience from './Experience';
import Education from './Education';

class Resume extends Component {
    render() {
        return (
            <div id="resume">
                <SidePanel />
                <main>
                    <Header />
                    <Experience />
                    <Education />
                </main>
            </div>
        )
    }
}

export default Resume;