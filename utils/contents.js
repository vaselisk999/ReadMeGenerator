
//Table of Contents optional 

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

module.exports = contents;