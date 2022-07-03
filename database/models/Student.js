/*==================================================
/database/database/models/Student.js

It defines the student model for the database.
==================================================*/
const Sequelize = require('sequelize');  // Import Sequelize
const db = require('../db');  // Import Sequelize database instance called "db"

const Student = db.define("student", {
  firstname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  lastname: {
    type: Sequelize.STRING,
    allowNull: false
  },
  
  email: {
	type: Sequelize.STRING,
	allowNull: false
	  
  },
  
  imageUrl: {
	type: Sequelize.STRING,
	defaultValue: ""
  },
  
  gpa: {
	type: Sequelize.DECIMAL(2,1), // 2 total digits, 1 of which is a decimal value
	defaultValue: 0.0,
	validate: {
		min: 0.0,
		max: 4.0
	}
	  
  }
  
});

// Export the student model
module.exports = Student;