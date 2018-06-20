import { Injectable } from '@angular/core';
import { Map } from '../maps/map-template';
import { MAPS } from '../maps/map-data';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class MapService {

    constructor() {
    }

    getMaps(): Observable<Map[]> {
        return of(MAPS);
    }

    getMap(id: string): Observable<Map> {
        return of(MAPS.find(map => map.id === id));
    }

}