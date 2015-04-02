'use strict';

module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  require('time-grunt')(grunt);

  grunt.initConfig({

    // npm to bower sync
    sync: {
      all: {
        options: {
          sync: ['author', 'name', 'version', 'homepage', 'keywords']
        }
      }
    },

    jshint: {
      src: {
        options: {
          jshintrc: '.jshintrc-base'
        },
        src: [
          'src/**/*.js',
          '!src/**/*.spec.js'
        ]
      },
      ci: {
        options: {
          jshintrc: '.jshintrc-base'
        },
        src: [
          '*.js'
        ]
      },
      test: {
        options: {
          jshintrc: '.jshintrc'
        },
        src: [
          'src/**/*.spec.js'
        ]
      }
    },

    jscs: {
      src: '**.js',
      options: {
        config: '.jscsrc.json'
      }
    },

    karma: {
      src: {
        configFile: 'karma.conf.js',
        singleRun: true
      }
    }
  });

  grunt.registerTask('deps', ['sync', 'deps-ok', 'nice-package']);
  grunt.registerTask('style', ['jshint', 'jscs']);
  grunt.registerTask('test', ['karma:src']);
  grunt.registerTask('pre-build', ['deps', 'style', 'test']);

  grunt.registerTask('build', ['pre-build']);
  grunt.registerTask('default', ['build']);
};
