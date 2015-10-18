module.exports = function(grunt) {

  grunt.config.set('sass', {
    options: {
      sourceMap: true,
      includePaths: require('node-bourbon').includePaths
    },
    dev: {
      files: {
        '.tmp/public/styles/main.css': 'assets/styles/main.scss'
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
};
