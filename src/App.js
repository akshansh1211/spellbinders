
import "./App.css";
// import './Dashboard.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { DashBoardNav } from "./components/DashBoardNav";
import { Banner } from "./components/Banner";
import { EducationProgram } from "./components/EducationProgram";
import { Projects } from "./components/Projects";
import { UpcommingEvents } from "./components/UpcommingEvents";
import { Toastfest } from "./components/Toastfest";
import { Footer } from "./components/Footer";
import MeetingRoles  from "./components/MeetingRoles";
import { Login } from "./components/Login";
import { PhotoGallery } from "./components/PhotoGallery";
import { RegisterPage } from "./components/RegisterPage";
import { Dashboard } from "./components/Dashboard";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import CalendarPage from "./components/CalendarPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <NavBar />
                <Banner />
                <EducationProgram />
                <Projects />
                <UpcommingEvents />
                <PhotoGallery />
                <Toastfest/>
                <Footer />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <NavBar />
                <Login />
              </>
            }
          />
          <Route
            path="/RegisterPage"
            element={
              <>
                <NavBar />
                <RegisterPage />
              </>
            }
          />
          <Route
            path="/DashboardNav" // Corrected path
            element={
              <>
                
                <Dashboard/>
              </>
            }
          /> 
              <Route path="/CalendarPage" element={<><CalendarPage/></>} />
              <Route path="/MeetingRoles" element={<><MeetingRoles/></>} />
              {/* Add more routes as needed */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
