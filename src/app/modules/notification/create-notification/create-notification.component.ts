import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from '../notification.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-notification',
  templateUrl: './create-notification.component.html',
  styleUrls: ['./create-notification.component.scss']
})
export class CreateNotificationComponent {

  notificationFormGroup = new FormGroup({
    title: new FormControl(null, [Validators.required]),
    content: new FormControl(null, [Validators.required]),
  });

constructor(
  private notificationService: NotificationService,
  private snackBar: MatSnackBar
){}

  onSave(){
    const data: any = {
      title: this.notificationFormGroup.controls.title.value,
      content: this.notificationFormGroup.controls.content.value
    }
    this.notificationService.createNotification(data).subscribe({
      next: (res)=>{
        this.snackBar.open('Notification Created Successfully');
      },
      error: (err)=>{
        this.snackBar.open('Oopz Something Went Wrong');
      }
    })
  }

}
