import React, { useState, useEffect } from 'react';

const StreakSystem = () => {
    const [streak, setStreak] = useState(0);

    useEffect(() => {
        const storedStreak = parseInt(localStorage.getItem('streak')) || 0;
        setStreak(storedStreak);
    }, []);

    const incrementStreak = () => {
        const newStreak = streak + 1;
        setStreak(newStreak);
        localStorage.setItem('streak', newStreak);
    };

    return (
        <div>
            <h2>Streak System</h2>
            <div id="streak">Streak: {streak}</div>
            <button onClick={incrementStreak}>Increment Streak</button>
        </div>
    );
};

export default StreakSystem;