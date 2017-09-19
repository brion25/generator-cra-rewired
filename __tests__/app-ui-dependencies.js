'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-cra-rewired:app UI', () => {
  it('should add the Preact dependencies', () => {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({
        name: 'awesome-project',
        description: 'Super awesome project',
        version: '9.0.1',
        usePreact: true,
        style: 'CSS'
      })
      .then(() => {
        assert.fileContent('package.json', /"preact"/);
        assert.noFileContent('package.json', /"react"/);
      });
  });

  it('should add the React dependencies', () => {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({
        name: 'awesome-project',
        description: 'Super awesome project',
        version: '9.0.1',
        usePreact: false,
        style: 'CSS'
      })
      .then(() => {
        assert.noFileContent('package.json', /"preact"/);
        assert.fileContent('package.json', /"react"/);
      });
  });
});
