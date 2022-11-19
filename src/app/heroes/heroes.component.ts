import {Component, OnInit} from '@angular/core';
import {HEROES} from "../moke-heroes";
import {Hero} from "../hero";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;
  selectedHero!: Hero;

  constructor() {
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  ngOnInit(): void {
  }
}
