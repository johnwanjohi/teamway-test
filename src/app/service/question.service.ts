import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {IQuestions, IQuestionsList} from "./model/questions";
import {Observable, of} from "rxjs";
import {catchError, tap} from "rxjs/operators";
import {MessageService} from "./message.service";


@Injectable({
  providedIn: 'root'
})

export class QuestionService {
  private questionsUrl = 'api/questions'; // URL to web api

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http : HttpClient,private messageService: MessageService) { }

  getQuestionJson(): Observable<any> {
    return this.http.get<IQuestions>(this.questionsUrl).pipe(
      tap((_) => {

        this.log('fetched questions')
      }),
      catchError(this.handleError<IQuestionsList>('getQuestions', ))
    );
  }
  storeQuestions(item:string,content:string){
    localStorage.setItem(item,content);
  }
  clearStoredQuestions(item:string){
    localStorage.removeItem(item);
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  private log(message: string) {
    this.messageService.add(`Question Service: ${message}`);
  }
}
