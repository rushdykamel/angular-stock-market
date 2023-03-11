import { Component } from '@angular/core';
import { faChartLine, faChartSimple } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {
  logoIcon = faChartLine;
  sloganIcon = faChartSimple;
  
}
