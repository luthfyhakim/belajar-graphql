const { faker } = require("@faker-js/faker");
const generateData = Array(20).fill(0).map((_, i) => {
  return {
    title: faker.lorem.word(),
    body: faker.lorem.text(),
    slug: faker.lorem.slug()
  }
});

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('posts').del()
  await knex('posts').insert(generateData);
};
