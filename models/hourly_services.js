module.exports = (sequelize, DataTypes) => {

    const hourly_services = sequelize.define('hourly_services', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        package_type: DataTypes.STRING,
        technology: DataTypes.STRING,
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        phone: DataTypes.STRING,
        address: DataTypes.STRING,
        city: DataTypes.STRING,
        state: DataTypes.STRING,
        country: DataTypes.STRING,

    }, {
        freezeTableName: true, // Model tableName will be the same as the model name
        timestamps: false
    }
    );

    return hourly_services;
};