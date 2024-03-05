import { Component } from '@angular/core';
import { Color } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-launchpad',
  templateUrl: './launchpad.component.html',
  styleUrls: ['./launchpad.component.scss']
})
export class LaunchpadComponent {

  saleData = [
    { name: "Polo", value: 105000 },
    { name: "Adidas", value: 55000 },
    { name: "Gucci", value: 15000 },
    { name: "Tommy Hilfiger", value: 150000 },
    { name: "Louis Vuitton", value: 20000 }
  ];


}

