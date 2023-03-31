import { ActivatedRoute, Route, Router } from '@angular/router';
import { PensamentoService } from './../../../../../backend/Components/pensamentos/pensamento.service';
import { Pensamento } from './../pensamento';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-excluir-pensamento',
  templateUrl: './excluir-pensamento.component.html',
  styleUrls: ['./excluir-pensamento.component.css']
})
export class ExcluirPensamentoComponent implements OnInit {
pensamento: Pensamento ={
id: 0,
conteudo:'',
autoria: '',
modelo: '',
favorito: false
}
  constructor(private service: PensamentoService, private Router: Router, private Rout: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.Rout.snapshot.paramMap.get('id')
    this.service.buscarPorId(parseInt(id!)).subscribe((pensamento) => this.pensamento = pensamento)
  }

  excluirPensamento(){
    if(this.pensamento.id){
      this.service.excluirPensamento(this.pensamento.id).subscribe(() => this.Router.navigate(['/listarPensamento']))
        }
  }

  cancelar(){
    this.Router.navigate(['/listarPensamento'])
  }
}
