import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Question} from '../../models/Question'

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  
  @Output() QuestionAddedEvnt = new EventEmitter<Question>();
  
  qText:string;
  ans:string;

  constructor() { }

  ngOnInit() {
  }

  addQuestion(){
    this.QuestionAddedEvnt.emit({text:this.qText, answer:this.ans, hide:true});
  }
}
