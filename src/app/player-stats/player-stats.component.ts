import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-player-stats',
    templateUrl: './player-stats.component.html',
    styleUrls: ['./player-stats.component.scss']
})
export class PlayerStatsComponent implements OnInit {
    private _httpClient: HttpClient;

    constructor(httpClient: HttpClient) {
        this._httpClient = httpClient;
    }

    ngOnInit() {
        const battleTag = 'Xiso-21945';
        const platform = 'psn';
        const region = 'eu';

        this._httpClient.get<any>(`https://ow-api.com/v1/stats/${platform}/${region}/${battleTag}/profile`).subscribe((data) => {
            console.log(data);
        });
    }

}
