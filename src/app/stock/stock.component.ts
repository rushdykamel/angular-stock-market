import { Component, Input, OnChanges } from '@angular/core';
import { StockService } from '../common/stock.service';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faSync } from '@fortawesome/free-solid-svg-icons';
import { faTable } from '@fortawesome/free-solid-svg-icons';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.less']
})
export class StockComponent implements OnChanges {

  @Input() stock: any;
  stockDetails: any;
  positiveIcon = faArrowUp;
  negativeIcon = faArrowDown;
  loadingIcon = faSync;
  tableIcon= faTable;
  chartIcon= faChartLine;
  isLoading: boolean = false;
  activeView: string='table';

  constructor(private stockService: StockService) { }

  ngOnChanges() {
    this.stockDetails = this.stock;
    this.isLoading = true;
    this.stockService.getStock(this.stock.symbol).subscribe((data: any) => {
      this.stockDetails.metadata = data.metadata;
      this.stockDetails.series = data.series;
      this.isLoading = false;
    });;
  }

  setActiveView(view:string) {
    this.activeView = view;
  }

}
