import { LineBarChartComponent } from './components/Line-bar/line-bar.component';
import { PieChartComponent } from './components/pie-chart/pie.component';
import { CumulativeLineComponent } from './components/cumulative-line/cumulative-line.component';
import { StackedAreaComponent } from './components/stacked-area/stackedarea.component';
import { SimpleLineChartComponent } from './components/simple-line/simpleline.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { Routes } from '@angular/router';
import { BulletChartComponent } from './components/bullet-chart/bullet-chart.component';
import { HMBChartComponent } from './components/hor-mul-bar/hmb.component';
import { MultiBarChartComponent } from './components/multi-bar/bar.component';
import { StackedGroupedMultiBarComponent } from './components/stacked-grouped-multi-bar/stacked-grouped-multi-bar';
import { LineViewFinderChartComponent } from './components/LineView/lineview.component';
import {ScatteredBubbleChartComponent} from './components/scattered-bubble/scattered-bubble.component';

export const ROUTES: Routes =
  [
    { path: '', component: HMBChartComponent },
    { path: 'HMBchart', component: HMBChartComponent },
    { path: 'MultiBar', component: MultiBarChartComponent },
    { path: 'barchart', component: BarChartComponent },
    { path: 'bulletchart', component: BulletChartComponent },
    { path: 'stackgroupedmultibar', component: StackedGroupedMultiBarComponent },
    { path: 'stackedarea', component: StackedAreaComponent },
    { path: 'SimpleLine', component: SimpleLineChartComponent },
    { path: 'viewfinder', component: LineViewFinderChartComponent },
    { path: 'cumulativeline', component: CumulativeLineComponent },
    { path: 'linebar', component: LineBarChartComponent },
    { path: 'pie', component: PieChartComponent },
    { path: 'scatteredbbl', component: ScatteredBubbleChartComponent },
    { path: '*', component: HMBChartComponent }
  ];
