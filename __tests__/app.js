'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-cra-rewired:app', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({
        name: 'awesome-project',
        description: 'Super awesome project',
        version: '9.0.1',
        style: 'CSS'
      });
  });

  it('creates the base files', () => {
    assert.file([
      'package.json',
      'config-overrides.js',
      'src',
      'public'
    ]);
  });

  describe('should parse the props properly', () => {
    it('should parse the props on the package.json file', () => {
      assert.fileContent('package.json', /awesome-project/);
      assert.fileContent('package.json', /Super awesome project/);
      assert.fileContent('package.json', /9\.0\.1/);
    });

    it('should parse the props on the src/index.js file', () => {
      assert.fileContent('src/index.js', /awesome-project/);
    });
  });
});
