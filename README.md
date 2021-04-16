# READme Generator

## Description
This code will run a function in the console using Node to take in user input and return a completed ReadMe.

## Languages Used
JS was used to take in all of the user input, and to format the creatable readMe

## Code snippet (how the links for the table of contents were make)
```
## Table of contents
1. [Description](#desc)
2. [Installation](#inst)
3. [Usage](#use)
4. [Contributing](#cont)
5. [Tests](#test)
6. [Questions](#quest)
```

## Code Snippet (The write file command used to create the read me)
```

    fs.writeFile('SampleReadMe.md', readmeContent, (err) =>
    err ? console.log(err) : console.log("generating ReadMe.MD")
    );
```
## Code Snippet (Template Literals used to occupy the ReadMe)
```
## License
![license](https://img.shields.io/badge/license-${answers.license}-blue)


<a name="desc"></a>
## Description
${answers.description}

<a name="inst"></a>
## Installation

${answers.dependencies}
```

## Links

[GitHub](https://github.com/SerenaChandler)

[Video-walkthrough](https://www.youtube.com/watch?v=QVQTizLWauc)

