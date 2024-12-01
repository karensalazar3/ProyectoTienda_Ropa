'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Products', [
      {
        name: 'Bikini Floral',
        description: 'Bikini con estampado floral, ideal para el verano.',
        price: 25.99,
        stock: 150,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Traje de Baño Enterizo Rojo',
        description: 'Traje de baño enterizo de color rojo con detalles de diseño.',
        price: 40.00,
        stock: 80,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bañador de Playa',
        description: 'Bañador corto de playa, cómodo y de secado rápido.',
        price: 18.50,
        stock: 200,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bikini de Rayas',
        description: 'Bikini con rayas horizontales, elegante y moderno.',
        price: 30.00,
        stock: 120,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Traje de Baño Rosa',
        description: 'Bikini dos piezas color rosa.',
        price: 22.00,
        stock: 150,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Products', null, {});
  }
};
