import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FactoryListItem } from '@shared/interfaces/factory-list-item.interface';

@Component({
  selector: 'dps-factory-item',
  standalone: true,
  imports: [],
  templateUrl: './dps-factory-item.component.html',
  styleUrl: './dps-factory-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DpsFactoryItemComponent {

  factoryItem = input<FactoryListItem | null>(null);

 }
