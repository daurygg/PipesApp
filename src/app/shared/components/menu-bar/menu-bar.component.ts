import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'shared-menu-bar',
  templateUrl: './menu-bar.component.html',
  styles: ``
})
export class MenuBarComponent {

  items2 : MenuItem[] | undefined;
  items  : MenuItem[] | undefined;

  constructor(private router: Router){}

  ngOnInit() {
      this.items = [
        {
          label: 'Pipes de Angular',
          icon: 'pi pi-desktop',
          items: [
            {
              label: 'Texto y Fechas',
              icon: 'pi pi-dollar',
            },
            {
              label: 'Number',
              icon: 'pi pi-dollar',
              routerLink: 'numbers'
            },
            {
              label: 'No comunes',
              icon: 'pi pi-globe',
              routerLink: 'uncommon'
            },
          ],
        },
        {
          label: 'Pipes personalizados',
          icon: 'pi pi-cog',
          items: [
            {
              label: 'otro elemento',
              icon: 'pi pi-cog',
              item: [
                {
                  label: 'Templates',
                  icon: 'pi pi-palette',
                  items: [
                    {
                      label: 'Apollo',
                      icon: 'pi pi-palette',
                    },
                    {
                      label: 'Ultima',
                      icon: 'pi pi-palette',
                    },
                  ],
                },
              ],
            },
            {
              label: 'otra cosa',
            },
          ],
        },
      ];
  }


}
