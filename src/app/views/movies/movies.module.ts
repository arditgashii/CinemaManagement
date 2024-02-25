import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { AllMoviesComponent } from './components/all-movies/all-movies.component';
import { CreateMovieComponent } from './components/create-movie/create-movie.component';
import { EditMovieComponent } from './components/edit-movie/edit-movie.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';



@NgModule({
  declarations: [
    MoviesComponent,
    AllMoviesComponent,
    CreateMovieComponent,
    EditMovieComponent,
    MovieDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MoviesModule { }
