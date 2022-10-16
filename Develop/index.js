// TODO: Include packages needed for this application
const inquirer = require ("inquirer");
const fs = require ("fs");

// TODO: Create an array of questions for user input
inquirer.prompt(
    [
        {
            type: "input",
            message: "What's the project title?",
            name: "projectTitle",
            validate: (value) => {if (value){return true} else {return "Need a value to contrinue!"}}
        },
        {
            type: "input",
            message: "Write a brief description of your project.",
            name: "description",
            validate: (value) => {if (value){return true} else {return "Need a value to contrinue!"}}
        },
        {
            type: "input",
            message: "How to install your app?",
            name: "installation",
            validate: (value) => {if (value){return true} else {return "Need a value to contrinue!"}}
        },
        {
            type: "input",
            message: "How to use your app?",
            name: "usage",
            validate: (value) => {if (value){return true} else {return "Need a value to contrinue!"}}
        },
        {
            type: "input",
            message: "Any credits?",
            name: "credits",
            validate: (value) => {if (value){return true} else {return "Need a value to contrinue!"}}
        },
        {
            type: "list",
            message: "License used?",
            name: "license",
            choices: ["Apache", "Academic", "GNU", "ISC", "MIT", "Mozilla", "Open", "Other license", "N/A"],
            validate: (value) => {if (value){return true} else {return "Need a value to contrinue!"}},
        }
    ]
).then(({
    projectTitle,
    description,
    installation,
    usage,
    credits,
    license
})=>{
const template = `
# ${projectTitle}

## Table of Contents
* [Project description](#description)
* [How to install the app](#installation)
* [How to use the app](#usage)
* [Credits](#credits)
* [License](#license)

# Project description
${description}
# How to install the app
${installation}
# How to use the app
${usage}
## Credits
${credits}
## License
${license}`;

//function to write README
writeToFile(projectTitle,template);
}
);

// TODO: Create a function to write README file
function writeToFile(fileName,data){
    fs.writeFile(`./${fileName.toLowerCase().split(' ')}.md`,data,(err)=>{
        if(err){
            console.log(err)
        }
        console.log("The README file has been generated!")
    })
}