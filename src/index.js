const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "list",
      message: "Choose Your FrameWork: ",
      name: "framwork",
      choices: ["react", "react-native", "node"],
    },
  ])
  .then((answers) => {
    answers.framework;
    //console.log(answers);
  });
