module.exports = (sequelize, DataTypes) => {
    const Leave = sequelize.define('Leave', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        fromDate: {
            type: DataTypes.DATE
        },
        toDate: {
            type: DataTypes.DATE
        },
        reason: {
            type: DataTypes.STRING(1000)
        },
        leaveType: {
            type: DataTypes.ENUM('health', 'personal'),
            allowNull: false
        },
        status: {
            type: DataTypes.ENUM(['pending', 'approved', 'rejected'])
        }
    },
        {
            underscored: true
        })

    Leave.associate = (models) => {
        Leave.belongsTo(models.User, {
            foreignKey: 'userId',
            as: 'userDetails'
        })
    }

    return Leave
}