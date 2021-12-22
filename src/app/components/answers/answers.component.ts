import { WordType } from './../../data/models';
import { Component, OnInit } from '@angular/core';
import { WORDS } from 'src/app/data/data-base';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit {

  private words: WordType[] = [];
  private nouns: WordType[] = [];
  private verbs: WordType[] = [];

  constructor() { 
    this.words = WORDS;
  }

  ngOnInit(): void {
  }

}
