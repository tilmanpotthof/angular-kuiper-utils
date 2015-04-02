'use strict';

module.exports = function(config) {

  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/stop-angular-overrides/stop-angular-overrides.js',
      'src/**/**.module.js',
      'src/**/**.service.js',
      'src/**/**.spec.js'
    ],
    autoWatch: false,
    browsers: ['PhantomJS'],
    singleRun: true,
    reporters: ['progress', 'coverage'],
    preprocessors: {
      'src/**/!(*spec).js': 'coverage'
    },
    coverageReporter: {
      reporters: [
        {
          type: 'text'
        },
        {
          type: 'lcov'
        }
      ]
    }
  });
};
