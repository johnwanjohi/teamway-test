import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeComponent } from './welcome.component';
import {QuestionService} from "../service/question.service";
import {of} from "rxjs";
import {mockquestions} from "../service/in-memory-data.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;

  beforeEach(async () => {
    const questionsService =
      jasmine.createSpyObj<QuestionService>(['getQuestionJson'])
    questionsService.getQuestionJson.and.returnValue(of(mockquestions));

    await TestBed.configureTestingModule({
      declarations: [ WelcomeComponent ],
      providers:[{provide:QuestionService,
        useValue: questionsService}],
      imports:[HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
