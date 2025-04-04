import React, { useEffect, useState } from 'react';
import { fetchDietPlan } from '../services/geminiApi';

const DietPlan = () => {
    const [dietPlan, setDietPlan] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getDietPlan = async () => {
            try {
                const plan = await fetchDietPlan();
                setDietPlan(plan);
            } catch (err) {
                setError('Failed to fetch diet plan');
            } finally {
                setLoading(false);
            }
        };

        getDietPlan();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h2>Personalized Diet Plan</h2>
            <p>{dietPlan}</p>
        </div>
    );
};

export default DietPlan;