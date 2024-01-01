# url shortener Backened

## What is NODEJS

Node.js is an open-source and cross-platform JavaScript runtime environment. It is a popular tool for almost any kind of project!

Node.js runs the V8 JavaScript engine, the core of Google Chrome, outside of the browser. This allows Node.js to be very performant.

## Installation

Node.js can be installed in different ways. This post highlights the most common and convenient ones. Official packages for all the major platforms are available at https://nodejs.org/download/.

One very convenient way to install Node.js is through a package manager. In this case, every operating system has its own. Other package managers for MacOS, Linux, and Windows are listed in https://nodejs.org/download/package-manager/

nvm is a popular way to run Node.js. It allows you to easily switch the Node.js version, and install new versions to try and easily rollback if something breaks. It is also very useful to test your code with old Node.js versions.

See https://github.com/nvm-sh/nvm for more information about this option.

In any case, when Node.js is installed you'll have access to the node executable program in the command line.

#### Useful NPM commands are:

##### Install a package

    npm i <packageName>

##### Install a specific version of a package

    npm i <packageName>@<version>

##### Install a package as a development dependency

    npm i <packageName>

##### Uninstall a package

    npm un <packageName>

##### List installed packages

    npm list

##### Install legacy dependacies

    npm i --legacy-peer-deps

##### View outdated packages

    npm outdated

##### Update packages

    npm update

- To `install/uninstall` packages globally, use `-g` flag.

### CLI tools

### Misc

### EXPRESSJS

Express is a simple, minimalistic and lightweight framework for building web servers.

##### RESTful services (Representational State Transfer)

    C - POST to create a resource
    R - GET  to update it
    U - PUT to read it
    D - DELETE to delete it

##### Build a web server

    const express = require(‘express’);
    const app = express();

## Examples of requests (CRUDE)

##### Creating a course

    app.post(‘/api/courses’, (req, res) => {
         // Create the course and return the course object
         res.send(course);
    });

##### Getting all the courses

    app.get(‘/api/courses’, (req, res) => {

         // To read query string parameters (?sortBy=name)
         const sortBy = req.query.sortBy;

         // Return the courses
         res.send(courses);
    });

##### Getting a single course

    app.get(‘/api/courses/:id’, (req, res) => {
         const courseId = req.params.id;

          // Lookup the course
         // If not found, return 404
         res.status(404).send(‘Course not found.’);

         // Else, return the course object
         res.send(course);
    });

##### Updating a course

    app.put(‘/api/courses/:id’, (req, res) => {
         // If course not found, return 404, otherwise update it
         // and return the updated object.
    });

##### Deleting a course

    app.delete(‘/api/courses/:id’, (req, res) => {
         // If course not found, return 404, otherwise delete it
         // and return the deleted object.
    });

##### Listen on port 3000

    app.listen(3000, () => console.log(‘Listening…’));

- We use `Nodemon` to watch for changes in files and automatically restart the
  node process.
- We can use environment variables to store various settings for an application. To
  read an environment variable, we use `process.env`.

##### Reading the port from an environment variable

    const port = process.env.PORT || 3000;
    app.listen(port);

- You should never trust data sent by the client. Always validate! Use `Joi` package
  to perform input validation.

## Prerequisites

### Modern JavaScript

- Javascript Fundamentals crash course
- Advanced Javascript Crash course
- ES2015/2016 topics (ES6)
