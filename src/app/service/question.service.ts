import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {IQuestionsList} from "./model/questions";


@Injectable({
  providedIn: 'root'
})

export class QuestionService {

  constructor(private http : HttpClient) { }

  getQuestionJson(){
    return this.http.get<IQuestionsList>("assets/introvert-or-extrovert-questions.json");
  }
}
