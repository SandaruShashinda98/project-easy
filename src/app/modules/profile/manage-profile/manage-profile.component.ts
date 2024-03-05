import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IBuyerRequest, User } from 'src/app/models/user.model';
import { StateManageService } from 'src/app/services/state-manage.service';
import { ProfileService } from '../profile.service';
import { UserService } from 'src/app/services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-manage-profile',
  templateUrl: './manage-profile.component.html',
  styleUrls: ['./manage-profile.component.scss'],
})
export class ManageProfileComponent implements OnInit {
  permissionType = 'SELLER';
  userId: any;
  isBuyerDataExists = false;

  basicForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
  });

  buyerForm = new FormGroup({
    shoulderWidth: new FormControl(null, Validators.required),
    chestWidth: new FormControl(null, Validators.required),
    belly: new FormControl(null, Validators.required),
    waist: new FormControl(null, Validators.required),
    hip: new FormControl(null, Validators.required),
    armLength: new FormControl(null, Validators.required),
    shoulderToWaist: new FormControl(null, Validators.required),
    waistToKnee: new FormControl(null, Validators.required),
    kneeToToe: new FormControl(null, Validators.required),
  });

  sellerForm = new FormGroup({
    storeName: new FormControl('', Validators.required),
    storeDescription: new FormControl('', Validators.required),
  });

  passwordForm = new FormGroup({
    currentPassword: new FormControl('', Validators.required),
    newPassword: new FormControl('', Validators.required),
    confirmNewPassword: new FormControl('', Validators.required),
  });

  constructor(
    private stateManageService: StateManageService,
    private profileService: ProfileService,
    private userService: UserService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.stateManageService.loggedUserData$.subscribe({
      next: (res) => {
        this.permissionType = res.permissionType;
        this.userId = res._id;
        this.generateExistingData();
      },
    });
  }

  onClickBuyerSubmit() {
    const data = {
      userId: this.userId,
      ...this.buyerForm.value,
    } as unknown as IBuyerRequest;
    if (this.isBuyerDataExists) {
      this.profileService.updateBuyer(data, this.userId).subscribe({
        next: (res: IBuyerRequest) => {
          if (res) {
            this.isBuyerDataExists = true;
            const buyerData = res as any;
            this.snackBar.open('Updated Successfully', 'Dismiss', {
              duration: 3000,
            });
            this.buyerForm.patchValue(buyerData);
          }
        },
      });
    } else {
      this.profileService.createBuyer(data).subscribe({
        next: (res: IBuyerRequest) => {
          if (res) {
            this.isBuyerDataExists = true;
            const buyerData = res as any;
            this.snackBar.open('Updated Successfully', 'Dismiss', {
              duration: 3000,
            });
            this.buyerForm.patchValue(buyerData);
          }
        },
      });
    }
  }

  onClickSellerSubmit() {
    const data = {
      ...this.sellerForm.value,
      _id: this.userId,
    } as User;
    this.userService.updateUser(data, this.userId).subscribe({
      next: (res) => {
        this.snackBar.open('Updated Successfully', 'Dismiss', {
          duration: 3000,
        });
      },
    });
  }

  onClickBasicSubmit() {
    const data = {
       ...this.basicForm.value,
      _id: this.userId,
    } as User;

    this.userService.updateUser(data, this.userId).subscribe({
      next: (res) => {
        this.snackBar.open('Updated Successfully', 'Dismiss', {
          duration: 3000,
        });
      },
    });
  }

  onClickPasswordSubmit() {
    const data = {
      currentPassword: this.passwordForm.controls.currentPassword.value,
      newPassword: this.passwordForm.controls.newPassword.value,
    } 

    this.userService.updatePassword(data, this.userId).subscribe({
      next: (res) => {
        this.snackBar.open('Updated Successfully', 'Dismiss', {
          duration: 3000,
        });
      },
      error: (error:any) => {
        if (error.error.message === 'Current password is incorrect') {
          // Show a snackBar for invalid credentials
          this.snackBar.open('Current password is incorrect.', 'Dismiss', {
            duration: 3000,
          });
        }  else {
          // Show a generic snackBar for other errors
          this.snackBar.open('An error occurred', 'Dismiss', {
            duration: 3000,
          });
        }

      },
    });
  }

  generateExistingData() {
    this.userService.getUser(this.userId).subscribe({
      next: (res: User) => {
        this.basicForm.patchValue(res);
        if (
          this.permissionType === 'SELLER' &&
          res.storeDescription &&
          res.storeName
        ) {
          this.sellerForm.controls.storeDescription.setValue(
            res.storeDescription.toString()
          );
          this.sellerForm.controls.storeName.setValue(res.storeName.toString());
        }
      },
    });

    if (this.permissionType === 'BUYER') {
      this.profileService.getSingleBuyer(this.userId).subscribe({
        next: (res: IBuyerRequest) => {
          if (res) {
            this.isBuyerDataExists = true;
            const buyerData = res as any;
            this.buyerForm.patchValue(buyerData);
          }
        },
      });
    }
  }
}
