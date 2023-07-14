const Quiz = require("../model/quiz");

const getQuizQuestions = async (req, res) => {
    const quizzes = await Quiz.find();
    res.json({'questions':quizzes});
}

const postQuestion = async (req, res) => {
    let newQuestion = new Quiz({
        question: req.body.question,
        op1: req.body.op1,
        op2: req.body.op2,
        op3: req.body.op3,
        op4: req.body.op4,
        answer: req.body.answer
    })
    await newQuestion.save();
    res.json({ 'message': 'Question posted successfully' })
}

module.exports = { getQuizQuestions, postQuestion };

