const { Op } = require("sequelize")

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        firstName: {
            type: DataTypes.STRING(100)
        },
        lastName: {
            type: DataTypes.STRING(100)
        },
        email: {
            type: DataTypes.STRING(100),
            unique: true
        },
        password: {
            type: DataTypes.STRING(100)
        },
        token: {
            type: DataTypes.STRING(1000)
        },
        gender: {
            type: DataTypes.ENUM(['male', 'female', 'other']),
            allowNull: false
        },
        phoneNumber: {
            type: DataTypes.STRING(12),
            unique: true
        },
        joiningDate: {
            type: DataTypes.DATE
        },
        resginationDate: {
            type: DataTypes.DATE,
            allowNull: true
        },
        status: {
            type: DataTypes.ENUM(['active', 'inactive', 'deleted']),
        },
        profileImage: {
            type: DataTypes.STRING(1000),
            allowNull: true
        }
    },
        {
            underscored: true,
        })

    User.loadScope = () => {
        User.addScope('notDetletedUser', {
            where: {
                [Op.ne]: { status: 'deleted' }
            }
        }),
            User.addScope('activeUser', {
                where: {
                    status: 'active'
                }
            })
    }

    User.associate = (models) => {
        User.hasMany(models.UserAddress, {
            foreignKey: 'userId',
            as: 'addressDetails',
        })
        User.belongsTo(models.Role, {
            foreignKey: 'roleId', // Optional: you can specify the foreign key column name
            as: 'role',  // Optional alias for the association
        })
        User.belongsTo(models.Designation, {
            foreignKey: 'designationId',
            as: 'designationDetails',
        })
        User.hasMany(models.Leave, {
            foreignKey: 'userId',
            as: 'leaveDetails',
        })
        User.belongsTo(models.Department, {
            foreignKey: 'departmentId',
            as: 'departmentDetails',
        })
    }

    return User
}