import { Injectable } from '@angular/core';
import { Type, WordType } from '../data/models';
import { WORDS } from '../data/data-base';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class WordsService {
  private words = new BehaviorSubject<WordType[]>([]);
  private answers = new Subject<WordType>();

  constructor() {
    setTimeout(() => {
      this.words.next(WORDS);
    }, 1000);
  }

  addNoun(value: WordType): void {
    value.correct = value.type === Type.NOUN;
    this.answers.next(value);
  }

  addVerb(value: WordType): void {
    value.correct = value.type === Type.VERB;
    this.answers.next(value);
  }

  getWords(): BehaviorSubject<WordType[]> {
    return this.words;
  }

  getNouns(): Observable<WordType> {
    return this.answers
      .asObservable()
      .pipe(
        filter(
          word =>
            (word.type === Type.VERB && word.correct === false) ||
            (word.type === Type.NOUN && word.correct === true)
        )
      );
  }

  getVerbs(): Observable<WordType> {
    return this.answers
      .asObservable()
      .pipe(
        filter(
          word =>
            (word.type === Type.NOUN && word.correct === false) ||
            (word.type === Type.VERB && word.correct === true)
        )
      );
  }
}
