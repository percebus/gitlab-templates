module.exports = function (grunt) {
  'use strict'

  require('load-grunt-tasks')(grunt, {
    pattern: ['grunt-*', '!grunt-template-*']
  })

  grunt.initConfig({
    yamllint: {
      gitlab: [
        '*.yml', '.*.yml', // .gitlab-ci.yml
        'gitlab/**/*.yml', '!gitlab/**/*.gitlab-ci.yml'
      ]
    },
    shell: {
      standard_Gruntfile: 'standard --fix Gruntfile.js'
    }
  })

  grunt.registerTask('lint:js:Gruntfile', ['shell:standard_Gruntfile'])
  grunt.registerTask('lint:yaml', ['yamllint'])
  grunt.registerTask('lint', ['lint:yaml'])

  grunt.registerTask('default', ['lint'])
  grunt.task.run('lint:js:Gruntfile')
}
