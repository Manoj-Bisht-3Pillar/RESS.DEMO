// Karma configuration
// Generated on Mon Apr 14 2014 15:15:46 GMT+0530 (India Standard Time)

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
          'lib/angular/angular.js',
          'lib/angular-animate/angular-animate.js',
          'lib/angular-mocks/angular-mocks.js',
          'lib/angular-route/angular-route.js',
          'lib/lodash/dist/lodash.underscore.js',
          'lib/restangular/dist/restangular.js',
          'Scripts/CheckBalance/checkBalanceServices.js',
          'Scripts/**/*.js',
          'Scripts/*.js',
          'test/unit/*.js'
        ],


        // list of files to exclude
        exclude: [

        ],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {

        },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],


        // web server port can change this port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        /*   
            By default karma supports chrome and you can install other browsers using npm
            here is the link which guides you to install other browsers launchers 
            http://karma-runner.github.io/0.10/config/browsers.html
            available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        */
        browsers: ['Chrome'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false
    });
};
