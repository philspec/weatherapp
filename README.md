# Weather App

Welcome to the Weather App! This app provides current weather information and forecasts using the OpenWeatherMap API. Users can sign up using OAuth and access weather data for free. The app is built with React, Vite, and Supabase, and is hosted on Netlify at https://openweatherfree.netlify.app

## Features

- **Current Weather**: Get real-time weather information for any location.
- **Weather Forecast**: Access 5-day weather forecasts with detailed data.
- **User Authentication**: Secure sign-up and login using OAuth via Supabase.
- **Responsive Design**: Works seamlessly on desktop and mobile devices.
- **Analytics**: Integrated with Google Analytics for tracking user interactions.

## Tech Stack

- **React**: JavaScript library for building user interfaces.
- **Vite**: Frontend build tool for fast development.
- **Supabase**: Backend as a Service (BaaS) providing authentication.
- **React Router**: Declarative routing for React applications.
- **Google Analytics**: Web analytics service for tracking and reporting.
- **Netlify**: Hosting platform for modern web projects.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/weather-app.git
    cd weather-app
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Set up environment variables:

    Create a `.env` file in the root directory with the following variables:

    ```bash
    VITE_SUPABASE_URL=your_supabase_url
    VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
    VITE_OPENWEATHERMAP_API_KEY=your_openweathermap_api_key
    ```

4. Start the development server:

    ```bash
    npm run dev
    ```

5. Build for production:

    ```bash
    npm run build
    ```

6. Preview the production build:

    ```bash
    npm run preview
    ```

## Deployment

The app is deployed on Netlify. To deploy your own instance, follow these steps:

1. Sign up for Netlify and create a new site.
2. Link your GitHub repository to Netlify.
3. Set the build command to:

    ```bash
    npm run build
    ```

4. Set the publish directory to:

    ```bash
    dist
    ```

5. Add environment variables in Netlify under **Site settings > Build & deploy > Environment**:

    - `VITE_SUPABASE_URL`
    - `VITE_SUPABASE_ANON_KEY`
    - `VITE_OPENWEATHERMAP_API_KEY`

6. Deploy the site.

## Usage

- Sign up or log in using OAuth.
- Search for a location to get the current weather and forecast.
- View detailed weather information including temperature, humidity, wind speed, and more.

## Contributing

We welcome contributions! Here’s how you can help:

1. Fork the repository.
2. Create a new branch:

    ```bash
    git checkout -b feature-name
    ```

3. Make your changes and commit them:

    ```bash
    git commit -m "Add feature"
    ```

4. Push to the branch:

    ```bash
    git push origin feature-name
    ```

5. Open a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contact

For questions or suggestions, please contact us at your-email@example.com.
