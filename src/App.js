import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './components/mainComponents/home';
import ErrorPage from './components/subComponents/errorPage';
import Quizpage from './components/mainComponents/quizpage';
import Result from './components/mainComponents/resultpage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/quiz' exact element={<Quizpage/>}/>
        <Route path='/quiz/result' exact element={<Result/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </Router>
  );
};

export default App;