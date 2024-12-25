import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { MenuByRolesService } from 'src/app/core/services/menu-by-roles.service';

@Component({
  selector: 'dps-header',
  standalone: true,
  imports: [
    MenubarModule,
    ButtonModule,
    InputTextModule,
    RouterLink,
    TranslatePipe,
  ],
  templateUrl: './dps-header.component.html',
  styleUrl: './dps-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DpsHeaderComponent implements OnInit {
  /*
   ** Public variables
   */
  items = signal<MenuItem[]>([]);
  some = signal<string>('something');

  /*
   ** Services
   */
  menuByRolesService = inject(MenuByRolesService);

  ngOnInit(): void {
    this.items.set(this.menuByRolesService.menuItems());
  }
}
