module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface
      .createTable('UserContacts', {
        userId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'Users', key: 'userId' },
        },
        contactId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'Users', key: 'userId' },
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false,
        },
      })
      .then(() =>
        queryInterface.sequelize.query(
          'ALTER TABLE "UserContacts" ADD CONSTRAINT "contact" PRIMARY KEY ("userId", "contactId")',
        ),
      );
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('UserContacts');
  },
};
