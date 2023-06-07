import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { AssetsService } from '../assets.service';

import { MatSnackBar } from '@angular/material/snack-bar';
import { Assets } from '../models/assets.model';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable, map, startWith } from 'rxjs';
import { AssetsService } from '../assets.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-assets.component.html',
  styleUrls: ['./add-assets.component.scss'],
})
export class AddAssestComponent {
  addAssetFormGroup = new FormGroup({
    category: new FormControl('', [Validators.required]),
    brandModel: new FormControl('', [Validators.required]),
    reciever: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    issueDate: new FormControl('', [Validators.required]),
  });
  constructor(
    private assetsService: AssetsService,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<AddAssestComponent>
  ) {}

  onSaveAsset() {
    const postData = {
      idNo: '10',
      category: this.addAssetFormGroup.value.category,
      brandModel: this.addAssetFormGroup.value.brandModel,
      reciever: this.addAssetFormGroup.value.reciever,
      description: this.addAssetFormGroup.value.description,
      issueDate: this.addAssetFormGroup.value.issueDate,
    };
    this.assetsService.addAssets(postData as Assets).subscribe((res) => {
      console.log(res);
      // this.dialogRef.close(postData as Assets);
      // this.snackBar.open('Item added Successfully', 'Dismiss', {
      //   duration: 3000,
      // });
    });
  }
  // generateUniqueId() {
  //   let newId: string;
  //   let idExists: boolean;
  //   let existData: string[] = [];

  //   this.assetsService.getAssests().subscribe((res) => {
  //     res.forEach((assets) => existData.push('assets.idNo'));
  //   });

  // }

  // function constructor() {
  //   throw new Error('Function not implemented.');
}
