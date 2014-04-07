module.exports = function (grunt) {

    var
        buildTasks = [
                'sass:compile',        
                'csscomb:build',
                //'csslint:build',
                'concat:css',
                'cssmin'
            ],

        watchTasks = [
                'watch:styles'
            ],

        //Configuration start start 
        config = {
            package: grunt.file.readJSON('package.json'),
            
            //object for watch task
            watch: {
                styles: {
                    files: ['Content/sass/**/*.scss'],
                    tasks: ['sass:compile'],
                    options: {
                        nospawn: true
                    }
                }
            },

            //Object for sass compile
            sass: {
              compile: {
                options: {
                  sourcemap: true,
                  loadPath: []
                },
                files: {
                    'build/css/primary.css' : 'AAstylesheet/Stylesheet/bootstrap.scss',
                    'build/css/phone.css': 'AAstylesheet/Stylesheet/Breakpoints/Phone/phone.scss',
                    'build/css/tablet.css': 'AAstylesheet/Stylesheet/Breakpoints/Tablet/tablet.scss',
                    'build/css/desktop.css': 'AAstylesheet/Stylesheet/Breakpoints/Desktop/desktop.scss',
                    'build/theme/theme1.css': 'AAstylesheet/Stylesheet/themes/theme1.scss',
                    'build/theme/theme2.css': 'AAstylesheet/Stylesheet/themes/theme2.scss'
                }
              }
            },
            
            //Object to sort css properties
            csscomb: {
              build: {
                files: {
                    'build/css/primary.css' : 'build/css/primary.css',
                    'build/css/phone.css': 'build/css/phone.css',
                    'build/css/tablet.css': 'build/css/tablet.css',
                    'build/css/desktop.css': 'build/css/desktop.css',
                    'build/theme/theme1.css' : 'build/theme/theme1.css',
                    'build/theme/theme2.css' : 'build/theme/theme2.css'
                }
              }
            },

            //Object for linting in css
            csslint: {
              options: {
                csslintrc: 'sass/.csslintrc'
              },
              build: {
                  src: ['Content/css/app.css']
              }
            },
            
            //Object to concatenate css or js files
            concat: {
                options:{
                    separator:';'
                },
              css: {
                  src: ['build/css/primary.css', 'build/css/phone.css', 'build/css/tablet.css', 'build/css/desktop.css'],
                  dest: 'build/app.css'
              }
            },

            //Object to minify css or js file
            cssmin: {
              compress: {
                options: {
                  report: 'min',
                },
                src: 'build/app.css',
                dest: 'build/app.css'
              }
            }

        };

    // These plugins provide necessary tasks.
    require('load-grunt-tasks')(grunt, { scope: 'devDependencies' });
    
    grunt.initConfig(config);

    //HOW TO USE THESE TASK IN GRUNT
    //Syntax: $ Grunt build or watch-sass
    grunt.registerTask('build', buildTasks);        
    grunt.registerTask('watch-sass', watchTasks);

}
