module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-jade');

    srcDir = 'src/main';

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        yeoman: {
            // configurable paths
            app: require('./bower.json').appPath || srcDir,
            dist: 'src/main/webapp'
        },

        coffee: {
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: "<%= yeoman.app %>",
                        src: ['**/*.coffee'],
                        dest: '<%= yeoman.dist %>',
                        ext: '.js'
                    }
                ]
            }
        },

        jade: {
            compile: {
                options: {
                    pretty: true
                },
                files: [
                    {
                        expand: true,
                        cwd: "<%= yeoman.app %>",
                        src: ['**/*.jade', '*.jade'],
                        dest: '<%= yeoman.dist %>',
                        ext: '.html'
                    }
                ]
            }
        }

    });


    // Default task(s).
    grunt.registerTask('default', ['coffee', 'jade']);

};