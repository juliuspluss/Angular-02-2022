import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LisaComponent } from './lisa/lisa.component';

const routes: Routes = [
  {path: "lisa", component: LisaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
