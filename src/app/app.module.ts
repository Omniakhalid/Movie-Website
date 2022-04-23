import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TvshowsComponent } from './components/tvshows/tvshows.component';
import { PeopleComponent } from './components/people/people.component';
import { MoviesComponent } from './components/movies/movies.component';
import { AboutComponent } from './components/about/about.component';
import { NetworksComponent } from './components/networks/networks.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { DetailsComponent } from './components/details/details.component';
import {HttpClientModule} from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TvshowsComponent,
    PeopleComponent,
    MoviesComponent,
    AboutComponent,
    NetworksComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    NotfoundComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
