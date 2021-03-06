import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Charts';

  public links = {
    Demo: ['/Demo'],
    VerMutltiBar: ['/VerMutltiBar'],
    HorMultiBar: ['/HorMultiBar'],
    stackgroupedmultibar: ['/stackgroupedmultibar'],
    DiscreteBar: ['/DiscreteBar'],
    SimpleLine: ['/SimpleLine'],
    stackedarea: ['/stackedarea'],
    cumulativeline: ['/cumulativeline'],
    viewfinder: ['/viewfinder'],
    bulletchart: ['/bulletchart'],
    linebar: ['/linebar'],
    pie: ['/pie'],
    scatteredbbl: ['/scatteredbbl'],
    candlestick: ['/candlestick'],
    boxplot: ['/boxplot'],
    force: ['/force'],
    Sunburst: ['/Sunburst'],
    Ohlc: ['/Ohlc']
  }

}
