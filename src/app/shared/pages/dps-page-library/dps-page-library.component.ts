import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { DpsTitlePageComponent } from '../../components/dps-title-page/dps-title-page.component';
import { DropdownModule } from 'primeng/dropdown';



@Component({
  selector: 'dps-page-library',
  standalone: true,
  imports: [DpsTitlePageComponent, DropdownModule],
  templateUrl: './dps-page-library.component.html',
  styleUrl: './dps-page-library.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DpsPageLibraryComponent {
  variants = signal<any[]>([]);
  selectedVariant = signal('0');


  constructor() {
    this.variants.set([
      {id: '0', name: 'Default' },
      {id: '1', name: 'Without icon' }
    ]);
  }

  selectVariant(event: any) {
    console.log(event);
    this.selectedVariant.set(event.value);
  }
}
