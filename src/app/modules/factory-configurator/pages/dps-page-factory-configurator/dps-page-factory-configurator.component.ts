import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { DpsTitlePageComponent } from '../../../../shared/components/dps-title-page/dps-title-page.component';
import { DpsFactoryItemComponent } from '../../../../shared/components/dps-factory-item/dps-factory-item.component';
import { FactoryListItem } from '@shared/interfaces/factory-list-item.interface';

@Component({
  selector: 'dps-page-factory-configurator',
  standalone: true,
  imports: [DpsTitlePageComponent, DpsFactoryItemComponent],
  templateUrl: './dps-page-factory-configurator.component.html',
  styleUrl: './dps-page-factory-configurator.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DpsPageFactoryConfiguratorComponent {
  factoryList = signal<FactoryListItem[]>([]);

  constructor() {
    this.factoryList.set([
      {
        id: 1,
        name: 'Samsung Electronics',
        location: 'New York, USA',
        dateOfBuilding: '2001-05-20',
        manufacturingProducts: ['Electronics', 'Home Appliances'],
        numberOfEmployees: 1500,
      },
      {
        id: 2,
        name: 'Volkswagen Group',
        location: 'Berlin, Germany',
        dateOfBuilding: '1998-11-15',
        manufacturingProducts: ['Automobiles', 'Bicycles'],
        numberOfEmployees: 2000,
      },
      {
        id: 3,
        name: 'Sony Corporation',
        location: 'Tokyo, Japan',
        dateOfBuilding: '2010-07-30',
        manufacturingProducts: ['Robotics', 'Electronics'],
        numberOfEmployees: 1800,
      },
    ]);
  }
}
