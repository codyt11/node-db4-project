exports.seed = function (knex) {
  // Inserts seed entries
  return knex('ingredients').insert([{ ingredient: 'flour', quantity: 2 }]);
};