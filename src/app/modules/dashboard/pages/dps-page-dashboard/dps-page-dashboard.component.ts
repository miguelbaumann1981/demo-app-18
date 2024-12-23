import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DpsTitlePageComponent } from '../../../../shared/components/dps-title-page/dps-title-page.component';

@Component({
  selector: 'dps-page-dashboard',
  standalone: true,
  imports: [
    DpsTitlePageComponent
  ],
  templateUrl: './dps-page-dashboard.component.html',
  styleUrl: './dps-page-dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DpsPageDashboardComponent { }
