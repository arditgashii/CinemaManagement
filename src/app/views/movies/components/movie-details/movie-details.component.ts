import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../movies-service';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/views/categories/categories-service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movieDetails:any
  categoryDetails:any
  movieId:any
  constructor(
    private movieService:MovieService,
    private categoryService:CategoryService,
    private router:ActivatedRoute) {
      this.router.queryParams.subscribe(params => {
        this.movieId = params['movieId'];
      });

  }
              

  ngOnInit(): void {
    this.fetchMovieDetails()
  }

  fetchMovieDetails() {
    this.movieDetails = this.movieService.getMovieById(JSON.parse(this.movieId))
    this.categoryDetails = this.categoryService.getCategoryById(JSON.parse(this.movieId))
  }
}
