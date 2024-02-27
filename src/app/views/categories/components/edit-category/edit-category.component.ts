import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../../categories-service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {
  editCategoryForm:any = FormGroup
  categoryDetails:any
  categoryId:any
  constructor(private route:ActivatedRoute, 
    private categoryService:CategoryService,
    private router:Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.categoryId = params['categoryId'];
    });
    this.editCategoryForm = new FormGroup({
      categoryName: new FormControl('', Validators.required)
    });
    this.fetchCategoryDetails()
  }

  fetchCategoryDetails() {
    this.categoryDetails = this.categoryService.getCategoryById(JSON.parse(this.categoryId));
    this.fillInputs()
  }

  fillInputs() {
    this.editCategoryForm.get('categoryName')?.setValue(this.categoryDetails.categoryName);
  }

  onSubmit() {
    if (this.editCategoryForm.valid) {
      try {
        let payload = {
          id:JSON.parse(this.categoryId),
          categoryName:this.editCategoryForm.value.categoryName,
        }

        this.categoryService.updateCategory(payload);
        this.editCategoryForm.reset();
        window.alert('Category edited. Clicl ok to see all categories.')
        this.router.navigateByUrl('/all-categories');
      }
      catch (error:any) {
        console.error('Error editing category:', error);
        window.alert('Failed to edit category. Please try again.');
      }
    }
  }

}