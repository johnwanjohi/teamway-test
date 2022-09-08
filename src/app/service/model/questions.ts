export interface IQuestionsOptionsAnswers {
  text: string;
  correct: boolean;
  score: number;
}
export interface IQuestions {
  id:number;
  questionText: string;
  optionsAnswers: IQuestionsOptionsAnswers[];
  selectedAnswer: number;
}
export interface IQuestionsList {
  questions: IQuestions[];
}
