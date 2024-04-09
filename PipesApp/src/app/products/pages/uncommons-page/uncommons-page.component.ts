import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

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

  //JSON and KeyValue
  public person = {
    name: 'Linus',
    surname: 'Torvald',
    adress: 'Vistaegre sn, 08921'
  }

  // Async Pipe part1: Observable
  public myObservableTimer: Observable<number> = interval(1000).pipe(
    tap( value => console.log('tap', value) )
  );

  // Async Pipe part2: Promise
  public promiseValue = new Promise<string> ((resolve, reject) => {
    setTimeout(() =>{
        resolve('Promise data fullfilled, reload the page to launch again.');
    }, 6000);
  })
}

