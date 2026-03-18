import inquirer from 'inquirer';

inquirer
  .prompt([
    "Find Latest movies ? "
  ])
  .then((answers) => {
    console.log(answers); 
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
      console.log(error.message); 
    } else {
      // Something else went wrong
      console.log(error); 
    }
  });