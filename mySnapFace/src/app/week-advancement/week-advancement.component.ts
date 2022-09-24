import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-week-advancement',
  templateUrl: './week-advancement.component.html',
  styleUrls: ['./week-advancement.component.scss']
})
export class WeekAdvancementComponent implements OnInit {

weekAdvencement!: number;
actualDay!: number;
actualHour!: number;
actualMinute!: number;

  ngOnInit(): void {
    this.actualDay = new Date().getDay();
    this.actualHour = new Date().getHours();
    this.actualMinute = new Date().getMinutes();
    this.weekAdvencement = (((this.actualDay)*24 + this.actualHour) / (7*24));
  }

}
