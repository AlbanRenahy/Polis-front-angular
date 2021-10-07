import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MapComponent } from './components/map/map.component';
import { LoginComponent } from './components/login/login.component';
import { SigninComponent } from './components/signin/signin.component';
import { LoadingComponent } from './components/loading/loading.component';
import { BurgerNavComponent } from './components/burger-nav/burger-nav.component';
import { MenuComponent } from './components/map/menu/menu.component';
import { RenseignementDonneesComponent } from './components/map/renseignement-donnees/renseignement-donnees.component';
import { ViewTogglerComponent } from './components/view-toggler/view-toggler.component';
import { SuggestionsComponent } from './components/suggestions/suggestions.component';
import { AboutComponent } from './components/about/about.component';
import { AdressSearchComponent } from './components/map/adress-search/adress-search.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    LoginComponent,
    SigninComponent,
    LoadingComponent,
    BurgerNavComponent,
    MenuComponent,
    RenseignementDonneesComponent,
    ViewTogglerComponent,
    SuggestionsComponent,
    AboutComponent,
    AdressSearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GooglePlaceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }