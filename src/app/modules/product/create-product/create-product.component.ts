import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { IProductRequest } from 'src/app/models/user.model';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent {
  productForm = new FormGroup({
    brand:new FormControl(null, Validators.required),
    gender:new FormControl(null, Validators.required),
    description: new FormControl(null, Validators.required),
    availableCount:new FormControl(null, Validators.required),
    imageUrl: new FormControl(null, Validators.required),

    bodyArea: new FormControl(null),
    shoulderWidth:new FormControl(null),
    chestWidth:new FormControl(null),
    belly: new FormControl(null),
    waist: new FormControl(null),
    hip: new FormControl(null),
    armLength: new FormControl(null),
    shoulderToWaist: new FormControl(null),
    waistToKnee: new FormControl(null),
    kneeToToe: new FormControl(null),

    bodyType: new FormControl(null, Validators.required),
  });

  constructor(private productService: ProductService){
    //
  }

  onClickItemSubmit(){
    const item = this.productForm.value as IProductRequest
    this.productService.createItem(item).subscribe({
      next: (res:IProductRequest)=>{
        //
      }
    })
  }
}
