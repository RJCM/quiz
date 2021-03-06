var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller');
var sessionController = require('../controllers/session_controller');

// Página de entrada (home page)
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz..!', errors:[] });
});

router.get('/author', function(req, res) {
  res.render('author', { author: 'Rafael Jose Curiel Medina', photo: 'rjcm.jpg', errors:[] });
});

// Autoload de comandos con :quizId
router.param('quizId', quizController.load);  // autoload :quizId

//Definición de rutas de sesion
router.get('/login', sessionController.new);//pantalla de login
router.post('/login', sessionController.create);//procesado de login, crea sesion
router.get('/logout', sessionController.destroy);//destruye sesion

// Definición de rutas de /quizes
router.get('/quizes',                      quizController.index);
router.get('/quizes/:quizId(\\d+)',        quizController.show);
router.get('/quizes/:quizId(\\d+)/answer', quizController.answer);
router.get('/quizes/new',		   quizController.new);	
router.post('/quizes/create',		   quizController.create);
router.get('/quizes/:quizId(\\d+)/edit',   quizController.edit);
router.put('/quizes/:quizId(\\d+)', 	   quizController.update);
router.delete('/quizes/:quizId(\\d+)', 	   quizController.destroy);
	   

module.exports = router;
