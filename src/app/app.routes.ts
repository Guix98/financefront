import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { MainComponent } from './components/main/main.component';
import { ResumenComponent } from './components/resumen/resumen.component';
import { EgresosComponent } from './components/egresos/egresos.component';
import { IngresosComponent } from './components/ingresos/ingresos.component';
import { LoginComponent } from './components/login/login.component';
import { ContratosComponent } from './components/contratos/contratos.component';
import { MaterialesComponent } from './components/materiales/materiales.component';
import { AddContratoComponent } from './components/add-contrato/add-contrato.component';
import { AddPagoComponent } from './components/add-pago/add-pago.component';
import { AddModuloComponent } from './components/add-modulo/add-modulo.component';
import { AddPropositoComponent } from './components/add-proposito/add-proposito.component';
import { AddCompraComponent } from './components/add-compra/add-compra.component';
import { AddMaterialComponent } from './components/add-material/add-material.component';

export const ROUTES: Routes = [
    { path: 'main',
     component: MainComponent,
     children: [
         { path: '', pathMatch: 'full', redirectTo: 'resumen' },
         { path: 'resumen', component: ResumenComponent },
         { path: 'contratos', component: ContratosComponent },
         { path: 'materiales', component: MaterialesComponent },
         { path: 'egreso', component: EgresosComponent },
         { path: 'ingreso', component: IngresosComponent },
         { path: 'agregarcontrato', component: AddContratoComponent },
         { path: 'pagocontrato', component: AddPagoComponent },
         { path: 'modulo', component: AddModuloComponent },
         { path: 'proposito', component: AddPropositoComponent },
         { path: 'compra', component: AddCompraComponent },
         { path: 'material', component: AddMaterialComponent },
        // { path: '**', pathMatch: 'full', redirectTo: 'resumen' },
     ]},
     { path: 'login', component: LoginComponent },
    { path: '', pathMatch: 'full', redirectTo: 'login' },
   // { path: '**', pathMatch: 'full', redirectTo: 'login' },
    //{ path: '/', component: MainComponent },
   // { path: 'path2', component: Name2Component },


    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];
