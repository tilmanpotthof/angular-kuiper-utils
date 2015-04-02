'use strict';

module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

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
    }
  });

  grunt.registerTask('pre-build', ['sync', 'deps-ok', 'nice-package']);
  grunt.registerTask('build', ['pre-build']);
  grunt.registerTask('default', ['build']);
};
