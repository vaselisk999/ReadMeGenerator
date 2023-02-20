function setQuestions(res) {
    const req = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!res.match(req)) {
        return (
            `
* The URL of the GitHub repository. [Repository link](https://github.com/${res}/ReadMeGenerator).
`
        )
    }
    return (
`please reach on this email with additional questions ${res}`
    )

}

module.exports = setQuestions;