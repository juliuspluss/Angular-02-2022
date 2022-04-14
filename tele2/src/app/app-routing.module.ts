import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PacketComponent } from './packet/packet.component';

const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: "packet/:id", component: PacketComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
