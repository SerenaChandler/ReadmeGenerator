const inquirer = require('inquirer');

const fs = require('fs');


const makeReadme = (answers) =>
`# ${answers.project}

## Table of contents
1. [Description](#desc)
2. [Installation](#inst)
3. [Usage](#use)
4. [Contributing](#cont)
5. [Tests](#test)
6. [Questions](#quest)

## License
![license](https://img.shields.io/badge/license-${answers.license}-blue)


<a name="desc"></a>
## Description
${answers.description}

<a name="inst"></a>
## Installation

${answers.dependencies}

<a name="use"></a>
## Usage

${answers.use}

<a name="cont"></a>
## Contributing

${answers.contribute}

<a name="test"></a>
## Tests

${answers.tests}

<a name="quest"></a>
## Questions

[Email](mailto:${answers.email})


[Github](https://github.com/${answers.username})`




inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your GitHub username?',
      name: 'username',
    },
    {
      type: 'input',
      message: 'What is your email address?',
      name: 'email',
    },
    {
      type: 'input',
      message: 'what is the name of your project?',
      name: 'project',
    },
    {
      type: 'input',
      message: 'please write a short description of your project.',
      name: 'description'
    },
    {
      type: 'list',
      message: "what license should your project have?",
      name: 'license',
      choices: ['MIT', 'Apache', 'BSD', 'Eclipse', 'GNU', 'Mozilla', 'Zlib', 'IBM']
    },
    {
      type: 'input',
      message: 'what command should be run to install dependencies?',
      name: "dependencies"
    },
    {
      type: 'input',
      message: 'what command should be run to run tests?',
      name: "tests"
    },
    {
      type: 'input',
      message: 'what does the user need to know about using the repo?',
      name: "use"
    },
    {
      type: 'input',
      message: 'what does the user need to know about to contribute to the repo',
      name: "contribute"
    },

  ])
  .then((answers) => {
    const readmeContent = makeReadme(answers);

    fs.writeFile('SampleReadMe.md', readmeContent, (err) =>
    err ? console.log(err) : console.log("generating ReadMe.MD")
    );
  });