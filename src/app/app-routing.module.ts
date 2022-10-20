import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscadorDePlatosComponent } from './buscador-de-platos/buscador-de-platos.component';
import { DetallePlatoComponent } from './detalle-plato/detalle-plato.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './pages/search-page/home/home.component';
import { SearchPageComponent } from './pages/search-page/search/search-page.component';

const routes:Routes=[
  {path:"home", component:HomeComponent},
  {path:"form",component:FormComponent},
  {path:"detallePlato/:id",component:DetallePlatoComponent},
  {path:"searchPage",component:SearchPageComponent}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes, {onSameUrlNavigation: "reload"})],
  exports: [RouterModule]

})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent,FormComponent,DetallePlatoComponent,BuscadorDePlatosComponent]