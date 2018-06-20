import { Component, OnInit } from '@angular/core';
import { MapService } from '../services/map.service';
import { Map } from './map-template';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {

    maps: Map[];
    private _mapService: MapService;

    constructor(mapService: MapService) {
        this._mapService = mapService;
    }

    ngOnInit() {
        this.getMaps();
    }

    getMaps(): void {
        this._mapService.getMaps()
            .subscribe(maps => this.maps = maps);
    }

}
