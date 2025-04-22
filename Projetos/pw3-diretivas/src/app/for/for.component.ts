import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-for',
  imports: [],
  templateUrl: './for.component.html',
  styleUrl: './for.component.css'
})
export class ForComponent {

  professores: string[] = ["Correx", "Wilton", "Saulo", "Bangladesh", "Nancí"];

  remover(index: number){
    this.professores.splice(index, 1);
  }
  nomeNovo:any
  adicionar(){
    this.nomeNovo = document.getElementById("NomeInput")?.ariaValueNow
    console.log(this.nomeNovo)
    this.professores.push(this.nomeNovo)
  }
}
