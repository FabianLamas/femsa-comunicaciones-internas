import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraNavegacionComponent } from './barra-navegacion/barra-navegacion.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { HeaderBanerComponent } from './header-baner/header-baner.component';
import { ConectividadComponent } from './conectividad/conectividad.component';
import { LinkButtonsComponent } from './link-buttons/link-buttons.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraNavegacionComponent,
    NoticiasComponent,
    HeaderBanerComponent,
    ConectividadComponent,
    LinkButtonsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
