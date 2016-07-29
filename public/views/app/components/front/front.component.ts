import { Component, Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';

import { AperoService } from '../../services/front/apero.service';

@Component({
    selector: 'my-wiki',
    template: `
    <h1>Wikipedia Demo</h1>
    <p><i>Fetches after each keystroke</i></p>
    <input #term (keyup)="search(term.value)"/>
    <ul>
      <li *ngFor="let item of items | async">{{item}}</li>
    </ul>
  `,
    providers: [AperoService]
})

@Injectable()
export class FrontComponent {

    constructor(private http: Http) {
    }

    list() {
        return this.http.get('/').map(res => res.json());
    }

}