const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const setLicense = require('./utils/setLicense');
const contents = require('./utils/contents');
const setQuestions = require('./utils/setQuestions');

// readme file template
function template(responce) {
    return (`
${setLicense(responce.license).bage}

# ${responce.title}

## Desciption
    ${responce.description}

    ${contents(responce.contents)}
## Installation
    ${responce.installation}

## Usage
    ${responce.usage}

* link to [Inquirer package](https://www.npmjs.com/package/inquirer).
* link to [professional-readme-guide](https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide).
* link to [video-guide](https://drive.google.com/file/d/1J_x-fCq8-ysSkveiweIbdckYIJ3cI0XA/view).

## License
    ${setLicense(responce.license).text}
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
    
## Contributing
    ${responce.contributing}

## Tests
    ${responce.tests}
    
## Questions
    ${setQuestions(responce.review)}

`);
}

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
        type: 'confirm',
        message: 'Table of Contents (Optional)',
        name: 'contents',
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
        type: 'list',
        message: 'License',
        name: 'license',
        choices: ["MIT", "Unlicense", "ISC"]
    },
    {
        type: 'input',
        message: 'Contributing',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Tests',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'Questions (fill with username or email)',
        name: 'review',
    },
];

// let 

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
            writeToFile("README.md", template(response));
        });
}

// function call to initialize program
init();


