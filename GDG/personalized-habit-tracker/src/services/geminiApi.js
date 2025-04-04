const BASE_URL = 'https://api.gemini.com/v1'; // Replace with the actual Gemini API base URL

export async function fetchDietPlan(userId) {
    try {
        const response = await fetch(`${BASE_URL}/diet/${userId}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching diet plan:', error);
        throw error;
    }
}

// Additional functions for interacting with the Gemini API can be added here as needed.