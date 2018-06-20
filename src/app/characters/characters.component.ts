import { Component, OnInit } from '@angular/core';
import { CharacterTemplate } from './character-template';
import { CharacterService } from '../services/character.service';

@Component({
    selector: 'app-characters',
    templateUrl: './characters.component.html',
    styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

    characters: CharacterTemplate[];

    private _characterService: CharacterService;

    constructor(characterService: CharacterService) {
        this._characterService = characterService;
    }

    ngOnInit() {
        this.getCharacters();
    }

    getCharacters(): void {
        this._characterService.getCharacters()
            .subscribe(characters => this.characters = characters);
    }

}
