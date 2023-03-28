// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  }
  else if (license === "GNU GPL v3") {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  }
  else if (license === "Apache License 2.0") {
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  }
  else if (license === "Mozilla Public License 2.0") {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
  }
  else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return `[MIT](https://opensource.org/licenses/MIT)`;
  }
  else if (license === "GNU GPL v3") {
    return `[GNU GPL v3](https://www.gnu.org/licenses/gpl-3.0)`;
  }
  else if (license === "Apache License 2.0") {
    return `[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)`;
  }
  else if (license === "Mozilla Public License 2.0") {
    return `[Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0)`;
  }
  else {
    return "";
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "MIT") {
    return `## License`;
  }
  else if (license === "GNU GPL v3") {
    return `## License`;
  }
  else if (license === "Apache License 2.0") {
    return `## License`;
  }
  else if (license === "Mozilla Public License 2.0") {
    return `## License`;
  }
  else {
    return "";
  }
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ## Description
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credit](#credit)
  * [Licensing](#licensing)
  * [Contributions](#contributions)
  * []
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Credit
  ${data.credit}
  ## Licensing
  ${renderLicenseLink(data.license)}
  ${renderLicenseSection(data.license)}
  ${renderLicenseBadge(data.license)}
  ## Contributions
  ${data.contributions};
  ## Tests
  ${data.tests}`
}

// 
module.exports = generateMarkdown;
