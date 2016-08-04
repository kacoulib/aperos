import { Component } from '@angular/core';

// must be import if we want to use the routers directives
// like : [routerLink], <router-outlet>
import { ROUTER_DIRECTIVES } from '@angular/router';

import { HeroService }     from '../../services/hero.service';

// http
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map'


@Component({

	selector: 'my-app',

	template: `
		<h1>{{title}}</h1>
		<nav>
			<a [routerLink]="['/dashboard']" routerLinkActive="active">Dashboard</a>
			<a [routerLink]="['/heroes']" routerLinkActive="active">Heroes</a>
		</nav>
		<router-outlet></router-outlet>
		<ul>
			<li >{{date}}</li>
		</ul>
	`,


	directives: [ROUTER_DIRECTIVES],

	// tels angular to create an new instance of the below service
	// when he create new AppComponent
	providers: [HeroService]
})


export class AppComponent {
  title = 'Tour of Heroes';
  dates;
  constructor(http: Http) {
    let headers = new Headers({ 'Content-Type': 'Content-Type' });
    let options = new RequestOptions({ headers: headers });

  	// return console.log(http)
    http.get('http://localhost/laravel/aperos/public/')
      // Call map on the response observable to get the parsed people object
      .map(res => {
      	res.json();
      	console.log(res)
      })
      // Subscribe to the observable to get the parsed people object and attach it to the
      // component
      .subscribe(date => this.dates = date);
  }

}

