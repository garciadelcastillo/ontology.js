module.exports = function(grunt) {

  var files = [ 'src/ontology.js' ];

  // Project configuration.
  grunt.initConfig({
    
    pkg: grunt.file.readJSON('package.json'),

    // concat step
    concat: {
      build: {
        files: {
          'dist/<%= pkg.name %>-<%= pkg.version %>.js': files
        }
      }, 
      test: {
        files: {
          'test/<%= pkg.name %>.js': files
        }
      }
    },


    // uglify step
    uglify: {
      options: {
        banner: '/*! <%= pkg.casedName %>.js v<%= pkg.version %> | (c) 2015 <%= pkg.author %> */\n'
      },
      build: {
        files: {
          'dist/<%= pkg.name %>-<%= pkg.version %>.min.js': ['dist/<%= pkg.name %>-<%= pkg.version %>.js']
        }
      }
    },

    mochaTest: {
      test: {
        options: {
          reporter: 'spec',
          quiet: false // Optionally suppress output to standard out (defaults to false)
        },
        src: ['test/tests.js']
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-mocha-test');

  var build_steps = ['concat:build', 'uglify'];
  grunt.registerTask('default', build_steps );
  grunt.registerTask('build', build_steps);
  grunt.registerTask('test', ['concat:test', 'mochaTest']);

};