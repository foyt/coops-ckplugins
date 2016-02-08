/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    subgrunt: {
      plugins: {
        projects: {
          'change': 'default',
          'coops': 'default',
          'coops-connector': 'default',
          'coops-cursors': 'default',
          'coops-dmp': 'default',
          'coops-sessionevents': 'default',
        }
      }
    }
  })

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-subgrunt');

  // Default task.
  grunt.registerTask('default', ['subgrunt']);

};
