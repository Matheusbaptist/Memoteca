import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PensamentoService } from './../../../../../backend/Components/pensamentos/pensamento.service';
import { Pensamento } from './../pensamento';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-pensamento',
  templateUrl: './editar-pensamento.component.html',
  styleUrls: ['./editar-pensamento.component.css']
})
export class EditarPensamentoComponent implements OnInit {
formulario!: FormGroup;

pensamento: Pensamento = {
id:0,
conteudo:'',
autoria: '',
modelo:'modelo1',
favorito: false
}

  constructor(private service: PensamentoService, private route: Router, private rout: ActivatedRoute, private FormBuilder: FormBuilder) { }

  ngOnInit(): void {
    const id = this.rout.snapshot.paramMap.get('id')
    this.service.buscarPorId(parseInt(id!)).subscribe((pensamento) => this.pensamento = pensamento)

    this.formulario = this.FormBuilder.group({
      conteudo: [this.pensamento.conteudo, Validators.compose([Validators.required, Validators.pattern(/(.|\s)*\S(.|\s)*/)]) ],
      autoria:[this.pensamento.autoria, Validators.compose([Validators.required, Validators.minLength(3)])],
      modelo: [this.pensamento.modelo],
      favorito:[this.pensamento.favorito]
    })
    console.log(this.formulario)
  }
  editarPensamento(){
    this.service.editar(this.pensamento).subscribe(() => this.route.navigate(['/listarPensamento']))
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
