import { Component } from '@angular/core';

@Component({
  selector: 'app-uncommons-page',
  templateUrl: './uncommons-page.component.html',
  styles: ``
})
export class UncommonsPageComponent {

  //i18nSelect
  public name: string = 'Linus'; 
  public gender: 'male'|'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }
  public changeClient(): void {
    this.name = 'Michelle';
    this.gender = 'female';
  }

  //i18nPlural
  public clients: string[] = ['Jon', 'Linus', 'Peter','Michelle','Melissa', 'Samuel'];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'sólo quedan # clientes en cola!.',
    'other': 'tenemos # clientes esperando.',
  }
  public removeClient(): void {
    this.clients.shift();
  }
}
