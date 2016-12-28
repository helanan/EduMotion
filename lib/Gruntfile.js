module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-sass');

  grunt.initConfig({
    jshint: {
      files: ['../javascripts/**/*.js'],
      options: {
<<<<<<< HEAD
        predef: [ "document", "console", "$", "firebase", "FbAPI", "app", "angular"],
=======
        predef: [ "document", "console", "$", "firebase", "FbAPI", "angular"],
>>>>>>> f32aae000433a6271c23612f54a05a1d9763e8e4
        esnext: true,
        globalstrict: true,
        globals: {},
        browserify: true
      }
    },
     sass: {
      dist: {
        files: {
          '../styles/main.css': '../sass/main.scss'
        }
      }
    },
    watch: {
      javascripts: {
        files: ['../javascripts/**/*.js'],
        tasks: ['jshint']
      },
      sassy: {
        files: ['../sass/**/*.scss'],
        tasks: ['sass']        
      }
    },
    copy: {
      dev: {
        files: [
          {
            expand: true,
            cwd:"../",
            src: [
              "index.html",
              "javascripts/**/*.js",
              "styles/**/*.css",
              "partials/**/*.html",
              "lib/bower_components/bootstrap/dist/css/bootstrap.min.css",
              "lib/bower_components/jquery/dist/jquery.min.js",
              "lib/bower_components/bootstrap/dist/js/bootstrap.min.js",
              "lib/bower_components/angular/angular.min.js",
              "lib/bower_components/angular-route/angular-route.min.js"
            ],
            dest: "../public/"
        }
        ]
      }
    }
  });
  
  grunt.registerTask('default', ['sass', 'jshint', 'watch']);
  grunt.registerTask('lint', ['jshint']);
  grunt.registerTask('deploy', ['sass', 'copy']);
};