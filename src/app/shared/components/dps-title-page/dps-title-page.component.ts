import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'dps-title-page',
  standalone: true,
  imports: [],
  templateUrl: './dps-title-page.component.html',
  styleUrl: './dps-title-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DpsTitlePageComponent {

  icon = input<string>();
  text = input.required<string>();


 }
