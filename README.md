# Netflix Clone App

This project is a Netflix clone app, which aims to replicate the user interface and functionality of the popular streaming platform Netflix. The app allows users to explore and watch a variety of movies and TV shows, as well as manage their accounts, authenticate, and save favorite content.

![Netflix Clone App Screenshot](https://drive.google.com/file/d/1tbouK45HvUWfUGOyjR4KefheG_HMFeuV/view?usp=sharing)

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Built With](#built-with)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Project Overview

The Netflix clone app is designed to provide users with a familiar and engaging streaming experience similar to Netflix. It offers a range of features, including:

- **User Authentication**: Users can sign in or sign up to create and manage their accounts.

- **Browse Content**: Users can explore a wide selection of movies and TV shows organized into different categories such as popular, top-rated, trending, horror, and upcoming.

- **Save Favorites**: Authenticated users can like and save their favorite movies and TV shows to their personal list.

- **Responsive Design**: The app is built with responsive design principles to ensure it works seamlessly on various devices, including desktops, tablets, and smartphones.

- **Protected Routes**: Certain routes are protected and can only be accessed by authenticated users.

## Features

### User Authentication

- Sign up: Users can create an account by providing an email and password.

- Sign in: Registered users can log in using their email and password.

- Log out: Users can securely log out of their accounts.

### Explore Content

- Browse movies and TV shows by category, including popular, top-rated, trending, horror, and upcoming.

- Click on individual items to view more details, such as a description and rating.

- Use left and right chevron buttons to navigate through rows of content.

### Save Favorites

- Authenticated users can like and save their favorite movies and TV shows.

- The app utilizes Firebase Cloud Firestore to store and retrieve users' saved content.

### Responsive Design

- The app is designed to be responsive, ensuring that the user interface adapts to various screen sizes and devices.

- Users can enjoy the Netflix clone experience on desktops, tablets, and mobile devices.

### Protected Routes

- Certain routes are protected and can only be accessed by authenticated users.

- The `ProtectedRoute` component restricts access to unauthorized users.

## Project Structure

The project is organized into multiple components and features, including:

- **Navbar**: Provides navigation links and authentication options.

- **Home**: The main landing page that displays rows of movies and TV shows.

- **Row**: Displays a row of movies or TV shows based on a specific category or genre.

- **Movie**: Represents an individual movie or TV show item with the option to like and save it.

- **Login and Signup**: Authentication components for user sign-in and registration.

- **Account**: The user account page that displays saved shows.

- **ProtectedRoute**: A component that restricts access to specific routes for authenticated users.

- **Requests.js**: Defines API endpoints for fetching movie data from The Movie Database (TMDb) API.

- **Firebase Configuration**: Contains Firebase setup for user authentication and Cloud Firestore.

## Installation

To run the Netflix clone app locally, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/netflix-clone.git

    Change to the project directory:

    bash

cd netflix-clone

Install the project dependencies:

bash

npm install

Start the development server:

bash

    npm start

    Open your web browser and access the app at http://localhost:3000.

Usage

    Navigate to the Netflix clone app at http://localhost:3000.

    Explore the available content categories on the home page.

    Sign in or sign up to access user-specific features and save favorite movies and TV shows.

    Click on individual items to view more details and enjoy streaming content.

Built With

    React - JavaScript library for building user interfaces.

    React Router - Routing library for React.

    Firebase - Backend services for authentication and Cloud Firestore.

    Axios - Promise-based HTTP client for making network requests.

    Tailwind CSS - Utility-first CSS framework for styling.

    The Movie Database (TMDb) API - Source of movie and TV show data.

Contributing

Contributions to this project are welcome. If you have suggestions, improvements, or bug fixes, please feel free to submit a pull request.
License

This project is open-source and available under the MIT License.
Acknowledgments

Special thanks to the creators of Netflix for their inspirational design and user experience. This project is a demonstration of frontend development skills and is not affiliated with Netflix.

Note: To access movie data, users are required to obtain their own API keys by registering with The Movie Database (TMDb) API. Visit TMDb's API documentation to register and obtain your API keys.

Enjoy streaming your favorite movies and TV shows on the Netflix clone app!
