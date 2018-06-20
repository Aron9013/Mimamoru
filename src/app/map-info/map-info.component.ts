import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { MapService } from '../services/map.service';
import { Map } from '../maps/map-template';

@Component({
    selector: 'app-map-info',
    templateUrl: './map-info.component.html',
    styleUrls: ['./map-info.component.scss']
})
export class MapInfoComponent implements OnInit {
    map: Map;
    private _route: ActivatedRoute;
    private _location: Location;
    private _mapService: MapService;

    constructor(route: ActivatedRoute, location: Location, mapService: MapService) {
        this._route = route;
        this._location = location;
        this._mapService = mapService;
    }

    ngOnInit() {
        this.getCharacter();
    }

    getCharacter(): void {
        const id = this._route.snapshot.paramMap.get('id');
        this._mapService.getMap(id)
            .subscribe(map => this.map = map);
    }

}
