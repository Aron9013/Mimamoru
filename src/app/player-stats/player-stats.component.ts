import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-player-stats',
    templateUrl: './player-stats.component.html',
    styleUrls: ['./player-stats.component.scss']
})
export class PlayerStatsComponent implements OnInit {
    private _httpClient: HttpClient;

    @Input() tag;
    @Input() platform = 'pc';
    @Input() region = 'us';

    constructor(httpClient: HttpClient) {
        this._httpClient = httpClient;
    }

    ngOnInit() {
        // this._httpClient.get<any>(`http://ow-api.herokuapp.com/stats/${platform}/${region}/${tag}`).subscribe((data) => {
        //     console.log('stats', data);
        // });
    }

    getStats(): void {
        this._httpClient.get<any>(`https://owapi.net/api/v3/u/${this.tag}/stats?platform=${this.platform}`).subscribe((data) => {
            console.log('stats', data);
        });
    }

    getHeroStats(): void {
        this._httpClient.get<any>(`https://owapi.net/api/v3/u/${this.tag}/heroes?platform=${this.platform}`).subscribe((data) => {
            console.log('hero', data);
            console.log('dva', data.any.heroes.stats.competitive.dva);
        });
    }

    // https://github.com/Fuyukai/OWAPI
    // https://ow-api.herokuapp.com/docs/
    // https://ow-api.com/docs/#introduction  <-- doesn't seem to get any stats out?

}
