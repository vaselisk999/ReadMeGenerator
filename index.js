const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

function contents(res) {
    let contents = ""
    if (res) {
        contents = `
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
        `
    }
    return contents;
}

function setLicence(res) {
    let bage = "";
    let text = "";
    switch (res) {
        case "MIT":
            bage = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
            text = `
MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
            `

            break;
        case "unlicense":
            bage = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
            text = `
Unlicense

This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or distribute this software, either in source code form or as a compiled binary, for any purpose, commercial or non-commercial, and by any means.

In jurisdictions that recognize copyright laws, the author or authors of this software dedicate any and all copyright interest in the software to the public domain. We make this dedication for the benefit of the public at large and to the detriment of our heirs and successors. We intend this dedication to be an overt act of relinquishment in perpetuity of all present and future rights to this software under copyright law.
            `
            break;
        case "ISC":
            bage = `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
            text = `
ISC License

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.
            `
            break;
    }

    return {
        bage, text
    }
}

// THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

function template(responce) {
    return (`
${setLicence(responce.license).bage}

# ${responce.title}

## Desciption
    ${responce.description}
`
+ contents(responce.contents) +
`
## Installation
    ${responce.installation}
    // npm install 

## Usage
    ${responce.usage}

## License
    ${setLicence(responce.license).text}
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
    
## Contributing
    ${responce.contributing}

## Tests
    ${responce.tests}
    
## Review
    
* The URL of the deployed application. [Application link](https://vaselisk999.github.io/${responce.review}/).

* The URL of the GitHub repository. [Repository link](https://github.com/vaselisk999/${responce.review}).
`)
        ;
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
        message: 'Questions to (fill progect name)',
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


