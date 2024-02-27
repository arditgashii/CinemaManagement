import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class MovieService {
    private localStorageKey = 'movies';

    constructor() {
        this.initMovies();
    }

    initMovies() {
        if (!localStorage.getItem(this.localStorageKey)) {
            localStorage.setItem(this.localStorageKey, JSON.stringify([]));
        }
    }

    getMovies(): any[] {
        const movies = localStorage.getItem(this.localStorageKey);
        return movies ? JSON.parse(movies) : [];
    }

    addMovie(movie: any, categoryId: number, imageUrl: string, paragraph: string) {
        const movies = this.getMovies();
        const isDuplicate = movies.some(existingMovie =>
            existingMovie.title === movie.title &&
            existingMovie.categoryId === categoryId && 
            existingMovie.imageUrl === imageUrl &&
            existingMovie.paragraph === paragraph
            );

            if (isDuplicate) {
                throw new Error('A movie with these details already exists.');
            }
            movie.id = new Date().getTime();
            movie.categoryId = categoryId;
            movie.imageUrl = imageUrl;
            movie.paragraph = paragraph;
            movies.push(movie);
            localStorage.setItem(this.localStorageKey, JSON.stringify(movies));
    }

    deleteMovie(MovieId: number) {
        let movies = this.getMovies();
        movies = movies.filter(movie => movie.id !== MovieId);
        localStorage.setItem(this.localStorageKey, JSON.stringify(movies));
    }

    getMovieById(MovieId: number, categoryList?: any[]): any {
        console.log('Requested Movie ID:', MovieId);
    
        const movies = this.getMovies();
        console.log('All Movies:', movies);
    
        const movie = movies.find(t => t.id === MovieId);
        console.log('Movie Found:', movie);
    
        if (!movie) {
          console.error(`Movie with ID ${MovieId} not found.`);
          return null; // Return null or handle the error appropriately
        }
    
        if (categoryList) {
          console.log('Category List:', categoryList);
    
          const category = categoryList.find(u => u.id === movie.categoryId);
          console.log('Category Found:', category);
    
          if (category) {
            const MoviewithCategoryName = { ...movie, categoryName: category.categoryName };
            console.log('Movie with Category Name:', MoviewithCategoryName);
            return MoviewithCategoryName;
          } else {
            console.error(`Category with ID ${movie.categoryId} not found.`);
            return movie; // Return category without movie title or handle the error appropriately
          }
        }
      
        return movie;
    }

    updateMovie(updateMovie: any, categoryId: number) {
        let movies = this.getMovies();
        const index = movies.findIndex(movie => movie.id === updateMovie.id);
        if (index !== -1) {
            updateMovie.categoryId = categoryId; // Update categoryId
            movies[index] = updateMovie;
            localStorage.setItem(this.localStorageKey, JSON.stringify(movies));
        }
    }
    
    getMoviesWithoutStatus(): any[] {
        const movies = this.getMovies();
        return movies.map(({ status, ...MovieWithoutStatus }) => MovieWithoutStatus);
      }
}
