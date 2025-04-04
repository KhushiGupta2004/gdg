// This file contains functions to interact with the Google Fit API, including fetching fitness data.

const fetchFitData = async (accessToken) => {
    const response = await fetch('https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            aggregateBy: [{
                dataTypeName: 'com.google.step_count.delta',
                dataSourceId: 'derived:com.google.step_count.delta:com.google.android.gms:merge_step_deltas',
            }],
            bucketByTime: { durationMillis: 86400000 },
            startTimeMillis: Date.now() - 7 * 24 * 60 * 60 * 1000, // Last 7 days
            endTimeMillis: Date.now(),
        }),
    });

    if (!response.ok) {
        throw new Error('Failed to fetch data from Google Fit API');
    }

    const data = await response.json();
    return data;
};

export { fetchFitData };