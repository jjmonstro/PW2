import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-aleatorio',
  imports: [],
  templateUrl: './aleatorio.component.html',
  styleUrl: './aleatorio.component.css'
})
export class AleatorioComponent {
  @Input()  min: number = 0;
  @Input()  max: number = 10;

  gerar(){
    return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
  }

}
