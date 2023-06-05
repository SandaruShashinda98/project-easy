import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AssetsService } from '../assets.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Assets } from '../models/assets.model';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable, map, startWith } from 'rxjs';

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
}
