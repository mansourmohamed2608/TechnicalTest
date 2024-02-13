Technical Test Documentation for Backend Development with Node.js and Express.js
Introduction

This documentation provides a comprehensive overview of the development process for creating a simple Express.js server and a RESTful API endpoint as part of the technical assessment for the Senior Full Stack Developer position. 
It includes detailed steps, methodologies, and best practices employed to achieve the objectives efficiently and effectively.
Environment Setup
Prerequisites

    1. Node.js (v14.17.0 or higher)
    2. npm (v6.14.13 or higher)
    3. Postman (for testing endpoints)
    4. Visual Studio Code (or any preferred IDE)

Project Initialization

    1. Creating the Project Directory: Created a directory named telemed-backend-test and initialized it with npm init -y to create a default package.json file.
    2. Express.js Installation: Installed Express.js using npm install express to handle HTTP requests and routing.

Task Implementation
Task 1: Simple Express.js Server
Objective:

To develop a minimalistic server that returns a "Hello, World!" message to any GET request on the root path.
Development Steps:

    1. Server Setup: Created a file named server.js and imported Express.js to set up a basic server listening on port 3000.
    2. Route Configuration: Defined a GET route for the root (/) path to respond with "Hello, World!".
    
Testing and Validation:

Used Postman to send a GET request to http://localhost:3000 and verified the response was "Hello, World!". Additionally, ensured the server correctly handles non-root routes by returning 404 status codes.
