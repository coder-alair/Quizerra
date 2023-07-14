const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
    question: { type: String, require:true},
    op1: { type: String, require:true },
    op2: { type: String, require:true },
    op3: { type: String, require:true },
    op4: { type: String, require:true },
    answer: { type: String, require:true }
},
    { timestamps: true }
);

const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz;