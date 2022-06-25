import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RouteService } from '../route.service';
import { ClientesComponent } from '../clientes/clientes.component';
import { CategoriasComponent } from '../categorias/categorias.component';
import { ProdutosComponent } from '../produtos/produtos.component';
import { HomepageComponent } from '../homepage/homepage.component';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [
  RouteService.withShell([
    { path: '', redirectTo: '/homepage', pathMatch: 'full' },
    // {
    //   path: 'home',
    //   component: HomeComponent,
    //   data: {
    //     title: 'home'
    //   }
    // },
    {
      path: 'homepage',
      component: HomepageComponent,
      data: {
        title: 'homepage'
      }
    },
    {
      path: 'clientes',
      component: ClientesComponent,
      data: {
        title: 'clientes'
      }
    },
    {
      path: 'categorias',
      component: CategoriasComponent,
      data: {
        title: 'categorias'
      }
    },
    {
      path: 'produtos',
      component: ProdutosComponent,
      data: {
        title: 'produtos'
      }
    }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
