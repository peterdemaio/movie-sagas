# Movie Saga

Movie Saga is a website that displays movies, movie posters, descriptions, and associated genres. The user can edit a movie's title and description on the edit page.

## Description
Duration: ~12 hours

A user is presented with a list of movies from the database on page load. Images are stored in the document file, with the pathnames coming from the database. Clicking on a movie poster brings up a details page with the description and associated genres. Clicking edit gives the user the ability to edit the title or discription text. 

The purpose of this project is to show understanding of Redux-Saga and junction tables with SQL queries. It also shows understanding of editing a database and showing the updated information instantly to the user.

### SCREENSHOT
Homepage, user clicks on a movie poster
![screenshot1](public/images/Screenshot1.png)

User is brought to the descriptions page where genres are now displayed

![screenshot2](public/images/screenshot2.png)

User can edit title and description

![screenshot3](public/images/screenshot3.png)

Details are updated back on the homepage

![screenshot4](public/images/screenshot4.png)

### Prerequisites

Node.js

The queries in the database.sql file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on Postgres, so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries. Copy the code text from database.sql into Postico to create the database.

Open your editor of choice and run npm install.
Type npm run server in the terminal to start the server and npm run client in another to run the client. 
Go to localhost:5000 in your browser to view the homepage.

### Usage

Users must know to click on a movie poster to update it. Beyond that, the website is very intuitive with go back, cancel, edit and save buttons, as well as textareas that are pre-filled with the existing data. 

### Acknowledgement

Thanks to Prime Digital Academy in Minneapolis who equipped and helped me to make this application

### Support

If you have any further questions please email me at pedemaio@gmail.com

