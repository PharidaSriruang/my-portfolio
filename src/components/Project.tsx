import React from "react";
import mock05 from '../assets/images/intern.png';
import mock06 from '../assets/images/mock02.png';
import mock07 from '../assets/images/certificate.png';
import mock08 from '../assets/images/jp2.png';
import mock09 from '../assets/images/Hardwear.png';
import mock10 from '../assets/images/Project.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://mixercontroller.com/login.html" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://mixercontroller.com/login.html" target="_blank" rel="noreferrer"><h2>Web Application Interface</h2></a>         
                <p>This figure presents the web application interface used to control the system. Users can set feeding schedules and adjust the quantity of food released through the interface.
It also provides real-time weight monitoring and remote control functionality. The web application is developed using HTML, CSS, and JavaScript.</p>
            </div>
            <div className="project">
                <img src={mock09} className="zoom" alt="thumbnail" width="100%"/>
                <h2>Hardware Designe</h2>
                <p>This figure shows the hardware design and assembly of the system. 
                 A Raspberry Pi 4 is used as the main controller, connected to a Servo Driver HAT to control multiple servo motors.
An ESP32 is used to read weight data from load cells (via HX711) and transmit the data over WiFi to the server. The system is designed to ensure efficient communication between all components.</p>
            </div>
            <div className="project">
                <img src={mock08} className="zoom" alt="thumbnail" width="100%"/>
               <h2>System Workflow</h2>
                <p>This figure illustrates the workflow of the automated feeding and mixing system. Servo motors are used to control the flow of ingredients, including rice bran, broken rice, and feed pellets.
The system measures weight using load cells to ensure accurate quantities. The weight data is processed via an ESP32 and sent to a Raspberry Pi for further processing and display on a web application.</p>
            </div>
            <div className="project">
                <img src={mock07} className="zoom" alt="thumbnail" width="100%"/>
                <h2>Conference Certificate</h2>
                       
                <p>Presented research on Embedded Chick Feed Mixing at the 7th International Conference on Power, Energy and Innovations (ICPEI 2025), and published in the official conference proceedings.</p>     
            </div>
            <div className="project">
                <img src={mock06} className="zoom" alt="thumbnail" width="100%"/>
                <h2>Weather Application</h2>
                <p>This weather application provides real-time weather updates such as temperature, humidity, and wind speed by fetching data from the OpenWeatherMap API. It is built using HTML, CSS, and JavaScript.</p>
            </div>
            <div className="project">
                <img src={mock05} className="zoom" alt="thumbnail" width="100%"/>
                <h2>Internship Experience</h2>
                <p>LOGIN PAGE Designed a user-friendly login page interface with email and password input fields, focusing on a clean and simple layout.</p>
                <p>FORM PAGE Designed a structured form page layout for data input with a clear and organized interface.</p>

                <p>TABLE PAGE Designed a data table page layout to display structured information with clear headers and rows for easy</p>
            </div>

        </div>
    </div>
    );
}

export default Project;