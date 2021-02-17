module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          userName: 'Test 1',
          phone: '+55 (11)99999999',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userName: 'Test 2',
          phone: '+55 (11)99999998',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userName: 'Test 3',
          phone: '+55 (11)99999997',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
