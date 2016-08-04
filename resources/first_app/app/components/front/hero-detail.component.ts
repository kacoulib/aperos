// we import Input because in this component,
// we are using a input which has a binding relation
import { Component, Input } from '@angular/core';

import { Hero } from '../../hero';

@Component({
  selector: 'my-hero-detail',
  template: `
	  <div *ngIf="hero">
	    <h2>{{hero.name}} details!</h2>
	    <div><label>id: </label>{{hero.id}}</div>
	    <div>
	      <label>name: </label>
	      <input [(ngModel)]="hero.name" placeholder="name"/>
	    </div>
	  </div>
	`

})

export class HeroDetailComponent {
	// we have to use this each time a property is a direct consequence
	// of a databind
	// ex: the hero property is call from (click) binding.
	// 		so if we want him to show up, we have to use @Input
	@Input()
	hero : Hero;
}
