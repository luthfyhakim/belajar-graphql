const { faker } = require("@faker-js/faker");
const generateData = Array(20).fill(0).map((_, i) => {
  return {
    name: faker.name.fullName(), 
    email: faker.internet.email(),
    address: faker.address.cityName(),
    phone: faker.phone.number()
  }
});

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert(generateData);
};
