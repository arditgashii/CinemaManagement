import { Routes, RouterModule } from "@angular/router";
import { ViewsComponent } from "./views.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomepageComponent } from '../homepage/homepage.component';

const routes: Routes = [
    {
      path: '', component: ViewsComponent, children: [
        { path: '', loadChildren: () => import('./categories/categories.module').then(m => m.CategoriesModule) },
        { path: 'movies', loadChildren: () => import('./movies/movies.module').then(m => m.MoviesModule) },
        { path: 'dashboard', component: DashboardComponent },
        { path: 'homepage', component: HomepageComponent },
        { path: '', redirectTo: '/homepage', pathMatch: 'full' },
        
      ]
    },
  ];
  
  export const ViewsRoutingModule = RouterModule.forChild(routes);