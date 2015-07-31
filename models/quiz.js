// Definicion del Modelo de Quiz

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Quiz', 
    {pregunta:{type:DataTypes.STRING,validate:{notEmpty:{msg:"Error..! Falta Pregunta"}}},
     respuesta:{type:DataTypes.STRING,validate:{notEmpty:{msg:"Error..! Falta Respuesta"}}},
     tema:{type:DataTypes.STRING,validate:{notEmpty:{msg:"Error..! Falta Tema"}}}
    });
}
