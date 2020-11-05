import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ResumenComponent } from './components/resumen/resumen.component';
import { MainComponent } from './components/main/main.component';
import { EgresosComponent } from './components/egresos/egresos.component';
import { IngresosComponent } from './components/ingresos/ingresos.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { ContratosComponent } from './components/contratos/contratos.component';
import { MaterialesComponent } from './components/materiales/materiales.component';
import { AddContratoComponent } from './components/add-contrato/add-contrato.component';
import { AddPagoComponent } from './components/add-pago/add-pago.component';
import { ContactosComponent } from './components/contactos/contactos.component';
import { AddModuloComponent } from './components/add-modulo/add-modulo.component';
import { AddPropositoComponent } from './components/add-proposito/add-proposito.component';
import { AddCompraComponent } from './components/add-compra/add-compra.component';
import { AddMaterialComponent } from './components/add-material/add-material.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ResumenComponent,
    MainComponent,
    EgresosComponent,
    IngresosComponent,
    LoginComponent,
    ContratosComponent,
    MaterialesComponent,
    AddContratoComponent,
    AddPagoComponent,
    ContactosComponent,
    AddModuloComponent,
    AddPropositoComponent,
    AddCompraComponent,
    AddMaterialComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
