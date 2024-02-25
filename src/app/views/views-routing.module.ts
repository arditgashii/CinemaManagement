import { Routes, RouterModule } from "@angular/router";
import { ViewsComponent } from "./views.component";




const routes: Routes = [
    { path: '', component: ViewsComponent, children: [
     { path: '', loadChildren: () => import('./categories/categories.module').then(m => m.CategoriesModule) },
     { path: '', loadChildren: () => import('./movies/movies.module').then(m => m.MoviesModule) },
    ]
    }
  
];
export const ViewsRoutingModule = RouterModule.forChild(routes);
