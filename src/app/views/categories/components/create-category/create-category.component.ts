import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from '../../categories-service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {

  createCategoryForm:any = FormGroup

  constructor(
    private categoryService:CategoryService,
    private router:Router
  ) { }

  ngOnInit() {
    this.createCategoryForm = new FormGroup({
      categoryName: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    if (this.createCategoryForm.valid) {
      try {
        this.categoryService.addCategory(this.createCategoryForm.value);
        this.createCategoryForm.reset();
        window.alert('Category created. Click OK to see all categories.');
        this.router.navigateByUrl('/all-categories');
      }
      catch (error:any) {
        if (error.message === 'A category with these details alreadt exists') {
          window.alert('A category with these details already exists. Please check your input.')
        } else {
          console.log('Error creating category:', error);
          window.alert('Failed to create category. Please try again.');
        }
      }
    } else {
      window.alert('Form is not valid. Please check your input.');
    }
  }

}