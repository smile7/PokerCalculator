module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        includeSource: {
            options: {
                basePath: 'AngularJS-basics',
                baseUrl: '/',
                templates: {
                    html: {
                        js: '<script src="scripts"></script>',
                        css: '<link rel="stylesheet" type="text/css" href="styles/style.css" />',
                        angular: '<script src="bower_components/angular/angular.js"></script>'
                    }
                }
            },
            myTarget: {
                files: {
                    'index.html': 'index.tpl.html'
                }
            }
        },
        watch: {
            includeSource: {
                files: ['index.html'],
                tasks: ['includeSource:server']
            }
        }
    });

    grunt.loadNpmTasks('grunt-include-source');
    grunt.loadNpmTasks('grunt-watch');

    grunt.registerTask('default', ['include-source:myTarget']);

    grunt.registerTask("default", function() {
        grunt.log.writeln("Hello world");
    })
};
