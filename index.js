const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

// array of questions for user
const questions = [
    {
        type: 'input',
        message: 'The title of my project',
        name: 'title',
    },
    // Sections entitled:
    {
        type: 'input',
        message: 'Description',
        name: 'Title',
    },

    // Sections entitled:

    {
        type: 'input',
        message: 'Table of Contents',
        name: 'Title',
    },

    // Sections entitled:

    {
        type: 'input',
        message: 'Installation',
        name: 'Title',
    },

    // Sections entitled:

    {
        type: 'input',
        message: 'Usage',
        name: 'Title',
    },
    // Sections entitled:
    {
        type: 'input',
        message: 'License',
        name: 'Title',
    },
    // Sections entitled:
    {
        type: 'input',
        message: 'Contributing',
        name: 'Title',
    },
    // Sections entitled:
    {
        type: 'input',
        message: 'Tests',
        name: 'Title',
    },
    // Sections entitled:
    {
        type: 'input',
        message: 'Questions',
        name: 'Title',
    },


];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Commit logged!')
    );
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
        .then((response) => {

        });
}

// function call to initialize program
init();


