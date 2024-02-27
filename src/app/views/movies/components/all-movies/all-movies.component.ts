import { Component, OnInit } from '@angular/core';
import { log } from 'console';
import { MovieService } from '../../movies-service';
import { CategoryService } from 'src/app/views/categories/categories-service';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.css']
})
export class AllMoviesComponent implements OnInit {
  movieList:any = [];
  categoryList: any[] = [];
  deleteMovieModal:boolean = false
  clickedMovieData:any
  constructor(private movieService:MovieService, private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.fetchMovies();
    this.fetchCategories();
  }
  
  fetchMovies() {
    const movies = this.movieService.getMovies();
    this.categoryList = this.categoryService.getCategories();
  
    this.movieList = movies.map(movie => {
      const category = this.categoryService.getCategoryById(movie.categoryId);
      const updatedMovie = {
        ...movie,
        categoryName: category ? category.categoryName : ''
      };
  
      console.log('Updated Movie:', updatedMovie);
  
      return updatedMovie;
    });
  }

  fetchCategories() {
    this.categoryList = this.categoryService.getCategories();
    console.log('Category List:', this.categoryList);
  }
 

  deleteMovie(item:any){
    this.clickedMovieData = item
    this.deleteMovieModal = true
  }

  deleteMovieFromTable(movieId: number) {
    this.movieService.deleteMovie(movieId);
    this.fetchMovies();
    window.alert('Movie deleted, Click ok to see all movies')
    this.deleteMovieModal = false
  }

  closeDeleteMovieModal(){
    this.deleteMovieModal = false
  }


}
