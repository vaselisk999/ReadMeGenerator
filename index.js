const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

function template(responce){
return `
    #${responce.title}

    ##Desciption
    ${responce.description}

    ##Table of Contents
    ${responce.contents}
    
    ##installation
    ${responce.installation}

    // npm install 

    ##usage
    ${responce.usage}

    ##license
    ${responce.license}
    
    ##contributing
    ${responce.contributing}

    ##Tests
    ${responce.tests}
    
    ## Review
    ${responce.review}
        * The URL of the deployed application. [Application link](https://vaselisk999.github.io/ReadMeGenerator/).

        * The URL of the GitHub repository. [Repository link](https://github.com/vaselisk999/ReadMeGenerator).
`;
}

const content = ["installation", "usage", "license", "contributing"];

// array of questions for user
const questions = [
    {
        type: 'input',
        message: 'The title of my project',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Description',
        name: 'description',
    },
    {
        type: 'list',
        message: 'Table of Contents',
        name: 'contents',
        choices: content,
    },
    {
        type: 'input',
        message: 'Installation',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Usage',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'License',
        name: 'license',
    },
    {
        type: 'input',
        message: 'Contributing',
        name: 'contributing',
    },
    // Sections entitled:
    {
        type: 'input',
        message: 'Tests',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'Questions',
        name: 'review',
    },
];

let 

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


