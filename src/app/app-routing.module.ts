import { EditarPensamentoComponent } from './Components/pensamentos/editar-pensamento/editar-pensamento.component';
import { ExcluirPensamentoComponent } from './Components/pensamentos/excluir-pensamento/excluir-pensamento.component';
import { ListarPensamentoComponent } from './Components/pensamentos/listar-pensamento/listar-pensamento.component';
import { CriarPensamentoComponent } from './Components/pensamentos/criar-pensamento/criar-pensamento.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'criarPensamento',
    component: CriarPensamentoComponent
  },
  {
    path:'listarPensamento',
    component: ListarPensamentoComponent
  },
  {
    path:'pensamentos/excluirPensamento/:id',
    component: ExcluirPensamentoComponent
  },
  {
    path:'pensamentos/editarPensamento/:id',
    component: EditarPensamentoComponent
  },
  {
    path:'',
    redirectTo: 'listarPensamento',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
