// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    switch (license) {
        case "IBM Public License Version 1.0":
            return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
        case "ISC License (ISC)":
            return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
        case "The MIT License":
            return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
        case "Mozilla Public License 2.0":
            return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
        default:
            return "";
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    switch (license) {
        case "IBM Public License Version 1.0":
            return "[IBM Public License Version 1.0](https://opensource.org/licenses/IPL-1.0)";
        case "ISC License (ISC)":
            return "[ISC License (ISC)](https://opensource.org/licenses/ISC)";
        case "The MIT License":
            return "[The MIT License](https://opensource.org/licenses/MIT)";
        case "Mozilla Public License 2.0":
            return "[Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0)";
        default:
            return "";
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    switch (license) {
        case "IBM Public License Version 1.0":
            return "The IBM Public License is a free open-source software license written and occasionally used by IBM. It is approved by the Free Software Foundation and described as an \"open-source license\" by the Open Source Initiative.";
        case "ISC License (ISC)":
            return "The ISC license is a permissive free software license published by the Internet Software Consortium, now called Internet Systems Consortium. It is functionally equivalent to the simplified BSD and MIT licenses, but without language deemed unnecessary following the Berne Convention.";
        case "The MIT License":
            return "The MIT License is a permissive free software license originating at the Massachusetts Institute of Technology in the late 1980s. As a permissive license, it puts only very limited restriction on reuse and has, therefore, high license compatibility.";
        case "Mozilla Public License":
            return "The Mozilla Public License is a free and open-source software license developed and maintained by the Mozilla Foundation.";
        default:
            return "";
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(user,data) {
    badgeLink = renderLicenseBadge(data.license);
    licenseLink = renderLicenseLink(data.license);
    renderedLicense = renderLicenseSection(data.license);

return `# ${user.proj}

${badgeLink}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contribution Guidelines](#contribution-guidelines)
- [Testing Instructions](#testing-instructions)
- [License](#license)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## Contribution Guidelines

${data.contributions}

## Testing Instructions

${data.test}

## License

${renderedLicense}

${licenseLink}

## Questions

${data.questions}

`;
}

module.exports = generateMarkdown;