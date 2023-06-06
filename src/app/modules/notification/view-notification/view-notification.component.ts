import { Component } from '@angular/core';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-view-notification',
  templateUrl: './view-notification.component.html',
  styleUrls: ['./view-notification.component.scss']
})
export class ViewNotificationComponent {

  notificationList:any = []

  constructor(
    private notificationService: NotificationService
  ){
    this.notificationList.push(
      {
        title: 'test title',
        content: 'test content',
        isRead: false,
      },
      {
        title: 'test title 2',
        content: 'test content 2',
        isRead: true,
      }
    )
  }

  onRead(index:number){
    console.log(index)
    this.notificationService.changeReadStatus(true).subscribe({
      next: ()=>{
        //
      },
      error: ()=>{
        //
      }
    })
  }

}
