import { Injectable } from '@angular/core';
import {Question} from '../models/Question';

@Injectable()
export class DataService {
  questions : Question[];
  constructor() {
    this.questions=[
      {
        text: "what is ur name",
        answer: "my name is ssi",
        hide:true
      },
      {
        text: "what is ur color",
        answer: "red",
        hide:true
      },
      {
        text: "what is ur  prof",
        answer: "sw eng",
        hide:true
      }

    ];
   }

   getQuestions(){
     return this.questions ;
   }

   addQuestion(quest:Question){
    this.questions.unshift(quest);
   }
}
