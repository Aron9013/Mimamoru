import { Component, OnInit } from '@angular/core';
import { MapService } from '../services/map.service';
import { Map, GameMode } from './map-template';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {

    maps: Map[];
    gameModes: GameMode[];
    private _mapService: MapService;

    constructor(mapService: MapService) {
        this._mapService = mapService;
    }

    ngOnInit() {
        this.getMaps();
        this.getGameModes();
    }

    getMaps(): void {
        this._mapService.getMaps()
            .subscribe(maps => this.maps = maps);
    }

    getGameModes(): void {
        this._mapService.getGameModes()
            .subscribe(gameModes => this.gameModes = gameModes);
    }

}
