import { Component } from '@angular/core';
import { Observable, timeout } from 'rxjs';
import { RandomJokeData } from './interfaces/random-joke-data';
import { RandomJokeService } from './random-joke.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RandomJokes';

  joke$: Observable<RandomJokeData> | undefined;
  jokesetupline: String | undefined | null;
  jokepunchline: String | undefined | null;
  jokewaittext: String | undefined | null;

  constructor(private randomJokeService: RandomJokeService){}

  UpdateOnClick(){
    
    this.joke$ = this.randomJokeService.emitRandomJoke();
    this.jokepunchline = ""
    this.jokesetupline = ""
    let selectedRandomJoke: RandomJokeData;
    this.joke$.subscribe((joke: RandomJokeData)=> {selectedRandomJoke = joke;
    
    })

    this.jokesetupline = selectedRandomJoke!.jokeSetup;
    setTimeout(() => {
      this.jokepunchline = "wait for it";
      setTimeout(() => {
        this.jokepunchline = "Waaaaaaait for it";
        setTimeout(() => {
          this.jokepunchline = "Just a little longer";
          setTimeout(() => {
            this.jokepunchline = "Almost there....";
            setTimeout(() => {
              this.jokepunchline = selectedRandomJoke!.punshline;
            }, 3000);
          }, 2000);
        }, 2000);
      }, 2000);
    }, 2000);
  }
}
