import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { LoginComponent } from './components/login/login.component';
import { MapComponent } from './components/map/map.component';
import { SuggestionsComponent } from './components/suggestions/suggestions.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  {path:"",component: LoginComponent,pathMatch:'full'},
  {path:"login",component: LoginComponent},
  {path:"map",component: MapComponent},
  {path:"signin",component: SigninComponent},
  {path:"suggestions", component: SuggestionsComponent},
  {path:"about", component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }