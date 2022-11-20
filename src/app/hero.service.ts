import {Injectable} from '@angular/core';
import {Hero} from './hero';
import {HEROES} from "./moke-heroes";
import {Observable, of} from "rxjs";
import {MessageService} from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private messageService: MessageService) {
  }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: Fetched Heroes')
    return heroes;
  }

  getHero(id: number): Observable<Hero | undefined> {
    const hero = HEROES.find(hero => hero.id === id)
    this.messageService.add(`HeroService: Fetched with id: ${id}`)
    return of(hero)
  }
}
