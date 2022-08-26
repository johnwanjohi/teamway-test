import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import { QuestionComponent } from './question.component';
import {QuestionService} from "../service/question.service";
import {of} from "rxjs";
import {mockquestions} from "../service/in-memory-data.service";

fdescribe('QuestionComponent', () => {
  let component: QuestionComponent;
  let fixture: ComponentFixture<QuestionComponent>;

  beforeEach(async () => {
    const questionsService = jasmine.createSpyObj<QuestionService>(['getQuestionJson'])
    questionsService.getQuestionJson.and.returnValue(of(mockquestions));
    await TestBed.configureTestingModule({
      declarations: [ QuestionComponent ],
      providers:[{provide:QuestionService,
        useValue: questionsService}],
      imports:[HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
