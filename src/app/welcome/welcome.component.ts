import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import {QuestionService} from "../service/question.service";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  noOfQuestions: number =0;

  @ViewChild('name') nameKey!: ElementRef;
  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
    this.questionService.getQuestionJson()
      .subscribe((res)  => {
          this.noOfQuestions = res[0].questions.length;
          localStorage.setItem('localStoredQuestions',JSON.stringify(res));
        }
      );
  }
  startQuiz(){
    if(this.nameKey.nativeElement.value.trim())
    localStorage.setItem("name",this.nameKey.nativeElement.value);
  }

}
