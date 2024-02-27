import { RouterModule, Routes } from "@angular/router";
import { CategoriesComponent } from "./categories.component";
import { AllCategoriesComponent } from "./components/all-categories/all-categories.component";
import { CreateCategoryComponent } from "./components/create-category/create-category.component";
import { EditCategoryComponent } from "./components/edit-category/edit-category.component";
import { CategoryDetailsComponent } from "./components/category-details/category-details.component";



const routes: Routes = [
  {
    path: '', component: CategoriesComponent, children: [
    {path:'all-categories',component:AllCategoriesComponent},
    {path:'create-category',component:CreateCategoryComponent},
    {path:'edit-category/:id',component:EditCategoryComponent},
    {path:'category-details/:id',component:CategoryDetailsComponent}
    ]
  }
];
export const CategoriesRoutingModule = RouterModule.forChild(routes);
