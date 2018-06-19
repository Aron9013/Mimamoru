import { Injectable } from '@angular/core';
import { Character } from './character';
import { CHARACTERS } from './character-mock';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class CharacterService {

    constructor() {
    }

    getCharacters(): Observable<Character[]> {
        return of(CHARACTERS);
    }

    getCharacter(id: string): Observable<Character> {
        return of(CHARACTERS.find(character => character.id === id));
    }

}