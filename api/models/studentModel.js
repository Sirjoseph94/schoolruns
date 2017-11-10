'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    name: String,
    matriculation_number: String,
    department: String,
    level: Number,
    age:Number,
    grade: Number,
   // photo: String,
    Created_date: {
        type: Date,
        default: Date.now
    },

});

module.exports = mongoose.model('Students', StudentSchema);