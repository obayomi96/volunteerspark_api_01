'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Ngos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      logo: {
        type: Sequelize.STRING
      },
      about: {
        type: Sequelize.TEXT
      },
      password: {
        type: Sequelize.STRING
      },
      isVerified: {
        type: Sequelize.BOOLEAN
      },
      type: {
        type: Sequelize.STRING
      },
      industry: {
        type: Sequelize.STRING
      },
      nature: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.TEXT
      },
      phonenumber: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      website: {
        type: Sequelize.STRING
      },
      linkedin: {
        type: Sequelize.STRING
      },
      instagram: {
        type: Sequelize.STRING
      },
      twitter: {
        type: Sequelize.STRING
      },
      verificationDocument: {
        type: Sequelize.STRING
      },
      sdgs: {
        type: Sequelize.STRING
      },
      interestArea: {
        type: Sequelize.STRING
      },
      beneficiaries: {
        type: Sequelize.INTEGER
      },
      beneficiaryDemographic: {
        type: Sequelize.STRING
      },
      pastworkProjectName: {
        type: Sequelize.STRING
      },
      pastworkStartDate: {
        type: Sequelize.DATE
      },
      pastwordEndDate: {
        type: Sequelize.DATE
      },
      pastwordDuration: {
        type: Sequelize.STRING
      },
      pastwordAbout: {
        type: Sequelize.TEXT
      },
      pastworkBeneficiariesReached: {
        type: Sequelize.INTEGER
      },
      pastworkNumberOfVoluntweers: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Ngos');
  }
};