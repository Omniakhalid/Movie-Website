import { DetailsComponent } from './components/details/details.component';
import { AuthGuardService } from './services/auth-guard.service';
import { MoviesComponent } from './components/movies/movies.component';
import { TvshowsComponent } from './components/tvshows/tvshows.component';
import { PeopleComponent } from './components/people/people.component';
import { AboutComponent } from './components/about/about.component';
import { NetworksComponent } from './components/networks/networks.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",component:HomeComponent,canActivate:[AuthGuardService]},
  {path:"movies",component:MoviesComponent,canActivate:[AuthGuardService]},
  {path:"tvshows",component:TvshowsComponent,canActivate:[AuthGuardService]},
  {path:"people",component:PeopleComponent,canActivate:[AuthGuardService]},
  {path:"details/:type/:id",component:DetailsComponent,canActivate:[AuthGuardService]},
  {path:"about",component:AboutComponent},
  {path:"networks",component:NetworksComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"**",component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
