module.exports = (sequelize, DataTypes) => {
    const Department = sequelize.define('Department', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        desciption:{
            type: DataTypes.STRING(1000)
        },
        name: {
            type: DataTypes.STRING(100)
        },
        headId: {
            type: DataTypes.INTEGER
        }
    })

    Department.associate = (models) => {
        Department.hasMany(models.User, {
            foreignKey: 'departmentId',
            as: 'userDetails'
        })
    }

    return Department
}