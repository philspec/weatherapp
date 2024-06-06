Weather App
Welcome to the Weather App! This app provides current weather information and forecasts using the OpenWeatherMap API. Users can sign up using OAuth and access weather data for free. The app is built with React, Vite, and Supabase, and is hosted on Netlify.

Features
Current Weather: Get real-time weather information for any location.
Weather Forecast: Access 5-day weather forecasts with detailed data.
User Authentication: Secure sign-up and login using OAuth via Supabase.
Responsive Design: Works seamlessly on desktop and mobile devices.
Analytics: Integrated with Google Analytics for tracking user interactions.
Tech Stack
React: JavaScript library for building user interfaces.
Vite: Frontend build tool for fast development.
Supabase: Backend as a Service (BaaS) providing authentication.
React Router: Declarative routing for React applications.
Google Analytics: Web analytics service for tracking and reporting.
Netlify: Hosting platform for modern web projects.
Getting Started
Prerequisites
Node.js (v14 or higher)
npm (v6 or higher)
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/weather-app.git
cd weather-app
Install dependencies:

bash
Copy code
npm install
Set up environment variables:
Create a .env file in the root directory with the following variables:

bash
Copy code
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_OPENWEATHERMAP_API_KEY=your_openweathermap_api_key
Start the development server:

bash
Copy code
npm run dev
Build for production:

bash
Copy code
npm run build
Preview the production build:

bash
Copy code
npm run preview
Deployment
The app is deployed on Netlify. To deploy your own instance, follow these steps:

Sign up for Netlify and create a new site.
Link your GitHub repository to Netlify.
Set the build command to:
bash
Copy code
npm run build
Set the publish directory to:
bash
Copy code
dist
Add environment variables in Netlify under Site settings > Build & deploy > Environment:
VITE_SUPABASE_URL
VITE_SUPABASE_ANON_KEY
VITE_OPENWEATHERMAP_API_KEY
Deploy the site.
Usage
Sign up or log in using OAuth.
Search for a location to get the current weather and forecast.
View detailed weather information including temperature, humidity, wind speed, and more.
Contributing
We welcome contributions! Here’s how you can help:

Fork the repository.
Create a new branch:
bash
Copy code
git checkout -b feature-name
Make your changes and commit them:
bash
Copy code
git commit -m "Add feature"
Push to the branch:
bash
Copy code
git push origin feature-name
Open a pull request.
License
This project is licensed under the MIT License. See the LICENSE file for details.

Contact
For questions or suggestions, please contact us at your-email@example.com.