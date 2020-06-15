// use inquirer npm package
const inquirer = require('inquirer');
// use node.js file structure module
const fs = require('fs');
// call function to write .env file
const { writeFile} = require('./generate-site.js');
// call function to populate .env file
const generatePage = require('./utils/generateEnv.js')

const promptProjcect = portfolioData => {

return inquirer.prompt([
    {
        type: 'input',
        name: 'database',
          message: 'What is the name of your database? (Required)',
          validate: nameInput => {
              if (nameInput) {
                  return true;
              } else {
                  console.log('Please enter database name!');
                  return false;
              }
              }	
      },
      {
        type: 'input',
        name: 'username',
          message: 'What is your mysql user name (Required)',
          validate: nameInput => {
              if (nameInput) {
                  return true;
              } else {
                  console.log('Please enter user name!');
                  return false;
              }
          }
      },
      {
        type: 'input',
        name: 'password',
          message: 'What is your mysql password? (Required)',
          validate: nameInput => {
              if (nameInput) {
                  return true;
              } else {
                  console.log('Please enter password!');
                  return false;
              }
              }	
      },
    ]).then(answers => {
        return generatePage(answers);
        //   return writeFile(answers);
      })
      .then(answers => {
          return writeFile(answers);
      })    

}

promptProjcect();