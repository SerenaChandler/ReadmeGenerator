const inquirer = require('inquirer');

const fs = require('fs');


const makeReadme = (answers) =>
`hey ${answers.username}`




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
      message: 'what is the name of your ptoject?',
      name: 'project',
    },
    {
      type: 'input',
      message: 'please write a short description of your project.',
      name: 'description'
    },
    {
      type: 'input',
      message: "what license should your project have?",
      name: 'license',
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

    fs.writeFile('readme.md', readmeContent, (err) =>
    err ? console.log(err) : console.log("generating ReadMe.MD")
    );
  });