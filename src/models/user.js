const { Model, DataTypes } = require('sequelize');
const connection = require("../database/index")

class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
}

User.init(
  {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password_hash: DataTypes.STRING
  }, 
  {
    sequelize: connection,
    modelName: 'User',
  }
);

module.exports = User;