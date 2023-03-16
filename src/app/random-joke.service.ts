import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RandomJokeData } from './interfaces/random-joke-data';

@Injectable({
  providedIn: 'root'
})
export class RandomJokeService {

  private jokecollection : Array<RandomJokeData>;

  constructor() {
    this.jokecollection = [
      {jokeSetup: "Which bear is the most condescending?", punshline: "A pan-duh!"},
      {jokeSetup: "What kind of noise does a witch’s vehicle make?", punshline: "Brrrroooom, brrroooom."},
      {jokeSetup: "What’s brown and sticky?", punshline: "A stick."},
      {jokeSetup: "Two guys walked into a bar.", punshline: "The third guy ducked."},
      {jokeSetup: "How do you get a country girl’s attention?", punshline: "A tractor."},
      {jokeSetup: "Why are elevator jokes so classic and good?", punshline: "They work on many levels."},
      {jokeSetup: "What do you call a pudgy psychic?", punshline: "A four-chin teller"},
      {jokeSetup: "What did the police officer say to his belly-button?", punshline: "You’re under a vest"},
      {jokeSetup: "What do you call it when a group of apes starts a company?", punshline: "Monkey business."},
      {jokeSetup: "My wife asked me to stop singing “Wonderwall” to her.", punshline: "I said maybe..."},
    ]
   }

   emitRandomJoke(): Observable<RandomJokeData> {
    return of(this.jokecollection[Math.floor(Math.random() * this.jokecollection.length)])
   }
}
