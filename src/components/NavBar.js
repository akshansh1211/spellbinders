import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import CalendarPage from "./CalendarPage";
import Login from "./Login";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { DashBoardNav } from "./Dashboard";
import { Link, NavLink } from "react-router-dom"; // Import NavLink

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="md" className={`navbar-no-padding ${scrolled ? "scrolled" : ""}`}>
      <Container className={`no-padding-container`}>
        <Navbar.Brand href="/">
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link
              to="/"
              className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('home')}
              style={{
                color: '#fff',
                textDecoration: 'none',
                fontWeight: 400,
                letterSpacing: '0.8px',
                padding: '0 25px',
                fontSize: '18px',
                opacity: 0.75,
              }}
            >
              Home
            </Link>

            {/* <Nav.Link
              href="#EducationProgram"
              className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('EducationProgram')}
            >
              Education Program
            </Nav.Link>

            <Nav.Link
              href="#pastevents"
              className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('projects')}
            >
              Past Events
            </Nav.Link>

            <Nav.Link
              href="#Glimpses"
              className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('Glimpses')}
            >
              Glimpses
            </Nav.Link>

            <Nav.Link
              href="#Toastfest"
              className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('Toastfest')}
            >
              Toastfest
            </Nav.Link> */}

            {/* Add NavLink for Calendar */}
            <NavLink
              to="../CalendarPage"
              activeClassName="active"
              className={activeLink === 'CalendarPage' ? 'active navbar-link link' : 'navbar-link link'}
              onClick={() => onUpdateActiveLink('CalendarPage')}
            >
              Calendar
            </NavLink>

            <NavLink
              to="../MeetingRoles"
              activeClassName="active"
              className={activeLink === 'MeetingRoles' ? 'active navbar-link link' : 'navbar-link link'}
              onClick={() => onUpdateActiveLink('MeetingRoles')}
            >
              Meeting Roles
            </NavLink>

            <NavLink
              to="../DashboardNav"
              activeClassName="active"
              className={activeLink === 'DashboardNav' ? 'active navbar-link link' : 'navbar-link link'}
              onClick={() => onUpdateActiveLink('DashboardNav')}
            >
              Dashboard
            </NavLink>
          </Nav>

          

          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/ssipmt-spellbinders-toastmasters-club-6483b021a" target="_blank">
                <img src={navIcon1} alt="" />
              </a>
              <a href="https://instagram.com/ssipmtspellbinders?igshid=MmU2YjMzNjRlOQ==" target="_blank">
                <img src={navIcon3} alt="" />
              </a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
