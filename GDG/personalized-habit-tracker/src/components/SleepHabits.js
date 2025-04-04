import React, { useState } from 'react';

const SleepHabits = () => {
    const [sleepTime, setSleepTime] = useState('');
    const [wakeTime, setWakeTime] = useState('');
    const [sleepRecords, setSleepRecords] = useState([]);

    const recordSleep = () => {
        if (sleepTime && wakeTime) {
            const newRecord = { sleepTime, wakeTime };
            setSleepRecords([...sleepRecords, newRecord]);
            setSleepTime('');
            setWakeTime('');
        }
    };

    return (
        <div>
            <h2>Sleep Habits</h2>
            <input 
                type="time" 
                value={sleepTime} 
                onChange={(e) => setSleepTime(e.target.value)} 
                placeholder="Sleep Time" 
            />
            <input 
                type="time" 
                value={wakeTime} 
                onChange={(e) => setWakeTime(e.target.value)} 
                placeholder="Wake Time" 
            />
            <button onClick={recordSleep}>Record Sleep</button>
            <div>
                <h3>Recorded Sleep Data</h3>
                <ul>
                    {sleepRecords.map((record, index) => (
                        <li key={index}>
                            Sleep: {record.sleepTime}, Wake: {record.wakeTime}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SleepHabits;