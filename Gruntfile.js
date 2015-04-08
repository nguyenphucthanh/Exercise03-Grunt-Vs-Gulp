module.exports = function(grunt) {
	grunt.initConfig({
		clean: ['dest'],
		cssmin: {
			target: {
				files: {
					'dest/style.min.css': ['source/css/**/*.css']
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	grunt.registerTask('default', ['clean', 'cssmin'])
};