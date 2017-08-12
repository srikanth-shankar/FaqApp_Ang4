import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

  questions:object[];

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

  ngOnInit() {
  }

}
