require('dotenv').config();
const express = require('express');
const cors = require('cors');
const quizRoute = require('./routes/quiz.routes');
const { connectDB } = require('./utils/dbcon');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/quiz', quizRoute);

(function startup() {
    try {
        connectDB();
    }
    catch (err) {
        console.log(err.message);
    }
})();

app.listen(process.env.PORT || 3001, () => console.log('App is listening on port :', process.env.PORT || 3001));
