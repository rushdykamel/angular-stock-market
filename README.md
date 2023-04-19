# Angular Stock Market

This project was build in Angular and uses a free public stock market API 

Thanks to https://www.alphavantage.co/ for the API

The app shows real-life stock data for 8 companies, shown in tables and charts (using chart.js and ng2-chart)

For performance, it loads static data for all companies, change that by modifying stock.service.ts (uncommenting/commenting first lines in getStock())
---

## How to run

Run `npm install`, if needed add `--legacy-peer-deps`

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

---

## Screenshot
![alt screenshot](https://github.com/rushdykamel/angular-stock-market/blob/master/stock-market.png?raw=true)