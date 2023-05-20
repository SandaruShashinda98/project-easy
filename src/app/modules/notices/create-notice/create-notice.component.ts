import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NoticesService } from '../notices.service';

@Component({
  selector: 'app-create-notice',
  templateUrl: './create-notice.component.html',
  styleUrls: ['./create-notice.component.scss']
})
export class CreateNoticeComponent {

  noticeFormGroup = new FormGroup({
    title: new FormControl(null, [Validators.required]),
    content: new FormControl(null, [Validators.required]),
  });

constructor(
  private noticeService: NoticesService
){}

  onSave(){
    const data: any = {
      title: this.form.controls.title.value,
      content: this.form.controls.content.value
    }
    this.noticeService.createNotice(data).subscribe({
      next: (res)=>{
        // notice added
      },
      error: (err)=>{
        // err
      }
    })
  }

}
