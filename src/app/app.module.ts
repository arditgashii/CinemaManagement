import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { MoviesModule } from './views/movies/movies.module';
import { CategoriesModule } from './views/categories/categories.module';
import { HomepageComponent } from './homepage/homepage.component';  // Add this line

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    MoviesModule,
    CategoriesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }