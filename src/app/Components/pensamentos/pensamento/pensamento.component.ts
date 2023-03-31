import { Pensamento } from './../pensamento';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {

  constructor() { }

//essa prop input diz basicamente que essa variavel vai receber informações do componente pai
  @Input() pensamento: Pensamento ={
    id: 1,
    conteudo:'i love angular',
    autoria:'Matheus',
    modelo: 'modelo3',
    favorito: false
  }

  ngOnInit(): void {
  }

  larguraPensamento(): string{
    if(this.pensamento.conteudo.length >= 256){
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }

}
