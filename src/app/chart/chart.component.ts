import { Component, OnChanges, OnInit, Input, ViewChild } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration } from 'chart.js';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.less']
})
export class ChartComponent implements OnChanges {

  chartData: any[] = [];
  chartLabels: string[] = []
  chartOptions: any;
  @Input() chartDetails:any;

  @ViewChild(BaseChartDirective) chart: any;

  lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [],
        label: 'Open',
        fill: 'origin',
      },
      {
        data: [],
        label: 'Close',
        fill: 'origin',
      }
    ],
    labels: []
  };

  lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.5
      }
    },
    maintainAspectRatio: false
  };

  ngOnChanges() {
    let lastWeekData = this.chartDetails.slice(0, 7).reverse();
    let lastWeekDays = lastWeekData.map((record:any) => record.date);
    let lastWeekOpenValues = lastWeekData.map((record:any) => record.open);
    let lastWeekCloseValues = lastWeekData.map((record:any) => record.close);
    
    this.lineChartData.labels = lastWeekDays;
    this.lineChartData.datasets[0].data= lastWeekCloseValues;
    this.lineChartData.datasets[1].data= lastWeekOpenValues;

    setTimeout(() => {
      this.chart.update();
    }, 0);
  }

}
