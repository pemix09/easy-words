import { Component, OnInit } from '@angular/core';
import { WordType } from 'src/app/data/models';
import { WordsService } from 'src/app/services/words.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  word: WordType = null;

  constructor(private wordService: WordsService) { }

  ngOnInit(): void {
    this.FetchWord();
  } 

  private FetchWord():void{
    this.word = this.wordService.GetWords().shift();
  }

  AddToNouns(word: WordType){
    this.wordService.AddNoun(word);
    this.FetchWord();
  }

  AddToVerbs(word: WordType){
    this.wordService.AddVerb(word);
    this.FetchWord();
  }

  Check(){
    this.wordService.Check();
  }

}
