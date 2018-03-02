import {Component} from '@angular/core';
import {OnInit} from '@angular/core';

import {Hero} from "./hero";
import {HeroService} from "./hero.service";
import {Router} from "@angular/router";

@Component({
  selector: 'hero-list',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  constructor(private heroService: HeroService, private router: Router) {
  }

  heroes: Hero[];
  selectedHero: Hero;

  ngOnInit(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/hero', this.selectedHero.id]);
  }
}
