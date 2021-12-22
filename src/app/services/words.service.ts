import { Injectable } from '@angular/core';
import { WORDS } from '../data/data-base';
import { WordType } from '../data/models';
import { Type } from '../data/models';

@Injectable({
  providedIn: 'root'
})

export class WordsService {

  private words: WordType[] = [];
  private nouns: WordType[] = [];
  private verbs: WordType[] = [];

  constructor() { 
    this.words = WORDS;
  }

  GetWords():WordType[]{
    return this.words;
  }

  GetNouns():WordType[]{
    return this.nouns;
  }

  GetVerbs():WordType[]{
    return this.verbs;
  }
  AddNoun(word: WordType):void{
    this.nouns.push(word);
  }

  AddVerb(word: WordType):void{
    this.verbs.push(word);
  }

  Check(){
    this.nouns.map(noun => noun.correct = (noun.type === Type.NOUN));
    this.verbs.map(verb => verb.correct = (verb.type === Type.VERB));
  }
}
