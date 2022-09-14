import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { BuscadorDePlatosComponent } from './buscador-de-platos/buscador-de-platos.component';
import { DetallePlatoComponent } from './detalle-plato/detalle-plato.component';
import { PlatosSeleccionadosComponent } from './platos-seleccionados/platos-seleccionados.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BarDataPlatosComponent } from './bar-data-platos/bar-data-platos.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes:Routes=[
  {path:"home",component:HomeComponent},
  {path:"form",component:FormComponent},
  {path:"detallePlato",component:DetallePlatoComponent},
  {path:"buscadorDePlatos",component:BuscadorDePlatosComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    HomeComponent,
    BuscadorDePlatosComponent,
    DetallePlatoComponent,
    PlatosSeleccionadosComponent,
    NavBarComponent,
    BarDataPlatosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
