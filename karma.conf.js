// Karma configuration
// Generated on Sun Feb 25 2018 16:53:12 GMT-0800 (PST)

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],

        // list of files / patterns to load in the browser
        files: [
            'node_modules/angular/angular.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'scripts/notesApp/notesApp.js',
            'scripts/notesApp/!(notesApp).js',
            'scripts/notesApp1/notesApp1.js',
            'scripts/notesApp1/!(notesApp1).js',
            'scripts/serverApp/serverApp.js',
            'scripts/serverApp/!(serverApp).js',
            'scripts/filtersApp/filters-module.js',
            'scripts/filtersApp/!(filters-module).js',
            'tests/notesAppSpecs/notesAppMocks.js',
            'tests/notesAppSpecs/ItemService.js',
            'tests/notesAppSpecs/*Spec.js',
            'tests/notesAppSpecs/*Spies.js',
            'tests/notesApp1Specs/*Spec.js',
            'tests/serverAppSpecs/*Spec.js',
            'tests/filtersAppSpecs/*Spec.js',
        ],

        // list of files / patterns to exclude
        exclude: [
        ],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {},

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    });
};