import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ComponenteComponent } from './componente/componente.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ComponenteComponent,
    CabecalhoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
