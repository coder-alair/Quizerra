
import React, { createContext, useReducer } from 'react';

export const AnswerContext = createContext();

export const AnswerContextProvider = ({ children }) => {

  const INITIAL_STATE = {
    userAnswers: [],
    questionAnswers: []
  }

  const answerReducer = (state, action) => {
    switch (action.type) {
      case "ADD_ANS": return {
        userAnswers: action.payload.userAnswers,
        questionAnswers:action.payload.questionAnswers,
      };

      default: return state;
    }
  }

  const [state, dispatch] = useReducer(answerReducer, INITIAL_STATE);

  return (
    <AnswerContext.Provider value={{ data: state, dispatch }}>
      {children}
    </AnswerContext.Provider>
  );
};
