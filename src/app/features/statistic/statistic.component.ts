import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss']
})
export class StatisticComponent implements OnInit {
  todaySum: Number = 0;
  yesterdaySum: Number = 0;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.fetchTodaySum().subscribe(
      (res: Number) => {
        res = 500;
        if (res != null) {
          this.todaySum = res;
          this.yesterdaySum = 501;
          this.dataService.todaySum = res;
        }
      }
    );
    // this.dataService.fetchYesterdaySum().subscribe(
    //   (res: Number) => {
    //     if (res != null) {
    //       this.yesterdaySum = res;
    //       this.dataService.yesterdaySum = res;
    //     }
    //   }
    // )
  }

}
