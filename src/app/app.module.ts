import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { GenericListComponent } from './utilities/generic-list/generic-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MenusComponent } from './menus/menus.component';
import { RatingComponent } from './utilities/rating/rating.component';
import { LifeCycleTestComponent } from './life-cycle-test/life-cycle-test.component';
import { HomeComponent } from './home/home.component';
import { IndexGeneresComponent } from './genres/index-generes/index-generes.component';
import { CreateGenreComponent } from './genres/create-genre/create-genre.component';
import { IndexActorsComponent } from './actors/index-actors/index-actors.component';
import { CreateActorsComponent } from './actors/create-actors/create-actors.component';
import { IndexMovieThearerComponent } from './movie-theaters/index-movie-thearer/index-movie-thearer.component';
import { CreateMovieThearerComponent } from './movie-theaters/create-movie-thearer/create-movie-thearer.component';
import { CreateMovieComponent } from './movies/create-movie/create-movie.component';
import { EditActorComponent } from './actors/edit-actor/edit-actor.component';
import { EditGenresComponent } from './genres/edit-genres/edit-genres.component';
import { EditMovieTheatersComponent } from './movie-theaters/edit-movie-theaters/edit-movie-theaters.component';
import { EditMovieComponent } from './movies/edit-movie/edit-movie.component';
import{ReactiveFormsModule, FormsModule} from '@angular/forms';
import{MarkdownModule} from 'ngx-markdown';

import {LeafletModule} from '@asymmetrik/ngx-leaflet'
//import "leaflet/dist/images/marker-shadow.png";
import { FormGenreComponent } from './genres/form-genre/form-genre.component';
import { FilterMovieComponent } from './movies/filter-movie/filter-movie.component';
import { FormActorComponent } from './actors/form-actor/form-actor.component';
import { InputImgComponent } from './utilities/input-img/input-img.component';
import { InputMarkdownComponent } from './utilities/input-markdown/input-markdown.component';
import { MovieTheaterFormComponent } from './movie-theaters/movie-theater-form/movie-theater-form.component';
import { MapComponent } from './utilities/map/map.component';
import { FormMovieComponent } from './movies/form-movie/form-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    GenericListComponent,
    MenusComponent,
    RatingComponent,
    LifeCycleTestComponent,
    HomeComponent,
    IndexGeneresComponent,
    CreateGenreComponent,
    IndexActorsComponent,
    CreateActorsComponent,
    IndexMovieThearerComponent,
    CreateMovieThearerComponent,
    CreateMovieComponent,
    EditActorComponent,
    EditGenresComponent,
    EditMovieTheatersComponent,
    EditMovieComponent,
    FormGenreComponent,
    FilterMovieComponent,
    FormActorComponent,
    InputImgComponent,
    InputMarkdownComponent,
    MovieTheaterFormComponent,
    MapComponent,
    FormMovieComponent,
    
    
  ], 
  imports: [
    BrowserModule,   
    AppRoutingModule,
    BrowserAnimationsModule, 
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    LeafletModule,
    MarkdownModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
