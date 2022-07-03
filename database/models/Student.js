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
	defaultValue: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
  },
  
  gpa: {
	type: Sequelize.DECIMAL(2,1), // 2 total digits, 1 of which is a decimal value
	//defaultValue: 0.0,
	validate: {
		min: 0.0,
		max: 4.0
	}
	  
  }
  
});

// Export the student model
module.exports = Student;