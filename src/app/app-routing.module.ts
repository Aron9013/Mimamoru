import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CharactersComponent } from './characters/characters.component';
import { CharacterInfoComponent } from './character-info/character-info.component';
import { MapsComponent } from './maps/maps.component';
import { PlayerStatsComponent } from './player-stats/player-stats.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomePageComponent },
    { path: 'characters', component: CharactersComponent },
    { path: 'characters/:id', component: CharacterInfoComponent },
    { path: 'maps', component: MapsComponent },
    { path: 'player-stats', component: PlayerStatsComponent },
    { path: 'error', component: ErrorComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
