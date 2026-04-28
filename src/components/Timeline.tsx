import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        {/* <h1>Education</h1> */}
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Education</h3>
            <h4 className="vertical-timeline-element-subtitle">Bachelor of Computer Engineering</h4>
            <p>
              Suan Sunandha Rajabhat University
              
            </p>
            <h4>GPAX : 3.60</h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">INTERNSHIP</h3>
            <h4 className="vertical-timeline-element-subtitle">Urban Way  Company</h4>
            <p>LOGIN PAGE</p>
            <p>
              Designed a clean and user-friendly login page interface with email and password fields. Focused on UI/UX design only (no authentication functionality implemented).
            </p>
            <p>FORM & TABLE PAGE</p>
            <p>
            Developed a structured data management interface combining form and table layouts. Included features such as sorting, filtering, pagination, and action buttons (view, edit, delete) to improve usability and organization of data.            
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">PROJECT</h3>
            <h4 className="vertical-timeline-element-subtitle">Automatic Chicken Feed Mixing System (IoT Project)</h4>
            <p>
              Developed a web-based control system using Node.js, integrating ESP32 with a load cell (HX711) for precise weight measurement and utilizing Raspberry Pi to control servo motors, enabling automated ingredient dispensing with configurable timing and adjustable feeding quantities.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
           
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
           icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">RESEARCH</h3>
            <h4 className="vertical-timeline-element-subtitle">PUBLICATIONS & CONFERENCE PRESENTATIONS</h4>
            <p>
              Suan Sunandha Rajabhat University, 2025
              Presented research on Embedded Chick Feed Mixing at the 7th International Conference on Power, Energy and Innovations (ICPEI 2025), and published in the official conference proceedings.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;