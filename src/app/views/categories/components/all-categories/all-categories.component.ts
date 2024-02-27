import { Component, OnInit } from '@angular/core';
import { log } from 'console';
import { CategoryService } from '../../categories-service';

@Component({
  selector: 'app-all-categories',
  templateUrl: './all-categories.component.html',
  styleUrls: ['./all-categories.component.css']
})
export class AllCategoriesComponent implements OnInit {
  categoryList:any = []
  deleteCategoryModal:boolean = false
  clickedCategoryData:any
  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.fetchCategories()
  }
  fetchCategories() {
    this.categoryList = this.categoryService.getCategories();
  }


  deleteCategory(item:any){
    this.clickedCategoryData = item
    this.deleteCategoryModal = true
  }

  deleteCategoryFromTable(categoryId: number) {
    this.categoryService.deleteCategory(categoryId);
    this.fetchCategories();
    window.alert('Category deleted, Click ok to see all categories')
    this.deleteCategoryModal = false
  }

  closeDeleteCategoryModal(){
    this.deleteCategoryModal = false
  }


}