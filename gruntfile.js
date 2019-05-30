module.exports = function(grunt) {
    // Configuração do Projeto
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
          options: {
            banner: '/*! &lt;%= pkg.name %&gt; &lt;%= grunt.template.today("yyyy-mm-dd") %&gt; */\n'
          },
        build: {
          src: 'src/&lt;%= pkg.name %&gt;.js',
          dest: 'build/&lt;%= pkg.name %&gt;.min.js'
        }
     }
    });
    
    // Carrega o Plugin para executar a tarefa "uglify"
    grunt.loadNpmTasks('grunt-contrib-uglify');
    
    // Tarefas
    grunt.registerTask('default', ['uglify']);
    
    };