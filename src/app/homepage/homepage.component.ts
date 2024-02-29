import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../views/movies/movies-service'; // Import the MovieService

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  movieList: any = [];

  constructor(
    private router: Router,
    private movieService: MovieService  // Inject the MovieService
  ) { }

  ngOnInit(): void {
    this.fetchMovies();
  }

  fetchMovies() {
    this.movieList = this.movieService.getMovies();
  }

  navigateToDashboard(): void {
    this.router.navigateByUrl('/dashboard');
  }
}
