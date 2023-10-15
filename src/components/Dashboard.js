import React, { useState, useEffect } from 'react';
import '../Dashboard.css'; // Import your CSS file here
import { NavBar } from './NavBar';
 

export const Dashboard = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(true);

    // Load saved mode and status from localStorage
    useEffect(() => {
        const savedMode = localStorage.getItem('mode');
        const savedStatus = localStorage.getItem('status');

        if (savedMode && savedMode === 'dark') {
            setDarkMode(true);
        }

        if (savedStatus && savedStatus === 'close') {
            setSidebarOpen(false);
        }
    }, []);

    // Handle toggle for dark mode
    const handleModeToggle = () => {
        setDarkMode(!darkMode);
        localStorage.setItem('mode', darkMode ? 'light' : 'dark');
    };

    // Handle toggle for sidebar
    const handleSidebarToggle = () => {
        setSidebarOpen(!sidebarOpen);
        localStorage.setItem('status', sidebarOpen ? 'open' : 'close');
    };

    return (
        <>
        <div className={`App ${darkMode ? 'dark' : ''}`} id="dashboard">
        <NavBar />
            <div id="loading"></div>

            <section className="dashboard" >
                <div className="dash-content">
                    <div className="overview">
                        <div className="title">
                            <i className="uil uil-tachometer-fast-alt"></i>
                            <span className="text" style={{color:"white"}}>Dashboard</span>
                        </div>
                    </div>
                    <div className="activity">
                        <div className="voila">
                        <div className="title">
                            <i className="uil uil-clock-three"></i>
                            <span className="texter" style={{color:"#fff"}}>Tracking Members Progress</span>
                        </div>
                        </div>
                        <div className="activity-data">
                            <table className="full-width-table styled-table">
                                <thead>
                                    <tr>
                                        <th>Serial No</th>
                                        <th>Member Name</th>
                                        <th>Level Completed</th>
                                        <th>Pathway</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Akshansh Singh</td>
                                        <td>Level 5</td>
                                        <td>Dynamic Leadership</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Siddhi Soni</td>
                                        <td>Level 4</td>
                                        <td>Strategic Relationship</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Saurabh Singh Dhurwey</td>
                                        <td>Level 1</td>
                                        <td>Leadership Development</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Namrata Chandrakar</td>
                                        <td>Level 3</td>
                                        <td>Strategic Relationship</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Bhumi Panjwani</td>
                                        <td>Level 3</td>
                                        <td>Leadership Development</td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>Pranav Chandrakar</td>
                                        <td>Level 1</td>
                                        <td>Leadership Development</td>
                                    </tr>
                                    <tr>
                                        <td>7</td>
                                        <td>Payal Gawri</td>
                                        <td>Level 1</td>
                                        <td>Leadership Development</td>
                                    </tr>
                                    <tr>
                                        <td>8</td>
                                        <td>Anshul Chauhan</td>
                                        <td>Level 3</td>
                                        <td>Leadership Development</td>
                                    </tr>
                                    <tr>
                                        <td>9</td>
                                        <td>Binti Hirani</td>
                                        <td>Level 1</td>
                                        <td>Leadership Development</td>
                                    </tr>
                                    <tr>
                                        <td>10</td>
                                        <td>Jaisi Chawra</td>
                                        <td>Level 1</td>
                                        <td>Leadership Development</td>
                                    </tr>
                                    <tr>
                                        <td>11</td>
                                        <td>Jai Kumar Dewangan</td>
                                        <td>Level 2</td>
                                        <td>Leadership Development</td>
                                    </tr>
                                    <tr>
                                        <td>12</td>
                                        <td>Harsh Raj Jabbal</td>
                                        <td>Level 1</td>
                                        <td>Leadership Development</td>
                                    </tr>
                                    <tr>
                                        <td>13</td>
                                        <td>Harshit Jain</td>
                                        <td>Level 2</td>
                                        <td>Leadership Development</td>
                                    </tr>
                                    <tr>
                                        <td>14</td>
                                        <td>Samriddhi Mishra</td>
                                        <td>Level 1</td>
                                        <td>Leadership Development</td>
                                    </tr>
                                    <tr>
                                        <td>15</td>
                                        <td>Rishabh Raj Tiwari</td>
                                        <td>Level 1</td>
                                        <td>Leadership Development</td>
                                    </tr>
                                    <tr>
                                        <td>16</td>
                                        <td>Gaurav Mishra</td>
                                        <td>Level 1</td>
                                        <td>Leadership Development</td>
                                    </tr>
                                    {/* Add more rows as needed */}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </div>
       
        </>
    );
};

export default Dashboard;
