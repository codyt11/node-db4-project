  
exports.seed = function (knex) {
  // Inserts seed entries
  return knex('ingredients').insert([{ ingredient: 'rowValue1', recipe_id: 1 }]);
};