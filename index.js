// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const genMd = require ('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [{
  type: 'input',
  name: 'year',
  message: 'What year is it?',
}, 
{
  type: 'input',
  name: 'fullName',
  message: 'What name do you want associated with your potential license?',
}, 
{
  type: 'input',
  name: 'github',
  message: 'Enter your GitHub Username (case is important):',
}, 
{
  type: 'input',
  name: 'email',
  message: 'Enter your email to receive quetions for this project:',
},
{
  type: 'input',
  name: 'title',
  message: 'What is the title of your project?',
},
{
  type: 'input',
  name: 'description',
  message: 'Please enter project description (motivation, why, what, and learned):',
},
{
  type: 'input',
  name: 'installation',
  message: 'How would you describe the installation process?',
},
{
  type: 'input',
  name: 'usage',
  message: 'How do you run the program, once installed?',
},
{
  type: 'input',
  name: 'contribution',
  message: 'What are the contribution guidelines? How does one contribute?',
},
{
  type: 'input',
  name: 'credits',
  message: 'Please list contributors, 3rd party assets, or tutorials used:'
},
{
  type: 'input',
  name: 'tests',
  message: 'What are some tests for this project?',
},
{

  type: "list",
  name: "license",
  message: "What license should this project have?",
  choices: ["MIT", "APACHE_2.0", "GPL_3.0", "ISC", "None"],
},
];

const promptUser = () => {
  return inquirer.prompt(questions);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
const mdContent = genMd.generateMarkdown(data);

fs.writeFile(fileName, mdContent, (err) =>
err ? console.log(err) : console.log('Successfully created README.md!')
);
};

// TODO: Create a function to initialize app
function init() {
  promptUser()
  // Use writeFileSync method to use promises instead of a callback function
    .then((data) => writeToFile('NEWREADME.md', data))
    // .then(() => console.log('Successfully wrote to index.html'))
    // .catch((err) => console.error(err));}
};
// Function call to initialize app
init();
