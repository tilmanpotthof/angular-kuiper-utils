'use strict';

module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  require('time-grunt')(grunt);

  grunt.initConfig({

    clean: {
      dist: {
        files: [
          {
            dot: true,
            src: [
              '.tmp',
              'dist/*'
            ]
          }
        ]
      }
    },

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
          jshintrc: '.jshintrc-base.json'
        },
        src: [
          'src/**/*.js',
          '!src/**/*.spec.js'
        ]
      },
      ci: {
        options: {
          jshintrc: '.jshintrc-base.json'
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
      },
      dist: {
        configFile: 'karma.conf.js',
        singleRun: true,
        options: {
          files: [
            'bower_components/angular/angular.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'dist/angular-kuiper-utils.min.js',
            'src/**/*.spec.js'
          ],
          preprocessors: {
            'dist/angular-kuiper-utils.min.js': 'coverage'
          },
          coverageReporter: {
            reporters: [
              {type: 'text'}
            ]
          }
        }
      }
    },

    ngAnnotate: {
      dist: {
        files: [
          {
            expand: true,
            cwd: 'dist/',
            src: '*.js',
            dest: '.tmp/'
          }
        ]
      }
    },

    uglify: {
      dist: {
        options: {
          mangle: false,
          compress: false,
          enclose: {
            angular: 'angular'
          },
          beautify: {
            width: 120,
            beautify: true,
            // jscs:disable requireCamelCaseOrUpperCaseIdentifiers
            indent_level: 2
            // jscs:enable requireCamelCaseOrUpperCaseIdentifiers
          }
        },
        files: {
          'dist/angular-kuiper-utils.js': [
            'src/**/*.module.js',
            'src/**/*.js',
            '!src/**/*.spec.js'
          ]
        }
      },
      min: {
        options: {
          mangle: true,
          sourceMap: true
        },
        files: {
          'dist/angular-kuiper-utils.min.js': ['.tmp/angular-kuiper-utils.js']
        }
      }
    }
  });

  grunt.registerTask('deps', ['sync', 'deps-ok', 'nice-package']);
  grunt.registerTask('style', ['jshint', 'jscs']);
  grunt.registerTask('test', ['karma:src']);

  grunt.registerTask('pre-build', ['deps', 'style', 'test']);
  grunt.registerTask('build', ['clean', 'uglify:dist', 'ngAnnotate', 'uglify:min']);
  grunt.registerTask('post-build', ['karma:dist']);

  grunt.registerTask('default', ['pre-build', 'build', 'post-build']);
};
