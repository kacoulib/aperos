import { Component, Injectable  } from '@angular/core';

import { Http } from '@angular/http';

@Injectable()
export class RaceService {

    constructor(private http: Http) {
    }

    list() {
        return this.http.get(`${baseUrl}/`).map(res => res.json());
    }

}