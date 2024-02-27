import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewsComponent } from './views.component';
import { ViewsRoutingModule } from './views-routing.module';
import { RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';



@NgModule({
  declarations: [
    ViewsComponent,
    HomepageComponent
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    RouterModule
  ]
})
export class ViewsModule { }
