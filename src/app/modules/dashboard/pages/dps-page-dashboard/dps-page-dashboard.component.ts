import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DpsTitlePageComponent } from '@shared/components/dps-title-page/dps-title-page.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';

@Component({
  selector: 'dps-page-dashboard',
  standalone: true,
  imports: [DpsTitlePageComponent, CardModule, ButtonModule, PanelModule],
  templateUrl: './dps-page-dashboard.component.html',
  styleUrl: './dps-page-dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DpsPageDashboardComponent implements OnInit {
  ngOnInit() {}
}
