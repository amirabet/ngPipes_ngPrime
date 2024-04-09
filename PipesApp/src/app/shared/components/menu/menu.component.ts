import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {
  public menuItems: MenuItem[] = [];

  ngOnInit() {
    this.menuItems = [
      { 
        label: 'Pipes de Angular', 
        icon: 'pi pi-desktop',
        items:[
          {
            label: 'Textos y Fechas',
            icon: 'pi pi-align-left',
            routerLink: 'basics',
            routerLinkActiveOptions: { exact: true }
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
            label: 'Custom Pipe',
            icon: 'pi pi-user-edit',
            routerLink: 'custom',
          },
          {
            label: 'Ordenación',
            icon: 'pi pi-sort-alt',
            routerLink: 'order',
          }
        ]
        }
    ];
  }


}
