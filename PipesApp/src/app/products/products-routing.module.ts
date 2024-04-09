import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { CustomPipeComponent } from './pages/custom-pipe/custom-pipe.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { OrderPageComponent } from './pages/order-page/order-page.component';
import { UncommonsPageComponent } from './pages/uncommons-page/uncommons-page.component';

const routes: Routes = [
  {
    path: 'basics',
    component: BasicsPageComponent
  },
  {
    path: 'numbers',
    component: NumbersPageComponent
  },
  {
    path: 'uncommons',
    component: UncommonsPageComponent
  },
  {
    path: 'custom',
    component: CustomPipeComponent
  },
  {
    path: 'order',
    component: OrderPageComponent
  },
  {
    path: '**',
    redirectTo: 'basics'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
