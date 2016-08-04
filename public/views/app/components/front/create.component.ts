import { Component, Injectable } from '@angular/core';

// import { Http, Response } from '@angular/http';

import { AperoService } from '../../services/front/apero.service';
import { Apero } from "../../../apero";
import { Category } from "../../../category";

@Component({
    selector: 'my-create',
    templateUrl: 'app/components/front/create.component.html',
})

@Injectable()
export class CreateComponent {
    aperos : Apero[];
    categories: Category[];
    active = true;
    submitted = false;
    onSubmit() {
        this.submitted = true;

    }

    constructor(private aperoService: AperoService) {
        this.categories = this.aperoService.getCategories();
        this.aperos = this.aperoService.getAperos();
        console.log(this.categories)
        // this.aperos = this.aperoService.getAperos();
    }

    createApero(param) {
        console.log(param)
        return param;
        // this.aperoService.create(param);
    }

}