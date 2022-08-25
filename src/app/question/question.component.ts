import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { QuestionService } from '../service/question.service';
import {IQuestions, IQuestionsList} from "../service/model/questions";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  public name: string = "";
  public alfaRef = String;
  public questionList: IQuestions[] | undefined ;
  public yourStoredQuestions: IQuestions[] | undefined ;
  public localStoredQuestions: string | undefined;
  public currentQuestion: number = 0;
  counter = 60;
  correctAnswer: number = 0;
  inCorrectAnswer: number = 0;
  interval$: any;
  progress: string = "0";
  isQuizCompleted : boolean = false;
  constructor(private questionService: QuestionService) {
  }

  ngOnInit(): void {
    this.name = localStorage.getItem("name")!;
    this.localStoredQuestions = localStorage.getItem("localStoredQuestions")!;
    this.getAllQuestions();
    this.startCounter();
  }
  getAllQuestions() {
    this.questionService.getQuestionJson()
      .subscribe(res => {
        this.questionList = res.questions;
        if(!this.localStoredQuestions){
          localStorage.setItem('localStoredQuestions',JSON.stringify(this.questionList));
        }else{
          let localStoredQuestions: IQuestionsList;
          localStoredQuestions = JSON.parse(localStorage.getItem('localStoredQuestions')!);
          if(this.questionList.length !== localStoredQuestions.questions.length){
            localStorage.setItem('localStoredQuestions',JSON.stringify(this.questionList));
          }else{
            this.questionList = localStoredQuestions.questions;
          }
        }
        this.isQuizCompleted = false;
      });
  }
  nextQuiz() {
    this.currentQuestion++;
  }
  previousQuiz() {
    this.currentQuestion--;
  }
  answer(currentQno: number, option: any) {
    if(currentQno === this.questionList?.length){
      this.isQuizCompleted = true;
      this.stopCounter();
    }
    if (option.correct) {
      this.correctAnswer++;
      setTimeout(() => {
        this.currentQuestion++;
        this.resetCounter();
        this.getProgressPercent();
      }, 1000);
    } else {
      setTimeout(() => {
        this.currentQuestion++;
        this.inCorrectAnswer++;
        this.resetCounter();
        this.getProgressPercent();
      }, 1000);
      }
  }
  startCounter() {
    this.interval$ = interval(1000)
      .subscribe(val => {
        this.counter--;
        if (this.counter === 0) {
          this.currentQuestion++;
          this.counter = 60;
        }
      });
    setTimeout(() => {
      this.interval$.unsubscribe();
    }, 600000);
  }
  stopCounter() {
    this.interval$.unsubscribe();
    this.counter = 0;
  }
  resetCounter() {
    this.stopCounter();
    this.counter = 60;
    this.startCounter();
  }
  resetQuiz() {
    this.resetCounter();
    this.getAllQuestions();
    this.counter = 60;
    this.currentQuestion = 0;
    this.progress = "0";
  }
  getProgressPercent() {
    if (!this.questionList) return;
    this.progress = ((this.currentQuestion / this.questionList?.length) * 100).toString();
    return this.progress;
  }
}
