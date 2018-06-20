import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CharacterService } from './services/character.service';
import { CharactersComponent } from './characters/characters.component';
import { CharacterInfoComponent } from './character-info/character-info.component';
import { MapService } from './services/map.service';
import { MapsComponent } from './maps/maps.component';
import { MapInfoComponent } from './map-info/map-info.component';
import { PlayerStatsComponent } from './player-stats/player-stats.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
    declarations: [
        AppComponent,
        HomePageComponent,
        CharactersComponent,
        MapsComponent,
        PlayerStatsComponent,
        ErrorComponent,
        NavigationComponent,
        CharacterInfoComponent,
        MapInfoComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [
        CharacterService,
        MapService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
