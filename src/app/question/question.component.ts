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
  // @ts-ignore
  public localStoredQuestions: IQuestions[] | any[] = {}! ;
  public name: string = "";
  public alfaRef = String;
  public questionList: IQuestionsList | undefined ;
  public yourStoredQuestions: IQuestions[] | undefined ;
  public currentQuestion: number = 0;
  counter = 60;
  correctAnswer: number = 0;
  inCorrectAnswer: number = 0;
  interval$: any;
  progress: string = "0";
  isQuizCompleted : boolean = false;
  timmerOnOff: boolean = false;
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
        this.questionService.clearStoredQuestions('localStoredQuestions');
        this.localStoredQuestions = res[0].questions;
        this.questionList = res[0];
        this.changeDetectorRef.detectChanges();
      });
  }

  nextQuiz() {
    if (!this.questionList) return;
    this.currentQuestion++;
    if(Number(this.currentQuestion) === (Number(this.questionList?.questions?.length) ) ){
      this.complete();
      return;
    }
    if(this.currentQuestion < this.questionList?.questions?.length ){

    }
  }
  previousQuiz() {
    this.currentQuestion--;
  }
  answer(currentQno: number, option: any,selected?: number) {
    if(currentQno === this.questionList?.questions?.length){
      this.isQuizCompleted = true;
      this.stopCounter();
    }
    if (option.correct) {
      this.correctAnswer++;
      setTimeout(() => {
        this.resetCounter();
        this.getProgressPercent();
      }, 1000);
    } else {
      setTimeout(() => {
        this.inCorrectAnswer++;
        this.resetCounter();
        this.getProgressPercent();
      }, 1000);
    }

    this.questionService.storeQuestions('localStoredQuestions',
      JSON.stringify(this.questionList));
    this.changeDetectorRef.detectChanges();
    console.log(this.questionList);
  }
  startCounter() {
    this.timmerOnOff = true;
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
    this.timmerOnOff = false;
  }
  checkTimerStatus(){
    if(this.timmerOnOff === false){
      this.stopCounter();
    }else{
      this.resetCounter();
    }
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
    this.isQuizCompleted = false;
    this.changeDetectorRef.detectChanges();
  }
  getProgressPercent() {
    if (!this.questionList) return;
    this.progress = ((this.currentQuestion / this.questionList?.questions.length) * 100).toString();
    return this.progress;
  }
  complete(){
      this.isQuizCompleted = true;
      this.stopCounter();
  }
}
