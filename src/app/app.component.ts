import { Component } from '@angular/core';
import { WordsService } from './services/words.service';
import { map, tap } from 'rxjs/operators';
import { Type } from './data/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  nouns = this.wordsService.getNouns();
  verbs = this.wordsService.getVerbs();

  constructor(private wordsService: WordsService) {}

}
