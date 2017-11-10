'use strict';

module.exports = function(app) {
    const studentData = require('../controllers/studentController');


    //the Routes for student data

    app.route('/students')//all students data
        .get(studentData.show_all_students_record)// GET all student profile
        .post(studentData.new_student_record);// INSERT a new student profile
   // app.route('/student/add')
    

    app.route('/student/:studentId')//specific student data
        .get(studentData.show_one_student_record)//GET one student profile by Id
        .put(studentData.update_one_student_record)//UPDATE student profile
        .delete(studentData.delete_student_record)// DELETE a student Id
};