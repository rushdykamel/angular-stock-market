import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent {

  stocks: any[] = [{
    symbol: 'IBM',
    title: 'IBM'
  }, {
    symbol: 'TSCO.LON',
    title: 'Tesco PLC'
  }, {
    symbol: 'SHOP.TRT',
    title: 'Shopify Inc '
  }, {
    symbol: 'GPV.TRV',
    title: 'GreenPower Motor Company Inc'
  }, {
    symbol: 'DAI.DEX',
    title: 'Daimler AG'
  }, {
    symbol: 'RELIANCE.BSE',
    title: 'Reliance Industries Limited'
  }, {
    symbol: '600104.SHH',
    title: 'SAIC Motor Corporation'
  }, {
    symbol: '000002.SHZ',
    title: 'China Vanke Company Ltd'
  }]

}
