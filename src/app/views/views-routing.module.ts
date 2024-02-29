import { Routes, RouterModule } from "@angular/router";
import { ViewsComponent } from "./views.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomepageComponent } from '../homepage/homepage.component';
import { AllCategoriesComponent } from './categories/components/all-categories/all-categories.component'; // Import the component

const routes: Routes = [
    {
        path: '', component: ViewsComponent, children: [
            { path: '', loadChildren: () => import('./categories/categories.module').then(m => m.CategoriesModule) },
            { path: 'movies', loadChildren: () => import('./movies/movies.module').then(m => m.MoviesModule) },
            { path: 'dashboard', component: DashboardComponent, children: [
                // Use the component directly, not .module
                { path: 'all-categories', component: AllCategoriesComponent },
            ] },
            { path: 'homepage', component: HomepageComponent },
            { path: '', redirectTo: '/homepage', pathMatch: 'full' },
        ]
    },
];

export const ViewsRoutingModule = RouterModule.forChild(routes);
