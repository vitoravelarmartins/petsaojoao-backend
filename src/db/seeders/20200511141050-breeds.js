"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "breeds",
      [
        {
          name: "Pastor-alemão",
          specie_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Buldogue",
          specie_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Poodle",
          specie_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Beagle",
          specie_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Bernese",
          specie_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Persa",
          specie_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Maine Coon",
          specie_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Siamês",
          specie_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Sphynx",
          specie_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Angorá",
          specie_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("breeds", null, {});
  },
};
