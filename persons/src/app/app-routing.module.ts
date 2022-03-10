import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValitudComponent } from './valitud/valitud.component';
import { InimesedComponent } from './inimesed/inimesed.component';
import { UusInimeneComponent } from './uus-inimene/uus-inimene.component';

const routes: Routes = [
  { path: "valitud", component: ValitudComponent },
  { path: "inimesed", component: InimesedComponent },
  { path: "uusinimene", component: UusInimeneComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
