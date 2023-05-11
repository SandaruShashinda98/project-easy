import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-notice',
  templateUrl: './create-notice.component.html',
  styleUrls: ['./create-notice.component.scss']
})
export class CreateNoticeComponent {

  form = new FormGroup({
    title: new FormControl(null, [Validators.required]),
    // start_date: new FormControl(null, [Validators.required]),
    // start_time: new FormControl(null, [Validators.required]),
    // end_date: new FormControl(null),
    // end_time: new FormControl(null),
    content: new FormControl(null, [Validators.required]),
  });

  todayDate: Date = new Date();

  onSave(){
    console.log(this.form.value)
  }

}
