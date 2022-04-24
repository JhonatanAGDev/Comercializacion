import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { InicioComponent } from './inicio/inicio.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    HeaderComponent,
    InicioComponent,
    FooterComponent
  ],
  exports: [
    HeaderComponent,
    InicioComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TiendaModule { }
