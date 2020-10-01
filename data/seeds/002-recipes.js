
exports.seed = function (knex) {
  // Inserts seed entries
  return knex('recipes').insert([
    { recipe_name: 'Test', steps: 'Test1 Test2 Test3' },
  ]);
};