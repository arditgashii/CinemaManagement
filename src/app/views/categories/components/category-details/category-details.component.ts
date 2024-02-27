import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../categories-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit {
  categoryDetails:any
  categoryId:any
  constructor(
    private categoryService:CategoryService,
    private router:ActivatedRoute) {
      this.router.queryParams.subscribe(params => {
        this.categoryId = params['categoryId'];
      });

  }
              

  ngOnInit(): void {
    this.fetchCategoryDetails()
  }

  fetchCategoryDetails() {
    this.categoryDetails = this.categoryService.getCategoryById(JSON.parse(this.categoryId))
  }
}
