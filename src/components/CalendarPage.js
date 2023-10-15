import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../App.css';
import { NavBar } from './NavBar';

const CalendarPage = () => {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showTitle, setShowTitle] = useState(true); // Add state for showing/hiding title

  const onChange = (newDate) => {
    setDate(newDate);
  };

  const addEvent = (title, date, description) => {
    const newEvent = { title, date, description };
    setEvents([...events, newEvent]);
  };

  const handleDateClick = (formattedDate) => {
    const event = events.find((event) => event.date === formattedDate);
    setSelectedEvent(event);
  };

  const tileContent = ({ date, view }) => {
    const formattedDate = date.toISOString().split('T')[0];
    const event = events.find((event) => event.date === formattedDate);

    if (view === 'month' && event) {
      return <span> Tap</span>;
    }

    return null;
  };

  const handleAddEventClick = () => {
    const newEvents = [
      {
        title: 'Garba Themed Meeting',
        date: '2023-10-19',
        description: 'The event will be held at Toastmasters room in SSIPMT Raipur'
      },
      {
        title: 'Wedding Themed Meeting',
        date: '2023-10-26',
        description: 'The event will be held at Toastmasters room in SSIPMT Raipur'
      },
      // Add more events here
    ];

    setEvents([...events, ...newEvents]);
    setShowTitle(false); // Hide the title when the button is clicked
  };

  return (
    <div className="calendar-page">
      <NavBar />
      {showTitle && <h1 className="calendar-title">Event Calendar</h1>} {/* Conditionally render the title */}
      <button onClick={handleAddEventClick} className="add-event">
        View Meeting Dates
      </button>
      <div className="calendar-container">
        <Calendar
          onChange={onChange}
          value={date}
          tileContent={tileContent}
          onClickDay={(value) =>
            handleDateClick(value.toISOString().split('T')[0])
          }
          className="custom-calendar"
        />
      </div>
      {selectedEvent && (
        <div className="event-details">
          <h2>{selectedEvent.title}</h2>
          <p>{selectedEvent.description}</p>
        </div>
      )}
    </div>
  );
};

export default CalendarPage;
