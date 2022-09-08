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
        },
        {id:1,
          "questionText": "You’ve been sitting in the doctor’s waiting room for more than 25 minutes. You:",
          "optionsAnswers": [
            {
              "text": "Look at your watch every two minutes",
              "correct": true,
              "score":2

            },
            {
              "text": "Bubble with inner anger, but keep quiet",
              "score":1
            },
            {
              "text": "Explain to other equally impatient people in the room that the doctor " +
                "is always running late"
            },
            {
              "text": "Complain in a loud voice, while tapping your foot impatiently"
            }
          ]
        },
        {
          id:3,
          "questionText": "You’re having an animated discussion with a colleague regarding a project that you’re in charge of. You:",
          "optionsAnswers": [
            {
              "text": "Don’t dare contradict them",
              "correct": true
            },
            {
              "text": "Think that they are obviously right"
            },
            {
              "text": "Defend your own point of view, tooth and nail"
            },
            {
              "text": "Continuously interrupt your colleague"
            }
          ]
        },
        {
          id:3,
          "questionText": "You are taking part in a guided tour of a museum. You:",
          "optionsAnswers": [
            {
              "text": "Are a bit too far towards the back so don’t really hear what the guide is saying",
              "correct": true
            },
            {
              "text": "Follow the group without question"
            },
            {
              "text": "Make sure that everyone is able to hear properly"
            },
            {
              "text": "Are right up the front, adding your own comments in a loud voice"
            }
          ]
        },
        {
          id:4,
          "questionText": "During dinner parties at your home, you have a hard time with people who:",
          "optionsAnswers": [
            {
              "text": "Ask you to tell a story in front of everyone else",
              "correct": true
            },
            {
              "text": "Talk privately between themselves"
            },
            {
              "text": "Hang around you all evening"
            },
            {
              "text": "Always drag the conversation back to themselves"
            }
          ]
        },
        {
          id:5,
          "questionText": "You crack a joke at work, but nobody seems to have noticed. You:",
          "optionsAnswers": [
            {
              "text": "Think it’s for the best — it was a lame joke anyway",
              "correct": true
            },
            {
              "text": "Wait to share it with your friends after work"
            },
            {
              "text": "Try again a bit later with one of your colleagues"
            },
            {
              "text": "Keep telling it until they pay attention"
            }
          ]
        },
        {
          id:6,
          "questionText": "This morning, your agenda seems to be free. You:",
          "optionsAnswers": [
            {
              "text": "Know that somebody will find a reason to come and bother you",
              "correct": true
            },
            {
              "text": "Heave a sigh of relief and look forward to a day without stress"
            },
            {
              "text": "Question your colleagues about a project that’s been worrying you"
            },
            {
              "text": "Pick up the phone and start filling up your agenda with meetings"
            }
          ]
        },
        {
          id:7,
          "questionText": "During dinner, the discussion moves to a subject about which you know nothing at all. You:",
          "optionsAnswers": [
            {
              "text": "Don’t dare show that you don’t know anything about the subject",
              "correct": true
            },
            {
              "text": "Barely follow the discussion"
            },
            {
              "text": "Ask lots of questions to learn more about it"
            },
            {
              "text": "Change the subject of discussion"
            }
          ]
        },
        {
          id:8,
          "questionText": "You’re out with a group of friends and there’s a person who’s quite shy and doesn’t talk much. You:",
          "optionsAnswers": [
            {
              "text": "Notice that they’re alone, but don’t go over to talk with them",
              "correct": true
            },
            {
              "text": "Go and have a chat with them"
            },
            {
              "text": "Shoot some friendly smiles in their direction"
            },
            {
              "text": "Hardly notice them at all"
            }
          ]
        },
        {
          id:9,
          "questionText": "At work, somebody asks for your help for the hundredth time. You:",
          "optionsAnswers": [
            {
              "text": "Give them a hand, as usual",
              "correct": true
            },
            {
              "text": "Accept — you’re known for being helpful"
            },
            {
              "text": "Ask them, please, to find somebody else for a change"
            },
            {
              "text": "Loudly make it known that you’re annoyed"
            }
          ]
        },
        {
          id:10,
          "questionText": "You’ve been see a movie with your family and the reviews are mixed. You:",
          "optionsAnswers": [
            {
              "text": "Don’t share your point of view with anyone",
              "correct": true
            },
            {
              "text": "Didn’t like the film, but keep your views to yourself when asked"
            },
            {
              "text": "State your point of view with enthusiasm"
            },
            {
              "text": "Try to bring the others round to your point of view"
            }
          ]
        },
        {
          id:11,
          "questionText": "A friend arrives late for your meeting. You:",
          "optionsAnswers": [
            {
              "text": "Say, ‘It’s not a problem,’ even if that’s not what you really think",
              "correct": true
            },
            {
              "text": "Give them a filthy look and sulk for the rest of the evening"
            },
            {
              "text": "Tell them, ‘You’re too much! Have you seen the time?’"
            },
            {
              "text": "Make a scene in front of everyone"
            }
          ]
        },
        {
          id:12,
          "questionText": "You can’t find your car keys. You:",
          "optionsAnswers": [
            {
              "text": "Don’t want anyone to find out, so you take the bus instead",
              "correct": true
            },
            {
              "text": "Panic and search madly without asking anyone for help"
            },
            {
              "text": "Grumble without telling your family why you’re in a bad mood"
            },
            {
              "text": "Accuse those around you for misplacing them"
            }
          ]
        },
        {
          id:13,
          "questionText": "It’s time for your annual appraisal with your boss. You:",
          "optionsAnswers": [
            {
              "text": "Go with great hesitation as these sessions are torture for you",
              "correct": true
            },
            {
              "text": "Look forward to hearing what your boss thinks about you and expects from you"
            },
            {
              "text": "Rehearse ad nauseam the arguments and ideas that you’ve prepared for the meeting"
            },
            {
              "text": "Go along unprepared as you are confident and like improvising"
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
