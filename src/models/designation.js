module.exports = (seequelize, DataTypes) => {
    const Designation = seequelize.define('Designation', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(100)
        },
        level: {
            type: DataTypes.ENUM(['junior', 'mid', 'senior'])
        },
        title: {
            type: DataTypes.STRING(100)
        }
    })
    return Designation
}