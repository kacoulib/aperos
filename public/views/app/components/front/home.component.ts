import { Component, Injectable } from '@angular/core';

// import { Http, Response } from '@angular/http';

import { AperoService } from '../../services/front/apero.service';

@Component({
    selector: 'my-home',
    templateUrl: './home.component.html',
    providers: [AperoService]
})

@Injectable()
export class FrontComponent {

    constructor() {
        console.log(this)
    }

    list() {
        // return this.http.get('/').map(res => res.json());
    }

}