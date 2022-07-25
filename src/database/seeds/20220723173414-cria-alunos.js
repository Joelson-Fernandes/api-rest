module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'alunos',
      [{
        nome: 'John',
        sobrenome: 'Doe',
        email: 'john07@gmail.com',
        idade: 30,
        peso: 90.20,
        altura: 1.85,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Maria',
        sobrenome: 'Socorro',
        email: 'maria@gmail.com',
        idade: 35,
        peso: 75.20,
        altura: 1.70,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'José',
        sobrenome: 'Aparecido',
        email: 'jose-aparecido@gmail.com',
        idade: 32,
        peso: 78.25,
        altura: 1.76,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Thomas',
        sobrenome: 'Frederick',
        email: 'thomas@gmail.com',
        idade: 38,
        peso: 81.45,
        altura: 1.78,
        created_at: new Date(),
        updated_at: new Date(),
      }],

      {},
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('People', null, {});
  },
};
