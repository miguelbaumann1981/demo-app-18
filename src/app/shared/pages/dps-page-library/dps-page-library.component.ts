import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LibTitlePageComponent } from '../components-library/lib-title-page/lib-title-page.component';




@Component({
  selector: 'dps-page-library',
  standalone: true,
  imports: [LibTitlePageComponent],
  templateUrl: './dps-page-library.component.html',
  styleUrl: './dps-page-library.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DpsPageLibraryComponent {
  
}
