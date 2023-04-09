import { FilterMovieComponent } from './movies/filter-movie/filter-movie.component';
import { EditMovieComponent } from './movies/edit-movie/edit-movie.component';
import { EditMovieTheatersComponent } from './movie-theaters/edit-movie-theaters/edit-movie-theaters.component';
import { EditGenresComponent } from './genres/edit-genres/edit-genres.component';
import { EditActorComponent } from './actors/edit-actor/edit-actor.component';
import { CreateMovieComponent } from './movies/create-movie/create-movie.component';
import { CreateMovieThearerComponent } from './movie-theaters/create-movie-thearer/create-movie-thearer.component';
import { IndexMovieThearerComponent } from './movie-theaters/index-movie-thearer/index-movie-thearer.component';
import { CreateActorsComponent } from './actors/create-actors/create-actors.component';
import { IndexActorsComponent } from './actors/index-actors/index-actors.component';
import { CreateGenreComponent } from './genres/create-genre/create-genre.component';
import { IndexGeneresComponent } from './genres/index-generes/index-generes.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component:HomeComponent},
  
  {path:'genres', component:IndexGeneresComponent},
  {path:'genres/create', component:CreateGenreComponent},
  {path:'genres/edit/:id', component:EditGenresComponent},

  {path:'actors', component:IndexActorsComponent},
  {path:'actors/create', component:CreateActorsComponent},
  {path:'actors/edit/:id', component:EditActorComponent},

  {path:'moviestheaters', component:IndexMovieThearerComponent},
  {path:'moviestheaters/create', component:CreateMovieThearerComponent}, 
  {path:'moviestheaters/edit/:id', component:EditMovieTheatersComponent},

  {path:'movies/create', component:CreateMovieComponent},
  {path:'movies/edit/:id', component:EditMovieComponent},
  {path:'movies/filter', component:FilterMovieComponent},

  {path:'**', redirectTo: '/'},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
