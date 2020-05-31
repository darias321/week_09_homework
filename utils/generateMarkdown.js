function generateMarkdown(data) {
  return `
# ${data.title}

## Description
${data.description}

## Installation 
\`\`\`
${data.installation}
\`\`\`

## Usage 
\`\`\`
${data.usage}
\`\`\`

## Tests 
\`\`\`
${data.tests}
\`\`\`

## Contributing 
${data.contribute}


## License
[![GitHub license](https://img.shields.io.badge/license-${data.tests}-blue.svg)]
`;
}

module.exports = generateMarkdown;
