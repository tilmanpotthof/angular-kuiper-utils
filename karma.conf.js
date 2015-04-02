'use strict';

module.exports = function(config) {

  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'src/**.js'
    ],
    autoWatch: false,
    browsers: ['PhantomJS'],
    singleRun: true
  });
};
