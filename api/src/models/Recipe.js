const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    summary: {
      type: DataTypes.STRING,
      allowNull: false
    },
    spoonacularScore:{ 
      type: DataTypes.STRING
    },
    healthScore:{
      type: DataTypes.STRING
    },
    analyzedInstructions:{ 
      type: DataTypes.JSON,
    },
    image:{  
      type: DataTypes.STRING
    },

  });
};