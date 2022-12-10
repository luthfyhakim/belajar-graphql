/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('posts').del()
  await knex('posts').insert([
    {
      title: 'Judul 1',
      body: 'Incididunt labore eiusmod excepteur eu occaecat aliquip anim ipsum enim amet velit magna culpa elit. Consequat cupidatat enim amet nostrud veniam qui enim est. Non minim consequat sint aliquip commodo adipisicing est tempor.',
      slug: 'judul-1'
    },
    {
      title: 'Judul 2', 
      body: 'Commodo nulla dolore culpa in irure sint commodo amet pariatur pariatur. Tempor duis do ipsum sint ullamco ex ullamco quis eiusmod incididunt tempor. Ex sint ipsum irure qui duis laborum commodo exercitation quis. Elit anim officia reprehenderit minim nostrud excepteur fugiat excepteur',
      slug: 'judul-2'
    },
    {
      title: 'Judul 3', 
      body: 'Pariatur non fugiat amet duis aute. Lorem reprehenderit aliqua enim sit cupidatat exercitation anim adipisicing ea laboris sit deserunt id do. Id ut consectetur excepteur ut sint. Esse laborum elit ipsum nulla exercitation magna id ea. Magna magna proident est aliquip magna velit Lorem dolore duis tempor ad', 
      slug: 'judul-3'
    }
  ]);
};
