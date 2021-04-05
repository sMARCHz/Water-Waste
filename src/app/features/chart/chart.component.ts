import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  chart: any;
  todayRate;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.createChart();
  }

  createChart() {
    this.dataService.fetchTodayRate().subscribe(
      (res) => {
        this.todayRate = res;
        let data;
        if (this.todayRate == null) {
          data = [];
        }
        else {
          data = [...this.todayRate];
        }
        var canvas = <HTMLCanvasElement>document.getElementById('lineChart');
        var ctx = canvas.getContext('2d');
        this.chart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: [...Array(100).keys()],
            datasets: [{
              label: 'Water flow rate (m3/s)',
              data: data,
              fill: false,
              lineTension: 0.3,
              borderColor: "#58cffa",
              borderWidth: 2
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false
          }
        });
      }
    )
  }
}
