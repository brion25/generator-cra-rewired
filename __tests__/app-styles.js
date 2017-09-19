'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-cra-rewired:app styles', () => {
  it('should add the SCSS dependencies', () => {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({
        name: 'awesome-project',
        description: 'Super awesome project',
        version: '9.0.1',
        style: 'SCSS'
      })
      .then(() => {
        assert.fileContent('package.json', /react-app-rewire-sass/);
      });
  });

  it('should add the LESS dependencies', () => {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({
        name: 'awesome-project',
        description: 'Super awesome project',
        version: '9.0.1',
        style: 'LESS'
      })
      .then(() => {
        assert.fileContent('package.json', /react-app-rewire-less/);
      });
  });

  it('should not add the LESS/SASS dependencies', () => {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({
        name: 'awesome-project',
        description: 'Super awesome project',
        version: '9.0.1',
        style: 'CSS'
      })
      .then(() => {
        assert.noFileContent('package.json', /react-app-rewire-less/);
        assert.noFileContent('package.json', /react-app-rewire-sass/);
      });
  });
});
