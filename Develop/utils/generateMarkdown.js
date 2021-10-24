// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  else if (license === "Apache") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  else if (license === "IBM") {
    return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`
  }
  else if (license === "Mozilla") {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  }
  else {
    return ""
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(userInput) {
 return `# ${userInput.title}
 ${renderLicenseBadge(userInput.license)}
## Description
${userInput.description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Features](#features)
- [Github Profile](#github)
- [Email](#email)
- [Screenshot](#screenshot)
- [Contribute](#contribute)
- [Tests](#tests)
## Installation
${userInput.installation}
## Usage
${userInput.usage}
## Credits
${userInput.contribution}
## License
${userInput.license}
## Github Profile
 <a href="https://github.com/${userInput.username}">GitHub Profile Link</a> 
## Email Address
<a href="mailto:${userInput.email}">Email</a>
## Screenshot
${userInput.image}
## How to Contribute
${userInput.contribution}
## Tests
${userInput.test}
`;
}

module.exports = generateMarkdown;
