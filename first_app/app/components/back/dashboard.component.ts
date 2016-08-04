import { Component, OnInit } from '@angular/core';
import { Hero } from '../../hero';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/admin/dashboard.component.html'
})

export class DashboardComponent implements OnInit {
	// properties
	heroes: Hero[] = [];
	

	// methods
	constructor(private heroService: HeroService) { }
	

	// setters
	ngOnInit() {
	
		this.heroService.getHeroes().then(
			heroes => this.heroes = heroes.slice(1, 5)
		);
	}


	// getters
	gotoDetail() {
			
	}
}

