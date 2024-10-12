module.exports = (sequelize, DataTypes) => {
    const UserAddress = sequelize.define('UserAddress', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        userId: {
            type: DataTypes.INTEGER
        },
        addressLine1: {
            type: DataTypes.STRING(100)
        },
        addressLine2: {
            type: DataTypes.STRING(100)
        },
        city: {
            type: DataTypes.STRING(100)
        },
        state: {
            type: DataTypes.STRING(100)
        },
        country: {
            type: DataTypes.STRING(100)
        },
        zipCode: {
            type: DataTypes.STRING(10)
        },
        apartment: {
            type: DataTypes.STRING(100)
        },
        status: {
            type: DataTypes.ENUM(['active', 'deleted']),
            defaultValue: 'active'
        }
    },
        {
            underscored: true
        })

    UserAddress.associate = (models) => {
        UserAddress.belongsTo(models.User, {
            foreignKey: 'userId',
            as: 'userDetails'
        })
    }

    return UserAddress
}