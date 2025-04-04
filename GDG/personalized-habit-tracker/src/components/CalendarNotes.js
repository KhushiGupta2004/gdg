import React, { useEffect, useState } from 'react';
import { fetchCalendarEvents, fetchNotes } from '../services/googleCalendarApi';

const CalendarNotes = () => {
    const [calendarEvents, setCalendarEvents] = useState([]);
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const getCalendarData = async () => {
            const events = await fetchCalendarEvents();
            setCalendarEvents(events);
        };

        const getNotesData = async () => {
            const notesData = await fetchNotes();
            setNotes(notesData);
        };

        getCalendarData();
        getNotesData();
    }, []);

    return (
        <div>
            <h2>Calendar Events</h2>
            <ul>
                {calendarEvents.map((event, index) => (
                    <li key={index}>{event.summary} at {event.start.dateTime}</li>
                ))}
            </ul>
            <h2>Notes</h2>
            <ul>
                {notes.map((note, index) => (
                    <li key={index}>{note}</li>
                ))}
            </ul>
        </div>
    );
};

export default CalendarNotes;