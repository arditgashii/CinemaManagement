import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../../movies-service';
import { CategoryService } from 'src/app/views/categories/categories-service';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {
  editMovieForm: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    categoryId: new FormControl('', Validators.required),
    imageUrl: new FormControl(''),
    paragraph: new FormControl('', Validators.required),
  });

  categoryList: any[] = [];
  movieDetails: any;
  movieId: any;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private categoryService: CategoryService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.movieId = params['movieId'] || 0;
      this.fetchMovieDetails();
    });

    this.categoryList = this.categoryService.getCategories();
  }

  fetchMovieDetails() {
    const movie = this.movieService.getMovieById(this.movieId, this.categoryList);

    if (movie) {
      const category = this.categoryList.find(u => u.id === movie.categoryId);
      movie.categoryTitle = category ? category.categoryName : '';

      this.editMovieForm.patchValue({
        title: movie.title,
        categoryId: movie.categoryId,
        imageUrl: movie.imageUrl,
        paragraph: movie.paragraph,
      });
    } else {
      console.log('Movie not found');
    }
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64Data = reader.result as string;
      this.editMovieForm.patchValue({ imageUrl: base64Data });
    };
    reader.readAsDataURL(file);
  }

  onSubmit() {
    if (this.editMovieForm.valid) {
      try {
        const movieData = { ...this.editMovieForm.value, id: this.movieId };
        const categoryId = movieData.categoryId;
        delete movieData.categoryId;

        this.movieService.updateMovie(movieData, categoryId);
        window.alert('Movie updated. Click OK to see all movies.');
        this.router.navigateByUrl('/movies/all-movies');
      } catch (error: any) {
        console.log('Error updating movie:', error);
        window.alert('Failed to update movie. Please try again.');
      }
    } else {
      window.alert('Form is not valid. Please check your input.');
    }
  }
}
