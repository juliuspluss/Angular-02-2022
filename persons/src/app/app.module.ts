import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ValitudComponent } from './valitud/valitud.component';
import { InimesedComponent } from './inimesed/inimesed.component';
import { UusInimeneComponent } from './uus-inimene/uus-inimene.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MuutmineComponent } from './muutmine/muutmine.component';
import { YksikInimeneComponent } from './yksik-inimene/yksik-inimene.component';

@NgModule({
  declarations: [
    AppComponent,
    ValitudComponent,
    InimesedComponent,
    UusInimeneComponent,
    MuutmineComponent,
    YksikInimeneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
