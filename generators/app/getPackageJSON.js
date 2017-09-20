const baseBackage = {
  devDependencies: {
    'react-app-rewired': '^1.2.9',
    'react-scripts': '^1.0.13'
  },
  scripts: {
    start: 'react-app-rewired start',
    build: 'react-app-rewired build'
  }
};

module.exports = function (opts) {
  let pkg = {
    name: opts.name,
    version: opts.version,
    description: opts.description
  };

  switch (opts.style) {
    case 'SCSS':
      pkg = Object.assign(pkg, baseBackage, {
        dependencies: {
          'react-app-rewire-sass': '^1.2.3'
        }
      });
      break;
    case 'LESS':
      pkg = Object.assign(pkg, baseBackage, {
        dependencies: {
          'react-app-rewire-less': '^2.0.7'
        }
      });
      break;
    default:
      pkg = Object.assign(pkg, baseBackage);
  }

  if (opts.usePreact) {
    pkg = Object.assign(pkg, baseBackage, {
      dependencies: Object.assign({}, pkg.dependencies, {
        preact: '^8.2.5',
        'preact-compat': '^3.17.0',
        'react-app-rewire-preact': '^1.0.1'
      })
    });
  } else {
    pkg = Object.assign(pkg, baseBackage, {
      dependencies: Object.assign({}, pkg.dependencies, {
        react: '^15.6.1',
        'react-dom': '^15.6.1'
      })
    });
  }

  return pkg;
};
