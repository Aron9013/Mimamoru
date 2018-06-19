import { Component, OnInit } from '@angular/core';
import { Character } from '../character';
import { CharacterService } from '../character.service';

@Component({
    selector: 'app-characters',
    templateUrl: './characters.component.html',
    styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

    characters: Character[];

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
