'use strict';

module.exports = function (grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    // npm to bower sync
    sync: {
      all: {
        options: {
          sync: ['author', 'name', 'version', 'homepage', 'keywords']
        }
      }
    }
  });

  grunt.registerTask('pre-build', ['sync', 'deps-ok', 'nice-package']);
  grunt.registerTask('build', ['pre-build']);
  grunt.registerTask('default', ['build']);
}
