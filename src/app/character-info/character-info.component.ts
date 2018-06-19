import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { CharacterService } from '../character.service';
import { Character } from '../character';

@Component({
    selector: 'app-character-info',
    templateUrl: './character-info.component.html',
    styleUrls: ['./character-info.component.css']
})
export class CharacterInfoComponent implements OnInit {
    character: Character;
    private _route: ActivatedRoute;
    private _location: Location;
    private _characterService: CharacterService;

    constructor(route: ActivatedRoute, location: Location, characterService: CharacterService) {
        this._route = route;
        this._location = location;
        this._characterService = characterService;
    }

    ngOnInit() {
        this.getCharacter();
    }

    getCharacter(): void {
        const id = this._route.snapshot.paramMap.get('id');
        this._characterService.getCharacter(id)
            .subscribe(character => this.character = character);
    }

}
