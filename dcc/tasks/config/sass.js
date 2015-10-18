module.exports = function(grunt) {

  grunt.config.set('sass', {
    options: {
      sourceMap: true
    },
    dev: {
      files: {
        '.tmp/public/styles/main.css': 'assets/styles/main.scss'
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
};
