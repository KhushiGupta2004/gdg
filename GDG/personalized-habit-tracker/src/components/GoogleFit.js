import React, { useEffect, useState } from 'react';
import { fetchFitData } from '../services/googleFitApi';

const GoogleFit = () => {
    const [fitData, setFitData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getFitData = async () => {
            try {
                const data = await fetchFitData();
                setFitData(data);
            } catch (err) {
                setError('Failed to fetch fitness data');
            } finally {
                setLoading(false);
            }
        };

        getFitData();
    }, []);

    if (loading) {
        return <div>Loading fitness data...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h2>Google Fit Data</h2>
            {fitData ? (
                <div>
                    <p>Steps: {fitData.steps}</p>
                    <p>Calories: {fitData.calories}</p>
                </div>
            ) : (
                <p>No fitness data available.</p>
            )}
        </div>
    );
};

export default GoogleFit;