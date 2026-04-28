import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faReact, 
  faJs, 
  faHtml5, 
  faCss3Alt,
  
  
  
} from '@fortawesome/free-brands-svg-icons';import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import { faMicrochip, faCode } from '@fortawesome/free-solid-svg-icons';

const labelsFirst = [
    "HTML",
    "CSS",
    "JavaScript",
    "React"
];

const labelsSecond = [
    "REST API"
];

const labelsThird = [
    "ESP32",
    "Raspberry Pi",
    "Servo Motor",
    "Load Cell",
    "Git",
    "VS Code"
];

function Expertise() {
    return (
    <div className="container" id="skills">
        <div className="skills-container">
            <h1>Technical Skills</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <FontAwesomeIcon icon={faJs} size="3x" />
                    <FontAwesomeIcon icon={faHtml5} size="3x" />
                    <FontAwesomeIcon icon={faCss3Alt} size="3x" />
                    <h3>Frontend Development</h3>
                    {/* <p>I have built a diverse array of web applications from scratch using modern technologies such as React and Flask. I have a strong proficiency in the SDLC process and frontend + backend development.</p> */}
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faCode} size="3x" />
                    <h3>Backend</h3>
                    {/* <p>Once the application is built, I help clients set up DevOps testing, CI/CD pipelines, and deployment automation to support the successful Go-Live.</p> */}
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faMicrochip} size="3x" />
                    <h3>IoT & Tools</h3>
                    {/* <p>Stay relevant in the market by leveraging the latest AI models in your projects. I have professional experience building enterprise grade GenAI-enabled solutions to empower intelligent decision making.</p> */}
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                    
                </div>
                
            </div>
        </div>
    </div>
    );
}

export default Expertise;