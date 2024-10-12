module.exports = (sequelize, DataTypes) => {
    const Role = sequelize.define('Role', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(100)
        },
        desciption:{
            type: DataTypes.STRING(1000)
        }
    });
    return Role
}