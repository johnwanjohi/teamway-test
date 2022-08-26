import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {interval} from 'rxjs';
import {QuestionService} from '../service/question.service';
import {IQuestions, IQuestionsList} from "../service/model/questions";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
  changeDetection:ChangeDetectionStrategy.Default
})
export class QuestionComponent implements OnInit, AfterViewInit {

  public name: string = "";
  public alfaRef = String;
  public questionList: IQuestions[] | undefined ;
  public yourStoredQuestions: IQuestions[] | undefined ;
  public currentQuestion: number = 0;
  counter = 60;
  correctAnswer: number = 0;
  inCorrectAnswer: number = 0;
  interval$: any;
  progress: string = "0";
  isQuizCompleted : boolean = false;
  constructor(private questionService: QuestionService, private changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.name = localStorage.getItem("name")!;
  }
  ngAfterViewInit(){
    this.getAllQuestions();
    this.startCounter();
  }
  getAllQuestions() {
    this.questionService.getQuestionJson()
      .subscribe(res => {
        let localStoredQuestions: IQuestionsList;
        this.questionService.clearStoredQuestions('localStoredQuestions');
        localStoredQuestions = JSON.parse(localStorage.getItem('localStoredQuestions')!);
        console.log(localStorage.getItem('localStoredQuestions'));
        if(!localStoredQuestions) {
          this.questionService.clearStoredQuestions('localStoredQuestions');
          this.questionService.storeQuestions('localStoredQuestions', JSON.stringify(res));
          this.questionList = res.questions;
        }else{
          this.questionList = localStoredQuestions.questions;
        }
        this.changeDetectorRef.detectChanges();
      });
  }

  nextQuiz() {
    this.currentQuestion++;
  }
  previousQuiz() {
    this.currentQuestion--;
  }
  answer(currentQno: number, option: any,selected?: number) {
    if(currentQno === this.questionList?.length){
      this.isQuizCompleted = true;
      this.stopCounter();
    }
    if (option.correct) {
      this.correctAnswer++;
      setTimeout(() => {
        // this.currentQuestion++;
        this.resetCounter();
        this.getProgressPercent();
      }, 1000);
    } else {
      setTimeout(() => {
        // this.currentQuestion++;
        this.inCorrectAnswer++;
        this.resetCounter();
        this.getProgressPercent();
      }, 1000);
    }
    this.questionService.storeQuestions('localStoredQuestions','{questions:' +
      JSON.stringify(this.questionList) + '}');
    this.changeDetectorRef.detectChanges();
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
