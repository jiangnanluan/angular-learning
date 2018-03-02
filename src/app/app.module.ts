import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from "./app-routing.module";

import {AppComponent} from './app.component';

import {HeroService} from './hero/hero.service';
import {HeroesComponent} from "./hero/heroes.component";
import {DashboardComponent} from "./hero/dashboard.component";
import {HeroDetailComponent} from './hero/hero-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
