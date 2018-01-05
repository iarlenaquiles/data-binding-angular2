import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url = 'http://iarlen.training';
  urlImagem = 'http://lorempixel.com/400/200/nature/';
  cursoAngular: boolean = true;
  valorAtual: string = '';
  valorSalvo: string = '';

  getValor(){
    return 1;
  }

  getCurtirCurso(){
    return true;
  }

  botaoClicado(){
    alert('Botao clicado');
  }

  onKeyUp(evento:KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>evento.target).value; 
  }

  salvarValor(valor){
    this.valorSalvo = valor;
  }

  mouseOver(){
    alert("Over");
  }

  mouseOut(){
    alert("Out");
  }
  constructor() {

   }

  ngOnInit() {
  }

}
