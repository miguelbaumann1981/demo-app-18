import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DpsTitlePageComponent } from '../../../../shared/components/dps-title-page/dps-title-page.component';

@Component({
  selector: 'dps-page-factory-configurator',
  standalone: true,
  imports: [DpsTitlePageComponent],
  templateUrl: './dps-page-factory-configurator.component.html',
  styleUrl: './dps-page-factory-configurator.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DpsPageFactoryConfiguratorComponent {}
