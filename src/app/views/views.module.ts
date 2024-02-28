import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewsComponent } from './views.component';
import { ViewsRoutingModule } from './views-routing.module';
import { HomepageComponent } from '../homepage/homepage.component';


@NgModule({
  declarations: [
    ViewsComponent,
    HomepageComponent,
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule,
  ]
})
export class ViewsModule { }
