export interface IQuestionsOptionsAnswers {
  text: string;
  correct: boolean;
}
export interface IQuestions {
  questionText: string;
  optionsAnswers: IQuestionsOptionsAnswers[];
  selectedAnswer: number
}
export interface IQuestionsList {
  questions: IQuestions[];
}
