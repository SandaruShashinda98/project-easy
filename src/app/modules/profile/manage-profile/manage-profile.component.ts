import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IBuyerRequest } from 'src/app/models/user.model';
import { StateManageService } from 'src/app/services/state-manage.service';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-manage-profile',
  templateUrl: './manage-profile.component.html',
  styleUrls: ['./manage-profile.component.scss'],
})
export class ManageProfileComponent implements OnInit {
  permissionType = 'SELLER';
  userId: any 
  isBuyerDataExists = false

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
    storeDescription: new FormControl('', Validators.required)
  });

  passwordForm = new FormGroup({
    currentPassword: new FormControl('', Validators.required),
    newPassword: new FormControl('', Validators.required),
    confirmNewPassword: new FormControl('', Validators.required),
  });

  constructor(private stateManageService: StateManageService, private profileService:ProfileService) {
    //
  }

  ngOnInit(): void {
    this.stateManageService.loggedUserData$.subscribe({
      next: (res) => {
        this.permissionType = res.permissionType;
        this.userId = res._id;
        this.generateExistingData()
      }
    });
  }

  onClickBuyerSubmit() {
    const data = {
      userId: this.userId,
      ...this.buyerForm.value
    } as unknown as IBuyerRequest
    if(this.isBuyerDataExists){
      this.profileService.updateBuyer(data,this.userId).subscribe({
        next: (res:IBuyerRequest)=>{
         if(res){
          this.isBuyerDataExists = true
          const buyerData = res as any
          this.buyerForm.patchValue(buyerData)
         }
        }
      })
    }else{
      this.profileService.createBuyer(data).subscribe({
        next: (res:IBuyerRequest)=>{
         if(res){
          this.isBuyerDataExists = true
          const buyerData = res as any
          this.buyerForm.patchValue(buyerData)
         }
        }
      })
    }
  }

  onClickSellerSubmit() {
    //
  }

  generateExistingData(){
    if(this.permissionType === 'BUYER'){
      this.profileService.getSingleBuyer(this.userId).subscribe({
        next: (res:IBuyerRequest)=>{
         if(res){
          this.isBuyerDataExists = true
          const buyerData = res as any
          this.buyerForm.patchValue(buyerData)
         }
        }
      })
    }
  }
}
