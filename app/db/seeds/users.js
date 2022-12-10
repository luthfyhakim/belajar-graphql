/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {
      name: 'luthfyhakim', 
      email: 'luthfyhakim@gmail.com',
      address: 'Trenggalek',
      phone: '085335249308'
    },
    {
      name: 'ecobag', 
      email: 'ecobag@gmail.com',
      address: 'Surabaya',
      phone: '085375269308'
    },
    {
      name: 'ruby', 
      email: 'ruby@gmail.com',
      address: 'Jakarta',
      phone: '085335349318'
    }
  ]);
};
