import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { DpsTitlePageComponent } from '@shared/components/dps-title-page/dps-title-page.component';
import { DropdownModule } from 'primeng/dropdown';

interface Variant { id: string; name: string; }


@Component({
  selector: 'lib-title-page',
  standalone: true,
  imports: [DpsTitlePageComponent, DropdownModule],
  templateUrl: './lib-title-page.component.html',
  styleUrl: '../../styles-library/library.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LibTitlePageComponent { 
  
  variants = signal<Variant[]>([]);
  selectedVariant = signal('0');
  
  constructor() {
    this.variants.set([
      { id: '0', name: 'Default' },
      { id: '1', name: 'Without icon' }
    ]);
  }

  /**
   * Updates the selected variant based on the event value.
   * 
   * @param event - The event containing the selected variant value.
   */
  selectVariant(event: any) {
    this.selectedVariant.set(event.value);
  }
}
