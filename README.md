# **Cypress-StarWarsAPI-Testing-Framework**

This repository contains the development of a Cypress project for testing a real API using the Star Wars API (swapi). The application implements tests for different endpoints, performing various actions such as checking the success response, verifying the skin color, and checking the amount of films a character appears in.

## Features

The application has the following features:

- Testing of the `people/2/` endpoint.
- Requesting the endpoint of the second movie in which `people/2/` was present.
- Requesting the endpoint of the first planet present in the last film's response.
- Grabbing the URL element on the response and requesting it.
- Requesting the `/films/7/` endpoint and checking the response having a 404 code.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You will need:

- Node.js and npm
- Cypress

### Running the Tests

To run the tests, firstable you need to navigate to the project root and execute the next command in the terminal in order to install all the necessary dependencies:

    npm install
Then you can execute the following command to execute the tests cases:

    npx cypress run
Or execute the next command in order to open de cypress GUI:
        
    npx cypress open
