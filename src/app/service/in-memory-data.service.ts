import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';


@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const questions = [
      {'questions': [
        {id:0,
          "questionText": "You’re really busy at work and a colleague is telling you their life story and personal woes. You:",
          "optionsAnswers": [
            {
              "text": "Don’t dare to interrupt them",
              "answer": 'introvert'
            },
            {
              "text": "Think it’s more important to give them some of your time; work can wait",
              "answer": 'extrovert'
            },
            {
              "text": "Listen, but with only with half an ear",
              "answer": 'introvert'
            },
            {
              "text": "Interrupt and explain that you are really busy at the moment",
              "answer": 'introvert'
            }
          ]
        },
        {id:1,
          "questionText": "You’ve been sitting in the doctor’s waiting room for more than 25 minutes. You:",
          "optionsAnswers": [
            {
              "text": "Look at your watch every two minutes",
              "answer": 'introvert'

            },
            {
              "text": "Bubble with inner anger, but keep quiet",
              "answer": 'introvert'
            },
            {
              "text": "Explain to other equally impatient people in the room that the doctor " +
                "is always running late",
              "answer": 'extrovert'
            },
            {
              "text": "Complain in a loud voice, while tapping your foot impatiently",
              "answer": 'extrovert'
            }
          ]
        },
        {
          id:3,
          "questionText": "You’re having an animated discussion with a colleague regarding a project that you’re in charge of. You:",
          "optionsAnswers": [
            {
              "text": "Don’t dare contradict them",
              "answer": 'introvert'
            },
            {
              "text": "Think that they are obviously right",
              "answer": 'extrovert'
            },
            {
              "text": "Defend your own point of view, tooth and nail",
              "answer": 'introvert'
            },
            {
              "text": "Continuously interrupt your colleague",
              "answer": 'extrovert'
            }
          ]
        },
        {
          id:3,
          "questionText": "You are taking part in a guided tour of a museum. You:",
          "optionsAnswers": [
            {
              "text": "Are a bit too far towards the back so don’t really hear what the guide is saying",
              "answer": 'introvert'
            },
            {
              "text": "Follow the group without question",
              "answer": 'introvert'
            },
            {
              "text": "Make sure that everyone is able to hear properly",
              "answer": 'extrovert'
            },
            {
              "text": "Are right up the front, adding your own comments in a loud voice",
              "answer": 'introvert'
            }
          ]
        },
        {
          id:4,
          "questionText": "During dinner parties at your home, you have a hard time with people who:",
          "optionsAnswers": [
            {
              "text": "Ask you to tell a story in front of everyone else",
              "answer": 'introvert'
            },
            {
              "text": "Talk privately between themselves",
              "answer": 'introvert'
            },
            {
              "text": "Hang around you all evening",
              "answer": 'introvert'
            },
            {
              "text": "Always drag the conversation back to themselves",
              "answer": 'extrovert'
            }
          ]
        }
      ]}];

    return {questions} ;
  }

}
export const mockquestions = [] = [
  {'questions': [{id:0,
      "questionText": "You’re really busy at work and a colleague is telling you their life story and personal woes. You:",
      "optionsAnswers": [
        {
          "text": "Don’t dare to interrupt them",
          "correct": true
        },
        {
          "text": "Think it’s more important to give them some of your time; work can wait"
        },
        {
          "text": "Listen, but with only with half an ear"
        },
        {
          "text": "Interrupt and explain that you are really busy at the moment"
        }
      ]
    }]}];
