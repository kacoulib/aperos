import { Injectable }     from '@angular/core';
import { NgForm }    from '@angular/forms';
import { Observable }     from 'rxjs/Observable';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/operator';

import { Apero } from '../../../apero';
import { Category } from '../../../category';

import { APEROS, CATEGORIES } from '../../mocks/index';

@Injectable()
export class AperoService{

    aperos : Apero[];
    categories : Category[];
    private heroesUrl = 'http://localhost/laravel/aperos/public/';  // URL to web API

    constructor(private http: Http) {

        this.http.get(this.heroesUrl).subscribe(data => console.log(data));
    }

    getAperos (){
        this.aperos = APEROS;
        return this.aperos;
    }

    getCategories (){
        this.categories = CATEGORIES;
        return this.categories;
    }

    create(param){
        return console.log(param)
        // this.aperos.push(pra);
    }
}