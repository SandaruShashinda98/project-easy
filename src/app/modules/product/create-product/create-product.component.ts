import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { IBodyCategoryRequest, IProductRequest } from 'src/app/models/user.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { StateManageService } from 'src/app/services/state-manage.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss'],
})
export class CreateProductComponent {
  max_size = 2; // mb
  files: File[] = [];
  multiple = false;

  userId: any;

  productForm = new FormGroup({
    brand: new FormControl(null, Validators.required),
    gender: new FormControl(null, Validators.required),
    description: new FormControl(null, Validators.required),
    availableCount: new FormControl(null, Validators.required),
    // imageUrl: new FormControl(null, Validators.required),

    bodyArea: new FormControl(null),
    shoulderWidth: new FormControl(null),
    chestWidth: new FormControl(null),
    belly: new FormControl(null),
    waist: new FormControl(null),
    hip: new FormControl(null),
    armLength: new FormControl(null),
    shoulderToWaist: new FormControl(null),
    waistToKnee: new FormControl(null),
    kneeToToe: new FormControl(null),

    bodyType: new FormControl('XL', Validators.required), //TODO: from ML
  });

  constructor(
    private productService: ProductService,
    private snackBar: MatSnackBar,
    private stateManageService: StateManageService
  ) {
    this.stateManageService.loggedUserData$.subscribe({
      next: (res) => {
        this.userId = res._id;
      },
    });
  }

  onClickItemSubmit() {
    const item = {
      ...this.productForm.value,
      userId: this.userId,
    } as IProductRequest;
    this.productService.createItem(item).subscribe({
      next: (res: IProductRequest) => {
        console.log(res);
        this.snackBar.open('Product Added Successfully', 'Dismiss', {
          duration: 3000,
        });
      },
    });
  }

  onUpload(event: any) {
    if (this.files && this.files.length >= 1 && !this.multiple) {
      this.onRemove(this.files[0]);
    }
    this.files.push(...event.addedFiles);

    for (const element of this.files) {
      if (element.size > this.max_size * 1024 * 1024) {
        this.snackBar.open('File size should be less than 2MB.', 'Dismiss', {
          duration: 3000,
        });
        this.onRemove(element);
      } else if (element.size == 0) {
        this.snackBar.open('Failed to upload image.', 'Dismiss', {
          duration: 3000,
        });
        this.onRemove(element);
      } else {
        // this.fileSubmitted.emit(this.files[0]);
      }
    }
  }

  onRemove(event: any) {
    this.files.splice(this.files.indexOf(event), 1);
  }

  removeAllFiles() {
    this.files = [];
  }

  getBodyCategory() {
    const bodyData = {
      'shoulderWidth':  [this.productForm.controls.shoulderWidth.value],
      'chestWidth':  [this.productForm.controls.chestWidth.value],
      'belly':  [this.productForm.controls.belly.value],
      'waist':  [this.productForm.controls.waist.value],
      'hip':  [this.productForm.controls.hip.value],
      'armLength':  [this.productForm.controls.armLength.value],
      'shoulderToWaist':  [this.productForm.controls.shoulderToWaist.value],
      'waistToKnee': [this.productForm.controls.waistToKnee.value],
      'kneeToToe':  [this.productForm.controls.kneeToToe.value],
    } 
    if (this.productForm.controls.gender.value === 'MALE') {
      this.productService.getBodyCategoryMale(bodyData).subscribe({
        next: (res) => {
          this.productForm.controls.bodyType.setValue(res.category)
        },
        error: (err) => {
          this.snackBar.open('Something went wrong', 'Dismiss', {
            duration: 3000,
          });
        },
      });
    }else if(this.productForm.controls.gender.value === 'FEMALE'){
      this.productService.getBodyCategoryFemale(bodyData).subscribe({
        next: (res) => {
          this.productForm.controls.bodyType.setValue(res.category)
        },
        error: (err) => {
          this.snackBar.open('Something went wrong', 'Dismiss', {
            duration: 3000,
          });
        },
      });
    }
  }
}
