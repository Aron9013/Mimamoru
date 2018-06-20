import { Injectable } from '@angular/core';
import { Map, GameMode } from '../maps/map-template';
import { MAPS, GAMEMODES } from '../maps/map-data';
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

    getGameModes(): Observable<GameMode[]> {
        return of(GAMEMODES);
    }

}