import { Component, Injectable } from '@angular/core';

import { AperoService } from '../../services/front/apero.service';

import { Apero } from '../../../apero';

import { APEROS } from '../../mocks/index';
import {ROUTER_DIRECTIVES} from "@angular/router";



@Component({
    selector: 'my-search',
    templateUrl: 'app/components/front/search.component.html',
    providers: [AperoService],
})

@Injectable()
export class SearchComponent {
    aperos : Apero[];
    constructor(private aperoService : AperoService) {
        this.aperos = this.aperoService.getAperos();
    }

    list() {
        // return this.http.get('/').map(res => res.json());
    }

}