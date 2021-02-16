module.exports = {
  development: {
    username: 'postgres',
    password: null,
    database: 'hey',
    host: '127.0.0.1',
    dialect: 'postgres',
    define: {
      timestamps: true,
    },
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  production: {
    username: 'root',
    password: null,
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
};
