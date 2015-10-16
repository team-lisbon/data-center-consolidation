module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        options: {
          // includePaths: require('node-bourbon').with('other/path', 'another/path') 
          // - or - 
          includePaths: require('node-bourbon').includePaths
        },
        files: {
          'path/to/output.css': 'path/to/input.scss'
        }
      }
    }
  });
};
