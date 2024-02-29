import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MovieSharedService {
  private movieList: any[] = [];

  getMovies(): any[] {
    console.log('Movies from MovieSharedService:', this.movieList);
    return this.movieList;
  }

  setMovies(movies: any[]): void {
    this.movieList = movies;
  }
}
