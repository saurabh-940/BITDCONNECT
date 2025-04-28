import "../Style/Calendar.scss";
import React, { useState } from 'react';

const Calendar = () => {
  const [events, setEvents] = useState({
    '2024-04-07': ['Event 1', 'Event 2'],
    '2024-04-10': ['Event 3'],
    // Add more events as needed
  });

  const [nationalHolidays, setNationalHolidays] = useState({
    '2024-01-01': 'New Year',
    '2024-04-09': 'Independence Day',
    '2024-04-25': 'Independence Day'
    // Add more national holidays as needed
  });

  const currentYear = new Date().getFullYear();
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedHoliday, setSelectedHoliday] = useState(null);
  const [selectedYear, setSelectedYear] = useState(currentYear);

  const renderEvents = (date) => {
    return events[date] || [];
  };

  const renderMonth = (year, month) => {
    const firstDay = new Date(year, month - 1, 1).getDay(); // Day of the week for the first day of the month (0 = Sunday, 1 = Monday, ...)
    const daysInMonth = new Date(year, month, 0).getDate(); // Number of days in the month
    const calendarDays = [];

    // Render empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      calendarDays.push(<div key={`empty-${i}`} className="calendar-cell empty-cell"></div>);
    }

    // Render days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      const date = `${year}-${month.toString().padStart(2, '0')}-${i.toString().padStart(2, '0')}`;
      const hasEvents = events[date] && events[date].length > 0;
      const isNationalHoliday = nationalHolidays[date];

      calendarDays.push(
        <div
          key={date}
          className={`calendar-cell ${hasEvents ? 'has-events' : ''} ${isNationalHoliday ? 'national-holiday' : ''} ${selectedDate === date ? 'selected' : ''}`}
          onClick={() => handleDateClick(date, isNationalHoliday)}
        >
          <div className="day-number">{i}</div>
          {isNationalHoliday && selectedDate === date && <div className="holiday-label">{nationalHolidays[date]}</div>}
        </div>
      );
    }

    return calendarDays;
  };

  const handleDateClick = (date, holidayName) => {
    setSelectedDate(date === selectedDate ? null : date);
    setSelectedHoliday(holidayName);
  };

  const handleMonthChange = (e) => {
    setCurrentMonth(parseInt(e.target.value));
  };

  const handleYearChange = (e) => {
    setSelectedYear(parseInt(e.target.value));
  };

  return (
    <div className="calendar-container mt-5 mb-5">
      <h1 className="calendar-title">{getMonthName(currentMonth)} {selectedYear}</h1>
      <div className="calendar-header">
        <button className="nav-button" onClick={() => setCurrentMonth(currentMonth - 1)}>Previous Month</button>
        <select className="month-select" value={currentMonth} onChange={handleMonthChange}>
          <option value={1}>January</option>
          <option value={2}>February</option>
          <option value={3}>March</option>
          <option value={4}>April</option>
          <option value={5}>May</option>
          <option value={6}>June</option>
          <option value={7}>July</option>
          <option value={8}>August</option>
          <option value={9}>September</option>
          <option value={10}>October</option>
          <option value={11}>November</option>
          <option value={12}>December</option>
        </select>
        <select className="year-select" value={selectedYear} onChange={handleYearChange}>
          {Array.from({ length: 10 }, (_, index) => (
            <option key={currentYear + index - 5} value={currentYear + index - 5}>{currentYear + index - 5}</option>
          ))}
        </select>
        <button className="nav-button" onClick={() => setCurrentMonth(currentMonth + 1)}>Next Month</button>
      </div>
      <div className="calendar-grid">
        <div className="day-of-week">Sun</div>
        <div className="day-of-week">Mon</div>
        <div className="day-of-week">Tue</div>
        <div className="day-of-week">Wed</div>
        <div className="day-of-week">Thu</div>
        <div className="day-of-week">Fri</div>
        <div className="day-of-week">Sat</div>
        {renderMonth(selectedYear, currentMonth)}
      </div>
      {selectedDate && (
        <div className="event-details">
          <h2>Events on {selectedDate}:</h2>
          {renderEvents(selectedDate).map((event, index) => (
            <div key={index}>{event}</div>
          ))}
        </div>
      )}
      {selectedHoliday && (
        <div className="event-details">
          <h2>Holiday: {selectedHoliday}</h2>
        </div>
      )}
    </div>
  );
};

const getMonthName = (month) => {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return months[month - 1];
};

export default Calendar;





