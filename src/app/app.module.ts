import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { CharactersComponent } from './characters/characters.component';
import { MapsComponent } from './maps/maps.component';
import { PlayerStatsComponent } from './player-stats/player-stats.component';
import { ErrorComponent } from './error/error.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CharacterInfoComponent } from './character-info/character-info.component';
import { CharacterService } from './character.service';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        HomePageComponent,
        CharactersComponent,
        MapsComponent,
        PlayerStatsComponent,
        ErrorComponent,
        NavigationComponent,
        CharacterInfoComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule
    ],
    providers: [
        CharacterService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
