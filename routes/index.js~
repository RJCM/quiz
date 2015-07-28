var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Quiz ..!' });
});

router.get('/author', function(req, res, next) {
  res.render('author', { author: 'Rafael Jose Curiel Medina', photo: 'rjcm.jpg' });
});

// Definicion e Rutas de /quiz
router.get('/quizes', 			   quizController.index);
router.get('/quizes/:quizId(\\d+)', 	   quizController.show);
router.get('/quizes/:quizId(\\d+)/answer', quizController.answer);

<table>
<% var i; for (i=0; i < quizes.length; i++) { %>
   <tr><td><a href="quizes/<%= quizes[i].id %>"><%= quizes[i].pregunta %></a></td></tr>
<% } %>
</table>


module.exports = router;
