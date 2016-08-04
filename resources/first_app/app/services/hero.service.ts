import { Injectable } from '@angular/core';

import { Hero } from '../hero';

import { HEROES } from '../mocks/mock-heroes';


@Injectable()
export class HeroService {

  getHeroes() {
    return Promise.resolve(HEROES);
  }

  // call this method in the component to
  // simulate a poor network connection
  getHeroesSlowly() {
	  return new Promise<Hero[]>(resolve =>
	    setTimeout(() => resolve(HEROES), 2000) // 2 seconds
	  );
}


}
