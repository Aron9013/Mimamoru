import { Injectable } from '@angular/core';
import { CharacterTemplate } from '../characters/character-template';
import { CHARACTERS } from '../characters/character-data';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class CharacterService {

    constructor() {
    }

    getCharacters(): Observable<CharacterTemplate[]> {
        return of(CHARACTERS);
    }

    getCharacter(id: string): Observable<CharacterTemplate> {
        return of(CHARACTERS.find(character => character.id === id));
    }

}