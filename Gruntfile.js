var project = require('./package');

module.exports = function(grunt) {
  grunt.initConfig({

    // make available for templating
    project: project,

    // run jshint over files
    jshint: {
      options: {
        jshintrc: true
      },
      production: {
        files: {
          src: 'src/*.js'
        }
      }
    },

    // add banners to all release files
    usebanner: {
      production: {
        options: {
          position: 'top',
          banner: '/* <%= project.name %> v<%= project.version %> | (c) <%= grunt.template.today("yyyy") %> Dan Prince | <%= project.license %> */',
          linebreak: true
        },
        files: {
          src: ['<%= project.name %>*.js', '<%= project.name %>*.css']
        }
      }
    },

    // minify css file
    cssmin: {
      production: {
        files: {
          '<%= project.name %>.min.css': ['src/<%= project.name %>.css']
        }
      }
    },

    // minify javascript file
    uglify: {
      production: {
        files: {
          '<%= project.name %>.min.js': ['src/<%= project.name %>.js']
        }
      }
    },

    // copy src ready for banner
    copy: {
      production: {
        expand: true,
        cwd: 'src/',
        src: '*',
        dest: './'
      }
    },

    // watch for changes
    watch: {
      production: {
        files: ['src/*'],
        tasks: ['build']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-banner');

  grunt.registerTask('build', ['uglify', 'cssmin', 'copy', 'usebanner']);
  grunt.registerTask('docopy', ['copy']);
  grunt.registerTask('test', ['jshint']);
  grunt.registerTask('default', 'build');
};
