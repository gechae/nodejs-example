'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let datas = [];
    for (let i = 0; i < 10; i++){
      let obj = {
        nickname: "test_nickname-" + i,
        password: "1234",
        createdAt: new Date(),
        updatedAt: new Date()
      }
      datas.push(obj)
    }
    return queryInterface.bulkInsert('users', datas, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
