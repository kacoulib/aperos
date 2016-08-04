import { Component, OnInit } from '@angular/core';

import { Hero } from '../../hero';

import { HeroDetailComponent } from './hero-detail.component';

import { HeroService } from '../../services/hero.service';


@Component({
	// Each time the parsor sees this selector name
	// he will apply all stuff inside this #Component
 	selector: 'my-heroes',

 	// the angular directives used below are:
 	
	 	// 	*ngFor : make loop with the element he belongs to
		//		*ngFor = 'let key of keys' 
	 	
	 	// 	*ngIf : make a condition
	 	//		*ngIf = 'condition' 	
	
	// the angular event binding used below is

		//	(click) : add an eventListener to element he belongs to
		// 		(click)='function(param)'

	// the angular property binding used below is

		//	(class) : add a class to the element he belongs to
		// 	only if the condition return true
		// 		(class.className)='condition in which case the className will be added'

	template: `
			<h1>{{title}}</h1>
			<ul class='heroes'>
				<li *ngFor='let hero of heroes' [class.selected]="hero === selectedHero" (click)="onSelect(hero)">
					<span class="badge">{{hero.id}}</span> {{hero.name}}
				</li>
			</ul>
			<my-hero-detail [hero]="selectedHero"></my-hero-detail>
			

	`,

	styles: [`
	  .selected {
	    background-color: #CFD8DC !important;
	    color: white;
	  }
	  .heroes {
	    margin: 0 0 2em 0;
	    list-style-type: none;
	    padding: 0;
	    width: 15em;
	  }
	  .heroes li {
	    cursor: pointer;
	    position: relative;
	    left: 0;
	    background-color: #EEE;
	    margin: .5em;
	    padding: .3em 0;
	    height: 1.6em;
	    border-radius: 4px;
	  }
	  .heroes li.selected:hover {
	    background-color: #BBD8DC !important;
	    color: white;
	  }
	  .heroes li:hover {
	    color: #607D8B;
	    background-color: #DDD;
	    left: .1em;
	  }
	  .heroes .text {
	    position: relative;
	    top: -3px;
	  }
	  .heroes .badge {
	    display: inline-block;
	    font-size: small;
	    color: white;
	    padding: 0.8em 0.7em 0 0.7em;
	    background-color: #607D8B;
	    line-height: 1em;
	    position: relative;
	    left: -1px;
	    top: -4px;
	    height: 1.8em;
	    margin-right: .8em;
	    border-radius: 4px 0 0 4px;
	  }
	`],

	// tels angular that he have to use this component too
	directives: [HeroDetailComponent],
})


export class HeroesComponent implements OnInit{
	
	// proprerties 

	title = 'Tour of heroes';

	selectedHero: Hero;

	// public heroes = HEROES;

	// initialyse an empty heroes list
	heroes: Hero[];


	
	// methods
	ngOnInit() {
		this.getHeroes();
	}
	constructor(private heroService: HeroService) { }

	// setters
	onSelect(hero: Hero){
		this.selectedHero = hero;
	}

	getHeroes() {
		this.heroService.getHeroes().then(
			heroes => this.heroes = heroes
		);
	}


	// getters

}
