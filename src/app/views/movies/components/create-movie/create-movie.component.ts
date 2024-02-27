import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MovieService } from '../../movies-service';
import { CategoryService } from 'src/app/views/categories/categories-service';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent implements OnInit {

  createMovieForm!: FormGroup;
  categoryList: any[] = [];

  constructor(
    private movieService:MovieService,
    private categoryService: CategoryService,
    private router:Router
  ) { }

  ngOnInit() {
    this.createMovieForm = new FormGroup({
      title: new FormControl('', Validators.required),
      categoryId: new FormControl('', Validators.required),
      imageUrl: new FormControl('', Validators.required),
      paragraph: new FormControl('', Validators.required),
    });

    this.categoryList = this.categoryService.getCategories();
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
        const base64Data = reader.result as string;
        this.createMovieForm.patchValue({ imageUrl: base64Data });
    };
    reader.readAsDataURL(file);
}

  onSubmit() {
    if (this.createMovieForm.valid) {
        try {
            const movieData = { ...this.createMovieForm.value };
            const categoryId = +movieData.categoryId;
            const imageUrl = movieData.imageUrl;
            const paragraph = movieData.paragraph.toString();
            

            delete movieData.categoryId;
            delete movieData.imageUrl;

            this.movieService.addMovie(movieData, categoryId, imageUrl, paragraph);
            this.createMovieForm.reset();
            window.alert('Movie created. Click OK to see all movies.');
            this.router.navigateByUrl('movies/all-movies');
        } catch (error:any) {
            if (error.message === 'A movie with these details alreadt exists') {
                window.alert('A movie with these details already exists. Please check your input.')
            } else {
                console.log('Error creating movie:', error);
                window.alert('Failed to create movie. Please try again.');
            }
        }
    } else {
        window.alert('Form is not valid. Please check your input.');
    }
}

}