import { Component } from '@angular/core';
import { AperoService } from '../services/front/apero.service';
@Component({
    selector: 'my-app',
    template: `
                <h1>My First Angular 2 App</h1>
                <p> {{data}} </p>
                <p> {{error}} </p>
            `,
    providers: [AperoService]
})
export class AppComponent {
    data : String;
    error : String;

    constructor(private aperoService: AperoService){
        this.aperoService.getAperos().
        subscribe(
            data => this.data = json.stringify(data),
            error => this.error = error,
            () => alert('complit')
        );
    }

}