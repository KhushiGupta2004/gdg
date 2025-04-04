import React from 'react';
import DietPlan from './components/DietPlan';
import SleepHabits from './components/SleepHabits';
import GoogleFit from './components/GoogleFit';
import StreakSystem from './components/StreakSystem';
import CalendarNotes from './components/CalendarNotes';

function App() {
    return (
        <div className="App">
            <h1>Personalized Habit Tracker</h1>
            <DietPlan />
            <SleepHabits />
            <GoogleFit />
            <StreakSystem />
            <CalendarNotes />
        </div>
    );
}

export default App;