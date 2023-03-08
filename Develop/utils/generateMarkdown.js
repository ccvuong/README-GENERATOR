// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# 
  
  ${data.title}
  ## Description
  ${data.description}

  ##Table of Contents
  -[Installation](##Installation)
  -[Test-Required](##Test-Required)
  -[Contributors](##Contributors)
  -[Contact-Info](##Contact-Info)

  ## Installation
  ${data.installation}

  ## Data Usage
  ${data.usage}

  ## Tests Required
  ${data.test}

  #Contributors
  ${data.contributors}

  ##License Used
  ${data.license}

  # Contact Info
  Have questions? Please reach me at ${data.email}

`;
}

module.exports = generateMarkdown;
