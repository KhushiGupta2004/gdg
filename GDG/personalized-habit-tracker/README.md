# Personalized Habit Tracker

This project is a personalized habit tracker that integrates with the Gemini API, Google Fit, and Google Calendar. It allows users to manage their diet plans, sleep habits, fitness data, streaks, and calendar events in one convenient application.

## Features

- **Personalized Diet Plan**: Fetch and display a diet plan tailored to the user's preferences using the Gemini API.
- **Sleep Habits**: Record and display sleep times, helping users track their sleep patterns.
- **Google Fit Integration**: Fetch and display fitness data such as steps and calories burned from the Google Fit API.
- **Streak System**: Manage and display a streak counter similar to Snapchat, allowing users to track their consistency.
- **Calendar & Notes Integration**: Display calendar events and notes using the Google Calendar API.

## Project Structure

```
personalized-habit-tracker
├── public
│   ├── index.html
│   └── styles.css
├── src
│   ├── components
│   │   ├── DietPlan.js
│   │   ├── SleepHabits.js
│   │   ├── GoogleFit.js
│   │   ├── StreakSystem.js
│   │   └── CalendarNotes.js
│   ├── services
│   │   ├── geminiApi.js
│   │   ├── googleFitApi.js
│   │   └── googleCalendarApi.js
│   ├── App.js
│   └── index.js
├── package.json
├── .gitignore
└── README.md
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd personalized-habit-tracker
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

1. Start the development server:
   ```
   npm start
   ```
2. Open your browser and navigate to `http://localhost:3000` to view the application.

## API Integration

- **Gemini API**: Used for fetching personalized diet plans.
- **Google Fit API**: Used for fetching fitness data.
- **Google Calendar API**: Used for fetching calendar events and notes.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.