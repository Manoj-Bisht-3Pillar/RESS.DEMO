module.exports = function (config) {
    config.set({

        basePath: '../',

        files: [
          'lib/angular/angular.js',
          'lib/angular-route/angular-route.js',
          'lib/angular-resource/angular-resource.js',
          'lib/angular-animate/angular-animate.js',
          'lib/angular-mocks/angular-mocks.js',
          'app/js/**/*.js',
          'test/unit/**/*.js'
        ],

        autoWatch: true,

        frameworks: ['jasmine'],
        /*   
            By default karma supports chrome and you can install other browsers using npm
            here is the link which guides you to install other browsers launchers 
            http://karma-runner.github.io/0.10/config/browsers.html
        */
        browsers: ['Chrome'],

        plugins: [
                'karma-chrome-launcher',
                'karma-firefox-launcher',
                'karma-jasmine'
        ],

        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        }

    });
};