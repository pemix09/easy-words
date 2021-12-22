import { WordsService } from './../../services/words.service';
import { WordType } from './../../data/models';
import { Component, Input, OnInit } from '@angular/core';
import { WORDS } from 'src/app/data/data-base';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent {

  @Input()
  title: string;

  @Input()
  words: WordType[] = [];
  

}
