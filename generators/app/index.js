'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the well-made ' + chalk.red('generator-cra-rewired') + ' generator!'
    ));

    const prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'Enter your project name',
        default: this.appname
      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter your project name',
        default: 'Awesome description'
      },
      {
        type: 'input',
        name: 'version',
        message: 'Enter your project version',
        default: '0.0.1'
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('**/*'),
      this.destinationPath(this.props.name),
      this.props
    )
  }

  install() {
    process.chdir(this.props.name);
    this.npmInstall();
  }
};
