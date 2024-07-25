import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: ``
})
export class MenuComponent implements OnInit {

  items: MenuItem[] | undefined;

  ngOnInit() {
      this.items = [
        {
          labe: 'Pepes de Angular',
          icon: 'pi pi-desktop',
          items: [
            {
              label: 'Texto y Fechas',
              icon: 'pi pi-align-left'
            },
            {
              labe: 'Numbers',
              icon: 'pi pi-dollar'
            },
            {
              label: 'Number',
              icon: 'pi pi-dollar'
            },
            {
             label: 'No comunes',
             icon: 'pi pi-globe'
            }
          ]
        },
        {
          label: 'Pipes personalizados',
          icon: 'pi pi-cog'
        }
      ];
  }

}
