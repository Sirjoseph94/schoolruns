'use strict';

//const cors = require('cors');
const mongoose = require('mongoose'),
Students = mongoose.model('Students');

//show all students record
//module.exports = function(app, db){

exports.show_all_students_record = function(req, res){
    Students.find({}, function(err, students){
        if (err)
            res.send(err);
            res.json(students);
    });
};

//create new student record
exports.new_student_record = function(req, res){
    var new_student = new Students(req.body);
    new_student.save(function(err, student){
        if (err)
        res.send(err);
        res.json(student);
    });
};

//retrive a student record by ID
exports.show_one_student_record = function(req, res) {
    Students.findById(req.params.studentId, function(err, student){
        if (err)
        res.send(err);
        res.json(student);
    });
};

//upadte student record
exports.update_one_student_record = function(req, res){

    Student.findOneAndUpdate({_id: req.params.studentId}, req.body, {new: true}, function(err, student){
        if (err)
        res.send(err);
        res.json(student);
    });
};

//delete a student record
exports.delete_student_record = function(req, res){
    Students.remove({
        _id: req.params.studentId},
        function(err, student){
            if(err)
            res.send(err);
            res.json({message: 'Student record successfully deleted'});
    });
};
//}