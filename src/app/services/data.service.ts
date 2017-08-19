import { Injectable } from '@angular/core';
import {Question} from '../models/Question';

@Injectable()
export class DataService {
  questions : Question[] = [];
  constructor() {
    /*this.questions=[
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
    ];*/
   }

   getQuestions(){
     if(localStorage.getItem('questions')===null){
        this.questions = [];
     }else{
        this.questions = JSON.parse(localStorage.getItem('questions'));
     }
     return this.questions ;
   }

   addQuestion(quest:Question){
    this.questions.unshift(quest);
    let questTemp:Question[] = [];

    if(localStorage.getItem('questions')===null){
      questTemp.unshift(quest);
      localStorage.setItem('questions', JSON.stringify(quest));
    }
    else{
      questTemp = JSON.parse( localStorage.getItem('questions'));
      questTemp.unshift(quest);
      localStorage.setItem('questions', JSON.stringify( questTemp ));
    }

   }

   removeQuestion(quest:Question){
    for(let i=0; i<this.questions.length; i++)
      {
        if(quest === this.questions[i])
          {
              this.questions.splice(i, 1);
              localStorage.setItem('questions', JSON.stringify(this.questions));
          }
      } 
    
   }
}
