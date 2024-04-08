import { Component } from '@angular/core';

import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent {

  public menuItems: MenuItem[] = [];

  ngOnInit(){
    this.menuItems = [
      { 
        label: 'Pipes de Angular', 
        icon: 'pi pi-desktop',
        items:[
          {
            label: 'Textos y Fechas',
            icon: 'pi pi-align-left',
            routerLink: '/',
            routerLinkActiveOptions: {},
          },
          {
            label: 'Números',
            icon: 'pi pi-dollar',
            routerLink: 'numbers',
            routerLinkActiveOptions: {},
          },
          {
            label: 'No comunes',
            icon: 'pi pi-globe',
            routerLink: 'uncommons',
            routerLinkActiveOptions: {},
          }
        ]
      },
      {
        label: 'Pipes personalizados', 
        icon: 'pi pi-cog',
        items:[
          {
            label: 'Otro elemento',
            icon: 'pi pi-cog'
          }
        ]
        }
    ];
  }


}
