import { Component, Injectable } from '@angular/core';

// import { Http, Response } from '@angular/http';

import { AperoService } from '../../services/front/apero.service';
import {Apero} from "../../../apero";

@Component({
    selector: 'my-home',
    templateUrl: 'app/components/front/home.component.html',
})

@Injectable()
export class HomeComponent {
    aperos : Apero[];

    constructor(private apreoService: AperoService) {
        this.aperos = this.apreoService.getAperos();
        // this.aperos = this.aperoService.getAperos();
    }

    list() {
        // return this.http.get('/').map(res => res.json());
    }

}