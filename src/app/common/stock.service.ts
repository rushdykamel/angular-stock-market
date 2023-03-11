import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private http: HttpClient) { }

  getStock(symbol: string): any {
    return this.http.get(`assets/query.json`)
    // uncomment this line (and comment above) if you would like to return real data (it will be a bit slower)
    //return this.http.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol}&outputsize=full&apikey=demo`)
    .pipe(map((data:any) => {
      let modifiedResponse = {
        metadata: data['Meta Data'],
        series: data['Time Series (Daily)']
      };
      modifiedResponse.series = Object.keys(modifiedResponse.series).map(k => { 
        let data = modifiedResponse.series[k];
        let performance:any = 0, status='', open = parseFloat(data['1. open']), close = parseFloat(data['4. close']);
        if (open < close) {
          performance = (close-open) / open;
          status = 'positive';
        } else if (open > close) { 
          performance = (open-close) / close;
          status = 'negative';
        }
        performance = (performance.toPrecision(2) * 100).toFixed(2);

        return {  
          date: k,
          open: open,
          high: data['2. high'],
          low: data['3. low'],
          close: close,
          performance: performance,
          status: status
        } 
      });
      return modifiedResponse;
    }));

  }
  
}
