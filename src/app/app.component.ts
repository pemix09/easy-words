import { WordsService } from './services/words.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  constructor(private wordService: WordsService){

  }

  get nouns(){
    return this.wordService.GetNouns();
  }

  get verbs(){
    return this.wordService.GetVerbs();
  }
}
