import { PensamentoService } from './../../../../../backend/Components/pensamentos/pensamento.service';
import { Pensamento } from './../pensamento';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

//precisa ser declarado o formgroup
  formulario!: FormGroup;

  constructor(private service:PensamentoService, private route: Router, private formbuilder: FormBuilder) { }

  ngOnInit(): void {

    //após declarado o formgroup ao iniciar o programa preenchemos com as informações que precisamos
    //O formulário precisa ter as mesmas propriedades do objeto utilizado nas funções senão da erro
    this.formulario = this.formbuilder.group({
      conteudo: ['', Validators.compose([Validators.required, Validators.pattern(/(.|\s)*\S(.|\s)*/)]) ],
      autoria:['', Validators.compose([Validators.required, Validators.minLength(3)])],
      modelo: ['modelo1'],
      favorito: [false]
    })
  }

  criarPensamento(){
    if(this.formulario.valid){
      console.log(this.formulario);
      this.service.criar(this.formulario.value).subscribe(() => this.route.navigate(['/listarPensamento']));
    }
  }
  cancelar(){
    this.route.navigate(['/listarPensamento'])
  }
  habilitarBotao(): string{
    if(this.formulario.valid){
      return 'botao';
    }
    else
    {
     return 'botao__desabilitado'
    }
  }

}
