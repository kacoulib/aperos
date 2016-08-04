import { Component } from '@angular/core';
import { AperoService } from '../services/front/apero.service';
// import { HTTP_PROVIDERS } from '@angular/http';
import 'rxjs/add/operator/map';

import { Apero } from '../../apero';
import { ROUTER_DIRECTIVES }  from '@angular/router';

import { SearchComponent } from "./front/search.component";
import { SidebarComponent } from "./front/sidebar.component";
import {HomeComponent} from "./front/home.component";

@Component({
    selector: 'my-app',
    templateUrl: 'app/components/app.component.html',
    styleUrls: ['app/components/front/app.component.css'],
    providers: [AperoService],
    directives : [ROUTER_DIRECTIVES, SearchComponent, SidebarComponent, HomeComponent]
})

export class AppComponent {
    aperos : Apero[];
    errors : String;

    constructor(private aperoService: AperoService){
        this.aperos = aperoService.getAperos();
        // console.log(this.aperoService.getAperos().aperos)
        // this.aperos = this.aperoService.getAperos().aperos;
        // this.aperoService.getAperos()
        //     .then(
        //         data=>this.datas = JSON.stringify(data),
        //         error => this.errors = error
        //     );

    }

}