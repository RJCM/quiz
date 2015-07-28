var path = require('path');

// Postgres DATABASE_URL = postgres://user:passwd@host:port/database
// SQLite DATABASE_URL = sqlite://:@:/
var url = process.env.DATABASE_URL.match(/(.*)\:\/\/(.*?)\:(.*)@(.*)\:(.*)\/(.*)/);
var DB_name  = (url[6]||null);
var user     = (url[2]||null);
var pwd	     = (url[3]||null);
var protocol = (url[1]||null);	
var dialect  = (url[1]||null);
var port     = (url[5]||null);
var host     = (url[4]||null);
var storage  = process.env.DATABASE_STORAGE;

// Carga Modelo ORM
var Sequelize = require('sequelize');

// Usa BBDD SQLite o Postgres
var sequelize = new Sequelize(DB_name, user,pwd, {
   dialect:  dialect,
   protocol: protocol,
   port:     port,
   host:     host,
   storage:  storage,	// Solo SQLite (.env)
   omitNull: true	// Solo Postgres
  });

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
		    respuesta: 'Roma'});
       Quiz.create({pregunta: 'Capital de Portugal',
		    respuesta: 'Lisboa'})
       .then(function(){console.log('DB Inicializada..!')});
    };
  });
});
