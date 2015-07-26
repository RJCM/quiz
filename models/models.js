var path = require('path');

// Carga Modelo ORM
var Sequelize = require('sequelize');

// Usa BBDD SQLite
var sequelize = new Sequelize(null,null,null,
			{dialect: 'sqlite',
			 storage: 'quiz.sqlite'});

// Importa la definicion de la Tabla Quiz en quiz.js
var Quiz = sequelize.import(path.join(__dirname,'quiz'));
exports.Quiz = Quiz;

// Crea e Importa Tabla de Pregunta en DB
sequelize.sync().then(function() {
  Quiz.count().then(function(count){
    if (count===0) {
       Quiz.create({pregunta: 'Capital de Italia',
		    respuesta: 'Roma'})
       .then(function(){console.log('DB Inicializada..!')});
    };
  });
});

