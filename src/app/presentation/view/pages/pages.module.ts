import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LoginModule } from './login/login.module';
import { HomeModule } from './home/home.module';
import { ProdutosModule } from './produtos/produtosModule';
import { HomePageModule } from './homepage/homepagemodule';

import { ClientesComponent } from './clientes/clientes.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [ClientesComponent, CategoriasComponent],
  imports: [
    CommonModule,
    LoginModule,
    HomeModule,
    ProdutosModule,
    HomePageModule,
    PagesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [PagesRoutingModule]
})
export class PagesModule { }
