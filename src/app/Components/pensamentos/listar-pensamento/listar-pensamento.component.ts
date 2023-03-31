import { PensamentoService } from './../../../../../backend/Components/pensamentos/pensamento.service';
import { Pensamento } from './../pensamento';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  constructor(private service: PensamentoService) { }
  listaPensamentos: Pensamento[] = [];
  paginaAtual: number = 1;
  haMaisPensamentos: boolean = true
  filtro: string = ''

  ngOnInit(): void {
    //listar pensamento sem o this é resultado do observable, o subscribe pega o resultado
    //do observable e joga nessa variavel do angular.
    this.service.listar(this.paginaAtual, this.filtro).subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos
    })
  }

  carregarMaisPensamentos(){
    this.service.listar(++this.paginaAtual, this.filtro).subscribe(listaPensamentos => {this.listaPensamentos.push(...listaPensamentos);
    if(!listaPensamentos.length){
      this.haMaisPensamentos = false
    }})
  }
  pesquisarPensamentos(){
    this.haMaisPensamentos = true
    this.paginaAtual = 1
    //o primeiro lista de pensamentos que vem depois do subscribe é a lista que vai retornar do service
    this.service.listar(this.paginaAtual, this.filtro).subscribe(listaPensamentos => this.listaPensamentos = listaPensamentos)
  }
}
