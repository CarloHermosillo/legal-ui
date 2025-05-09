'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    exec: {
      cmd: 'npm start'
    }
  });

  grunt.loadNpmTasks('grunt-exec');

  grunt.registerTask('start', ['exec']);
};