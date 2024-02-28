import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { MoviesModule } from './views/movies/movies.module';
import { CategoriesModule } from './views/categories/categories.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent, // Add this line
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MoviesModule,
    CategoriesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }