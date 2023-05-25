# Project Name

This project is an Angular application that utilizes the Marvel API to display data related to Marvel superheroes. It features a dark and light theme and includes pagination for easy navigation through the data.

## Getting Started

To get started with this project, follow the steps below:

### Prerequisites

Make sure you have the following software installed on your machine:

- Node.js (version X.X.X or higher)
- Angular CLI (version 13.3.5 or higher)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/SurieDelgado/MarvelAPIExample.git
   npm install

Obtain an API key from the Marvel Developer Portal (https://developer.marvel.com/).

add the following content, replacing <YOUR_API_KEY> with your actual API key:

export const environment = {
  production: false,
  url : 'https://gateway.marvel.com/v1/public/',
  apiKey: '<YOUR_API_KEY>'
};

Start the development server:e
ng serve

Open your browser and navigate to http://localhost:4200 to see the application in action.

Features
Dark and light theme: The application provides a toggle switch to switch between dark and light themes, providing a personalized user experience.

Pagination: The application implements pagination to display Marvel superheroes in a user-friendly manner, allowing users to navigate through the data easily.

Built With
Angular CLI - A powerful development platform for creating web applications using TypeScript.
Marvel API - A RESTful API that provides access to the vast Marvel Comics universe.

Contributing
Contributions to this project are welcome. If you encounter any issues or have suggestions for improvements, please feel free to submit a pull request.

License
This project is licensed under the MIT License.

Acknowledgments
Angular - The web application framework used in this project.
Marvel - The creators of the Marvel Comics universe.