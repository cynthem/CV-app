import React, { Component } from "react";
import uniqid from 'uniqid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

class Experience extends Component {
    constructor() {
        super();
        this.state = {
            company: '',
            position: '',
            city: '',
            state: '',
            start: '',
            end: '',
            duties: [{ duty: '' }],
            experience: [
                {
                    id: uniqid(),
                    company: 'Lumon Industries',
                    position: 'Macrodata Refiner',
                    city: 'Kier',
                    state: 'NJ',
                    start: 'Feb 2019',
                    end: 'present',
                    duties: [
                        { duty: 'Sort encrypted numbers into digital bins as part of very important work.' },
                        { duty: 'Oversee orientation of newly severed employees including a tour of the Perpetuity Wing.' },
                        { duty: 'Enforce strict separation of departments to prevent another Optics and Design coup.' },
                        { duty: 'Memorized all works of Kier.' }
                    ]
                },
                {
                    id: uniqid(),
                    company: 'Company/Organization',
                    position: 'Job title',
                    city: 'City',
                    state: 'ST',
                    start: 'Start date',
                    end: 'End date',
                    duties: [
                        { duty: 'A bulleted list of a description of your responsibilities, achievements, etc.' },
                        { duty: 'Include 1-4 list items no longer than 1-2 sentences each.' }
                    ]
                }
            ]
        };
    }

    render() {
        return (
            <div id="experience">
                experience
            </div>
        )
    }
}
  
export default Experience;