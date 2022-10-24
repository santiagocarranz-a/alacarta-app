import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BarDataPlatosComponent } from './bar-data-platos/bar-data-platos.component';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { PlatosItemComponent } from './platos-item/platos-item.component';
import { SearchPageComponent } from './pages/search-page/search/search-page.component';
import { HomePlatosService } from 'src/services/home-platos.service';
import { PlatosService } from 'src/services/platos.service';
import {CorroborarPlatosService} from 'src/services/corroborar-platos.service'


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    NavBarComponent,
    BarDataPlatosComponent,
    PlatosItemComponent,
    SearchPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,

  ],
  providers: [HomePlatosService,PlatosService, CorroborarPlatosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
