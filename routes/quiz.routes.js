const express=require('express');
const { getQuizQuestions, postQuestion } = require('../controllers/quiz.controller');
const route=express.Router();

route.get('/',getQuizQuestions);
route.post('/',postQuestion);

module.exports=route;