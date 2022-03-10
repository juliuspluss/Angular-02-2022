import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ValitudComponent } from './valitud/valitud.component';
import { InimesedComponent } from './inimesed/inimesed.component';
import { UusInimeneComponent } from './uus-inimene/uus-inimene.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ValitudComponent,
    InimesedComponent,
    UusInimeneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
