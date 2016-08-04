import { Component, Injectable } from '@angular/core';

import {Apero} from "../../../apero";
import {AperoService} from "../../services/front/apero.service";

@Component({
    selector : 'my-sidebar',
    templateUrl : 'app/components/front/sidebar.component.html',
    styleUrls : ['app/components/front/sidebar.component.css']
})

@Injectable()
export class SidebarComponent{
    aperos : Apero;
    constructor(private aperoService : AperoService){
    }
}