# AI Code Reviewer

An AI-powered code review assistant that helps developers analyze their code, identify potential issues, and receive improvement suggestions using Google's Gemini AI. The application provides automated feedback to improve code quality, readability, and efficiency.

## Overview

AI Code Reviewer is a full-stack web application that integrates Generative AI capabilities into the software development workflow. It allows users to submit code snippets and receive AI-generated reviews, including possible bugs, optimization suggestions, and best practices.

The goal of this project is to reduce manual code review effort and provide instant intelligent feedback to developers.

## Features

- AI-powered automated code review
- Identification of potential bugs and logical issues
- Suggestions for improving code quality and efficiency
- AI-generated explanations and recommendations
- Responsive user interface
- Full-stack architecture with separate frontend and backend
- Integration with Google Gemini AI API

## Technology Stack

### Frontend

- React.js
- Vite
- JavaScript
- CSS

### Backend

- Node.js
- Express.js
- REST API
- Google Gemini AI API
- dotenv for environment variable management

## Project Structure
AI-Code-Reviewer

│
├── Frontend
│ ├── src
│ ├── public
│ ├── package.json
│ └── vite.config.js
│
├── BackEnd
│ ├── src
│ │ ├── controllers
│ │ ├── routes
│ │ └── services
│ ├── server.js
│ └── package.json
│
├── package.json
├── .gitignore
└── README.md


## How It Works

1. User submits a code snippet through the frontend interface.
2. The frontend sends the code data to the backend through REST APIs.
3. The backend processes the request and communicates with Google's Gemini AI model.
4. Gemini analyzes the code and generates review feedback.
5. The response is displayed back to the user with improvement suggestions.

## Installation and Setup
### Prerequisites

Make sure you have the following installed:

- Node.js
- npm

### Clone the Repository

```bash
git clone https://github.com/Sneha-lang-ops/AI-Code-Reviewer.git

Navigate into the project directory:
cd AI-Code-Reviewer


Backend Setup
Navigate to the backend folder:
cd BackEnd

Install dependencies:
npm install
Create a .env file inside the backend folder:
GEMINI_API_KEY=your_gemini_api_key
Start the backend server:
npm run dev


Frontend Setup
Open another terminal and navigate to the frontend folder:
cd Frontend

Install dependencies:
npm install
Start the frontend application:
npm run dev
The application will run locally on the provided development server URL.


Future Enhancements

Integration with GitHub repositories for automated repository-level code reviews
User authentication and personalized review history
Support for multiple programming languages
Code quality scoring system
Improved UI/UX
Deployment with cloud hosting


Learning Outcomes

Through this project, I explored:
Building full-stack applications using React and Node.js
Creating and consuming REST APIs
Integrating Generative AI APIs into web applications
Managing environment variables securely
Structuring scalable backend applications


Author

Sneha Sharma

GitHub:
https://github.com/Sneha-lang-ops


