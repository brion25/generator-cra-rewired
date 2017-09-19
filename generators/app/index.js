'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

const getPackageJSON = require('./getPackageJSON');

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
      },
      {
        type: 'list',
        name: 'style',
        message: 'Do you want an special configuration for your styles?',
        choices: [
          'SCSS',
          'LESS',
          'CSS'
        ]
      },
      {
        type: 'confirm',
        name: 'usePreact',
        message: 'Would you like to use Preact instead of React?',
        default: false
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    const STYLE_NAME = `app.${this.props.style.toLowerCase()}`;

    this.log('Creating basic scaffolding');

    this.fs.copyTpl(
      this.templatePath('base-scaffolding/**/*'),
      this.destinationPath(this.props.name),
      this.props
    );

    this.fs.writeJSON(
      this.destinationPath(`${this.props.name}/package.json`),
      getPackageJSON(this.props)
    );

    return this.fs.copy(
      this.templatePath(`styles/${STYLE_NAME}`),
      this.destinationPath(`${this.props.name}/src/${STYLE_NAME}`)
    );
  }

  install() {
    process.chdir(this.props.name);

    // This.log('Installing dependencies');

    this.npmInstall();
  }
};
